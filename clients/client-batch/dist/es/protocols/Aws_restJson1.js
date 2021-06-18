import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CancelJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/canceljob";
          body = JSON.stringify(
            __assign(
              __assign({}, input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
              input.reason !== undefined && input.reason !== null && { reason: input.reason }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateComputeEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/createcomputeenvironment";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.computeEnvironmentName !== undefined &&
                          input.computeEnvironmentName !== null && {
                            computeEnvironmentName: input.computeEnvironmentName,
                          }
                      ),
                      input.computeResources !== undefined &&
                        input.computeResources !== null && {
                          computeResources: serializeAws_restJson1ComputeResource(input.computeResources, context),
                        }
                    ),
                    input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }
                  ),
                  input.state !== undefined && input.state !== null && { state: input.state }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }
              ),
              input.type !== undefined && input.type !== null && { type: input.type }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateJobQueueCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/createjobqueue";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.computeEnvironmentOrder !== undefined &&
                        input.computeEnvironmentOrder !== null && {
                          computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(
                            input.computeEnvironmentOrder,
                            context
                          ),
                        }
                    ),
                    input.jobQueueName !== undefined &&
                      input.jobQueueName !== null && { jobQueueName: input.jobQueueName }
                  ),
                  input.priority !== undefined && input.priority !== null && { priority: input.priority }
                ),
                input.state !== undefined && input.state !== null && { state: input.state }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteComputeEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/deletecomputeenvironment";
          body = JSON.stringify(
            __assign(
              {},
              input.computeEnvironment !== undefined &&
                input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteJobQueueCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/deletejobqueue";
          body = JSON.stringify(
            __assign({}, input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue })
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeregisterJobDefinitionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/deregisterjobdefinition";
          body = JSON.stringify(
            __assign(
              {},
              input.jobDefinition !== undefined &&
                input.jobDefinition !== null && { jobDefinition: input.jobDefinition }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeComputeEnvironmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/describecomputeenvironments";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.computeEnvironments !== undefined &&
                    input.computeEnvironments !== null && {
                      computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
                    }
                ),
                input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeJobDefinitionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/describejobdefinitions";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.jobDefinitionName !== undefined &&
                        input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }
                    ),
                    input.jobDefinitions !== undefined &&
                      input.jobDefinitions !== null && {
                        jobDefinitions: serializeAws_restJson1StringList(input.jobDefinitions, context),
                      }
                  ),
                  input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
                ),
                input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
              ),
              input.status !== undefined && input.status !== null && { status: input.status }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeJobQueuesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/describejobqueues";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.jobQueues !== undefined &&
                    input.jobQueues !== null && {
                      jobQueues: serializeAws_restJson1StringList(input.jobQueues, context),
                    }
                ),
                input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/describejobs";
          body = JSON.stringify(
            __assign(
              {},
              input.jobs !== undefined &&
                input.jobs !== null && { jobs: serializeAws_restJson1StringList(input.jobs, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/listjobs";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.arrayJobId !== undefined && input.arrayJobId !== null && { arrayJobId: input.arrayJobId }
                      ),
                      input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }
                    ),
                    input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }
                  ),
                  input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
                ),
                input.multiNodeJobId !== undefined &&
                  input.multiNodeJobId !== null && { multiNodeJobId: input.multiNodeJobId }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v1/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1RegisterJobDefinitionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/registerjobdefinition";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                {},
                                input.containerProperties !== undefined &&
                                  input.containerProperties !== null && {
                                    containerProperties: serializeAws_restJson1ContainerProperties(
                                      input.containerProperties,
                                      context
                                    ),
                                  }
                              ),
                              input.jobDefinitionName !== undefined &&
                                input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }
                            ),
                            input.nodeProperties !== undefined &&
                              input.nodeProperties !== null && {
                                nodeProperties: serializeAws_restJson1NodeProperties(input.nodeProperties, context),
                              }
                          ),
                          input.parameters !== undefined &&
                            input.parameters !== null && {
                              parameters: serializeAws_restJson1ParametersMap(input.parameters, context),
                            }
                        ),
                        input.platformCapabilities !== undefined &&
                          input.platformCapabilities !== null && {
                            platformCapabilities: serializeAws_restJson1PlatformCapabilityList(
                              input.platformCapabilities,
                              context
                            ),
                          }
                      ),
                      input.propagateTags !== undefined &&
                        input.propagateTags !== null && { propagateTags: input.propagateTags }
                    ),
                    input.retryStrategy !== undefined &&
                      input.retryStrategy !== null && {
                        retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
                      }
                  ),
                  input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }
                ),
                input.timeout !== undefined &&
                  input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }
              ),
              input.type !== undefined && input.type !== null && { type: input.type }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1SubmitJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/submitjob";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                __assign(
                                  __assign(
                                    {},
                                    input.arrayProperties !== undefined &&
                                      input.arrayProperties !== null && {
                                        arrayProperties: serializeAws_restJson1ArrayProperties(
                                          input.arrayProperties,
                                          context
                                        ),
                                      }
                                  ),
                                  input.containerOverrides !== undefined &&
                                    input.containerOverrides !== null && {
                                      containerOverrides: serializeAws_restJson1ContainerOverrides(
                                        input.containerOverrides,
                                        context
                                      ),
                                    }
                                ),
                                input.dependsOn !== undefined &&
                                  input.dependsOn !== null && {
                                    dependsOn: serializeAws_restJson1JobDependencyList(input.dependsOn, context),
                                  }
                              ),
                              input.jobDefinition !== undefined &&
                                input.jobDefinition !== null && { jobDefinition: input.jobDefinition }
                            ),
                            input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }
                          ),
                          input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }
                        ),
                        input.nodeOverrides !== undefined &&
                          input.nodeOverrides !== null && {
                            nodeOverrides: serializeAws_restJson1NodeOverrides(input.nodeOverrides, context),
                          }
                      ),
                      input.parameters !== undefined &&
                        input.parameters !== null && {
                          parameters: serializeAws_restJson1ParametersMap(input.parameters, context),
                        }
                    ),
                    input.propagateTags !== undefined &&
                      input.propagateTags !== null && { propagateTags: input.propagateTags }
                  ),
                  input.retryStrategy !== undefined &&
                    input.retryStrategy !== null && {
                      retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
                    }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }
              ),
              input.timeout !== undefined &&
                input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1TerminateJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/terminatejob";
          body = JSON.stringify(
            __assign(
              __assign({}, input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
              input.reason !== undefined && input.reason !== null && { reason: input.reason }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v1/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          query = __assign(
            {},
            input.tagKeys !== undefined && {
              tagKeys: (input.tagKeys || []).map(function (_entry) {
                return _entry;
              }),
            }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateComputeEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/updatecomputeenvironment";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.computeEnvironment !== undefined &&
                      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }
                  ),
                  input.computeResources !== undefined &&
                    input.computeResources !== null && {
                      computeResources: serializeAws_restJson1ComputeResourceUpdate(input.computeResources, context),
                    }
                ),
                input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }
              ),
              input.state !== undefined && input.state !== null && { state: input.state }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateJobQueueCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v1/updatejobqueue";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.computeEnvironmentOrder !== undefined &&
                      input.computeEnvironmentOrder !== null && {
                        computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(
                          input.computeEnvironmentOrder,
                          context
                        ),
                      }
                  ),
                  input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }
                ),
                input.priority !== undefined && input.priority !== null && { priority: input.priority }
              ),
              input.state !== undefined && input.state !== null && { state: input.state }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restJson1CancelJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CancelJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CancelJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateComputeEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateComputeEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            computeEnvironmentArn: undefined,
            computeEnvironmentName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
            contents.computeEnvironmentArn = data.computeEnvironmentArn;
          }
          if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
            contents.computeEnvironmentName = data.computeEnvironmentName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateComputeEnvironmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateJobQueueCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateJobQueueCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobQueueArn: undefined,
            jobQueueName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
            contents.jobQueueArn = data.jobQueueArn;
          }
          if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
            contents.jobQueueName = data.jobQueueName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateJobQueueCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteComputeEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteComputeEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteComputeEnvironmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteJobQueueCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteJobQueueCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteJobQueueCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeregisterJobDefinitionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeregisterJobDefinitionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeregisterJobDefinitionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeComputeEnvironmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeComputeEnvironmentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            computeEnvironments: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.computeEnvironments !== undefined && data.computeEnvironments !== null) {
            contents.computeEnvironments = deserializeAws_restJson1ComputeEnvironmentDetailList(
              data.computeEnvironments,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeComputeEnvironmentsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeJobDefinitionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeJobDefinitionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobDefinitions: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobDefinitions !== undefined && data.jobDefinitions !== null) {
            contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(data.jobDefinitions, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeJobDefinitionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeJobQueuesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeJobQueuesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobQueues: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobQueues !== undefined && data.jobQueues !== null) {
            contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(data.jobQueues, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeJobQueuesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobs: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobs !== undefined && data.jobs !== null) {
            contents.jobs = deserializeAws_restJson1JobDetailList(data.jobs, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeJobsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobSummaryList: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
            contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(data.jobSummaryList, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListJobsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1TagrisTagsMap(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1RegisterJobDefinitionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RegisterJobDefinitionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobDefinitionArn: undefined,
            jobDefinitionName: undefined,
            revision: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobDefinitionArn !== undefined && data.jobDefinitionArn !== null) {
            contents.jobDefinitionArn = data.jobDefinitionArn;
          }
          if (data.jobDefinitionName !== undefined && data.jobDefinitionName !== null) {
            contents.jobDefinitionName = data.jobDefinitionName;
          }
          if (data.revision !== undefined && data.revision !== null) {
            contents.revision = data.revision;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1RegisterJobDefinitionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1SubmitJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1SubmitJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobArn: undefined,
            jobId: undefined,
            jobName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobArn !== undefined && data.jobArn !== null) {
            contents.jobArn = data.jobArn;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.jobId = data.jobId;
          }
          if (data.jobName !== undefined && data.jobName !== null) {
            contents.jobName = data.jobName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1SubmitJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1TerminateJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TerminateJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TerminateJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateComputeEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateComputeEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            computeEnvironmentArn: undefined,
            computeEnvironmentName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
            contents.computeEnvironmentArn = data.computeEnvironmentArn;
          }
          if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
            contents.computeEnvironmentName = data.computeEnvironmentName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateComputeEnvironmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateJobQueueCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateJobQueueCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobQueueArn: undefined,
            jobQueueName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
            contents.jobQueueArn = data.jobQueueArn;
          }
          if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
            contents.jobQueueName = data.jobQueueName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateJobQueueCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ClientException":
              return [3 /*break*/, 2];
            case "com.amazonaws.batch#ClientException":
              return [3 /*break*/, 2];
            case "ServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.batch#ServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1ClientExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ClientException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ServerExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1ArrayProperties = function (input, context) {
  return __assign({}, input.size !== undefined && input.size !== null && { size: input.size });
};
var serializeAws_restJson1ComputeEnvironmentOrder = function (input, context) {
  return __assign(
    __assign(
      {},
      input.computeEnvironment !== undefined &&
        input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }
    ),
    input.order !== undefined && input.order !== null && { order: input.order }
  );
};
var serializeAws_restJson1ComputeEnvironmentOrders = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};
var serializeAws_restJson1ComputeResource = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                __assign(
                                  __assign(
                                    {},
                                    input.allocationStrategy !== undefined &&
                                      input.allocationStrategy !== null && {
                                        allocationStrategy: input.allocationStrategy,
                                      }
                                  ),
                                  input.bidPercentage !== undefined &&
                                    input.bidPercentage !== null && { bidPercentage: input.bidPercentage }
                                ),
                                input.desiredvCpus !== undefined &&
                                  input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }
                              ),
                              input.ec2Configuration !== undefined &&
                                input.ec2Configuration !== null && {
                                  ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(
                                    input.ec2Configuration,
                                    context
                                  ),
                                }
                            ),
                            input.ec2KeyPair !== undefined &&
                              input.ec2KeyPair !== null && { ec2KeyPair: input.ec2KeyPair }
                          ),
                          input.imageId !== undefined && input.imageId !== null && { imageId: input.imageId }
                        ),
                        input.instanceRole !== undefined &&
                          input.instanceRole !== null && { instanceRole: input.instanceRole }
                      ),
                      input.instanceTypes !== undefined &&
                        input.instanceTypes !== null && {
                          instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
                        }
                    ),
                    input.launchTemplate !== undefined &&
                      input.launchTemplate !== null && {
                        launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(
                          input.launchTemplate,
                          context
                        ),
                      }
                  ),
                  input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }
                ),
                input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }
              ),
              input.placementGroup !== undefined &&
                input.placementGroup !== null && { placementGroup: input.placementGroup }
            ),
            input.securityGroupIds !== undefined &&
              input.securityGroupIds !== null && {
                securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
              }
          ),
          input.spotIamFleetRole !== undefined &&
            input.spotIamFleetRole !== null && { spotIamFleetRole: input.spotIamFleetRole }
        ),
        input.subnets !== undefined &&
          input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }
      ),
      input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }
    ),
    input.type !== undefined && input.type !== null && { type: input.type }
  );
};
var serializeAws_restJson1ComputeResourceUpdate = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.desiredvCpus !== undefined && input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }
          ),
          input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }
        ),
        input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }
      ),
      input.securityGroupIds !== undefined &&
        input.securityGroupIds !== null && {
          securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
        }
    ),
    input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }
  );
};
var serializeAws_restJson1ContainerOverrides = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.command !== undefined &&
                input.command !== null && { command: serializeAws_restJson1StringList(input.command, context) }
            ),
            input.environment !== undefined &&
              input.environment !== null && {
                environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
              }
          ),
          input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }
        ),
        input.memory !== undefined && input.memory !== null && { memory: input.memory }
      ),
      input.resourceRequirements !== undefined &&
        input.resourceRequirements !== null && {
          resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
        }
    ),
    input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }
  );
};
var serializeAws_restJson1ContainerProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign(
                                __assign(
                                  __assign(
                                    __assign(
                                      __assign(
                                        __assign(
                                          {},
                                          input.command !== undefined &&
                                            input.command !== null && {
                                              command: serializeAws_restJson1StringList(input.command, context),
                                            }
                                        ),
                                        input.environment !== undefined &&
                                          input.environment !== null && {
                                            environment: serializeAws_restJson1EnvironmentVariables(
                                              input.environment,
                                              context
                                            ),
                                          }
                                      ),
                                      input.executionRoleArn !== undefined &&
                                        input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }
                                    ),
                                    input.fargatePlatformConfiguration !== undefined &&
                                      input.fargatePlatformConfiguration !== null && {
                                        fargatePlatformConfiguration:
                                          serializeAws_restJson1FargatePlatformConfiguration(
                                            input.fargatePlatformConfiguration,
                                            context
                                          ),
                                      }
                                  ),
                                  input.image !== undefined && input.image !== null && { image: input.image }
                                ),
                                input.instanceType !== undefined &&
                                  input.instanceType !== null && { instanceType: input.instanceType }
                              ),
                              input.jobRoleArn !== undefined &&
                                input.jobRoleArn !== null && { jobRoleArn: input.jobRoleArn }
                            ),
                            input.linuxParameters !== undefined &&
                              input.linuxParameters !== null && {
                                linuxParameters: serializeAws_restJson1LinuxParameters(input.linuxParameters, context),
                              }
                          ),
                          input.logConfiguration !== undefined &&
                            input.logConfiguration !== null && {
                              logConfiguration: serializeAws_restJson1LogConfiguration(input.logConfiguration, context),
                            }
                        ),
                        input.memory !== undefined && input.memory !== null && { memory: input.memory }
                      ),
                      input.mountPoints !== undefined &&
                        input.mountPoints !== null && {
                          mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context),
                        }
                    ),
                    input.networkConfiguration !== undefined &&
                      input.networkConfiguration !== null && {
                        networkConfiguration: serializeAws_restJson1NetworkConfiguration(
                          input.networkConfiguration,
                          context
                        ),
                      }
                  ),
                  input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged }
                ),
                input.readonlyRootFilesystem !== undefined &&
                  input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem }
              ),
              input.resourceRequirements !== undefined &&
                input.resourceRequirements !== null && {
                  resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
                }
            ),
            input.secrets !== undefined &&
              input.secrets !== null && { secrets: serializeAws_restJson1SecretList(input.secrets, context) }
          ),
          input.ulimits !== undefined &&
            input.ulimits !== null && { ulimits: serializeAws_restJson1Ulimits(input.ulimits, context) }
        ),
        input.user !== undefined && input.user !== null && { user: input.user }
      ),
      input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }
    ),
    input.volumes !== undefined &&
      input.volumes !== null && { volumes: serializeAws_restJson1Volumes(input.volumes, context) }
  );
};
var serializeAws_restJson1Device = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }
      ),
      input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath }
    ),
    input.permissions !== undefined &&
      input.permissions !== null && {
        permissions: serializeAws_restJson1DeviceCgroupPermissions(input.permissions, context),
      }
  );
};
var serializeAws_restJson1DeviceCgroupPermissions = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_restJson1DevicesList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Device(entry, context);
    });
};
var serializeAws_restJson1Ec2Configuration = function (input, context) {
  return __assign(
    __assign(
      {},
      input.imageIdOverride !== undefined &&
        input.imageIdOverride !== null && { imageIdOverride: input.imageIdOverride }
    ),
    input.imageType !== undefined && input.imageType !== null && { imageType: input.imageType }
  );
};
var serializeAws_restJson1Ec2ConfigurationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Ec2Configuration(entry, context);
    });
};
var serializeAws_restJson1EFSAuthorizationConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId }
    ),
    input.iam !== undefined && input.iam !== null && { iam: input.iam }
  );
};
var serializeAws_restJson1EFSVolumeConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.authorizationConfig !== undefined &&
              input.authorizationConfig !== null && {
                authorizationConfig: serializeAws_restJson1EFSAuthorizationConfig(input.authorizationConfig, context),
              }
          ),
          input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }
        ),
        input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }
      ),
      input.transitEncryption !== undefined &&
        input.transitEncryption !== null && { transitEncryption: input.transitEncryption }
    ),
    input.transitEncryptionPort !== undefined &&
      input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }
  );
};
var serializeAws_restJson1EnvironmentVariables = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1KeyValuePair(entry, context);
    });
};
var serializeAws_restJson1EvaluateOnExit = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.action !== undefined && input.action !== null && { action: input.action }),
        input.onExitCode !== undefined && input.onExitCode !== null && { onExitCode: input.onExitCode }
      ),
      input.onReason !== undefined && input.onReason !== null && { onReason: input.onReason }
    ),
    input.onStatusReason !== undefined && input.onStatusReason !== null && { onStatusReason: input.onStatusReason }
  );
};
var serializeAws_restJson1EvaluateOnExitList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1EvaluateOnExit(entry, context);
    });
};
var serializeAws_restJson1FargatePlatformConfiguration = function (input, context) {
  return __assign(
    {},
    input.platformVersion !== undefined && input.platformVersion !== null && { platformVersion: input.platformVersion }
  );
};
var serializeAws_restJson1Host = function (input, context) {
  return __assign({}, input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath });
};
var serializeAws_restJson1JobDependency = function (input, context) {
  return __assign(
    __assign({}, input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    input.type !== undefined && input.type !== null && { type: input.type }
  );
};
var serializeAws_restJson1JobDependencyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1JobDependency(entry, context);
    });
};
var serializeAws_restJson1JobTimeout = function (input, context) {
  return __assign(
    {},
    input.attemptDurationSeconds !== undefined &&
      input.attemptDurationSeconds !== null && { attemptDurationSeconds: input.attemptDurationSeconds }
  );
};
var serializeAws_restJson1KeyValuePair = function (input, context) {
  return __assign(
    __assign({}, input.name !== undefined && input.name !== null && { name: input.name }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1LaunchTemplateSpecification = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.launchTemplateId !== undefined &&
          input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }
      ),
      input.launchTemplateName !== undefined &&
        input.launchTemplateName !== null && { launchTemplateName: input.launchTemplateName }
    ),
    input.version !== undefined && input.version !== null && { version: input.version }
  );
};
var serializeAws_restJson1LinuxParameters = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.devices !== undefined &&
                input.devices !== null && { devices: serializeAws_restJson1DevicesList(input.devices, context) }
            ),
            input.initProcessEnabled !== undefined &&
              input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled }
          ),
          input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap }
        ),
        input.sharedMemorySize !== undefined &&
          input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize }
      ),
      input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness }
    ),
    input.tmpfs !== undefined &&
      input.tmpfs !== null && { tmpfs: serializeAws_restJson1TmpfsList(input.tmpfs, context) }
  );
};
var serializeAws_restJson1LogConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver }),
      input.options !== undefined &&
        input.options !== null && { options: serializeAws_restJson1LogConfigurationOptionsMap(input.options, context) }
    ),
    input.secretOptions !== undefined &&
      input.secretOptions !== null && {
        secretOptions: serializeAws_restJson1SecretList(input.secretOptions, context),
      }
  );
};
var serializeAws_restJson1LogConfigurationOptionsMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_restJson1MountPoint = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }
      ),
      input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }
    ),
    input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }
  );
};
var serializeAws_restJson1MountPoints = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1MountPoint(entry, context);
    });
};
var serializeAws_restJson1NetworkConfiguration = function (input, context) {
  return __assign(
    {},
    input.assignPublicIp !== undefined && input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }
  );
};
var serializeAws_restJson1NodeOverrides = function (input, context) {
  return __assign(
    __assign(
      {},
      input.nodePropertyOverrides !== undefined &&
        input.nodePropertyOverrides !== null && {
          nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(input.nodePropertyOverrides, context),
        }
    ),
    input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }
  );
};
var serializeAws_restJson1NodeProperties = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.mainNode !== undefined && input.mainNode !== null && { mainNode: input.mainNode }),
      input.nodeRangeProperties !== undefined &&
        input.nodeRangeProperties !== null && {
          nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(input.nodeRangeProperties, context),
        }
    ),
    input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }
  );
};
var serializeAws_restJson1NodePropertyOverride = function (input, context) {
  return __assign(
    __assign(
      {},
      input.containerOverrides !== undefined &&
        input.containerOverrides !== null && {
          containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
        }
    ),
    input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }
  );
};
var serializeAws_restJson1NodePropertyOverrides = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1NodePropertyOverride(entry, context);
    });
};
var serializeAws_restJson1NodeRangeProperties = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1NodeRangeProperty(entry, context);
    });
};
var serializeAws_restJson1NodeRangeProperty = function (input, context) {
  return __assign(
    __assign(
      {},
      input.container !== undefined &&
        input.container !== null && { container: serializeAws_restJson1ContainerProperties(input.container, context) }
    ),
    input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }
  );
};
var serializeAws_restJson1ParametersMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_restJson1PlatformCapabilityList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_restJson1ResourceRequirement = function (input, context) {
  return __assign(
    __assign({}, input.type !== undefined && input.type !== null && { type: input.type }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1ResourceRequirements = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ResourceRequirement(entry, context);
    });
};
var serializeAws_restJson1RetryStrategy = function (input, context) {
  return __assign(
    __assign({}, input.attempts !== undefined && input.attempts !== null && { attempts: input.attempts }),
    input.evaluateOnExit !== undefined &&
      input.evaluateOnExit !== null && {
        evaluateOnExit: serializeAws_restJson1EvaluateOnExitList(input.evaluateOnExit, context),
      }
  );
};
var serializeAws_restJson1Secret = function (input, context) {
  return __assign(
    __assign({}, input.name !== undefined && input.name !== null && { name: input.name }),
    input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }
  );
};
var serializeAws_restJson1SecretList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Secret(entry, context);
    });
};
var serializeAws_restJson1StringList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_restJson1TagrisTagsMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_restJson1TagsMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_restJson1Tmpfs = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }
      ),
      input.mountOptions !== undefined &&
        input.mountOptions !== null && { mountOptions: serializeAws_restJson1StringList(input.mountOptions, context) }
    ),
    input.size !== undefined && input.size !== null && { size: input.size }
  );
};
var serializeAws_restJson1TmpfsList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Tmpfs(entry, context);
    });
};
var serializeAws_restJson1Ulimit = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit }),
      input.name !== undefined && input.name !== null && { name: input.name }
    ),
    input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }
  );
};
var serializeAws_restJson1Ulimits = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Ulimit(entry, context);
    });
};
var serializeAws_restJson1Volume = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.efsVolumeConfiguration !== undefined &&
          input.efsVolumeConfiguration !== null && {
            efsVolumeConfiguration: serializeAws_restJson1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
          }
      ),
      input.host !== undefined && input.host !== null && { host: serializeAws_restJson1Host(input.host, context) }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1Volumes = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Volume(entry, context);
    });
};
var deserializeAws_restJson1ArrayJobStatusSummary = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1ArrayPropertiesDetail = function (output, context) {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
    statusSummary:
      output.statusSummary !== undefined && output.statusSummary !== null
        ? deserializeAws_restJson1ArrayJobStatusSummary(output.statusSummary, context)
        : undefined,
  };
};
var deserializeAws_restJson1ArrayPropertiesSummary = function (output, context) {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  };
};
var deserializeAws_restJson1AttemptContainerDetail = function (output, context) {
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
var deserializeAws_restJson1AttemptDetail = function (output, context) {
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
var deserializeAws_restJson1AttemptDetails = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttemptDetail(entry, context);
    });
};
var deserializeAws_restJson1ComputeEnvironmentDetail = function (output, context) {
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
var deserializeAws_restJson1ComputeEnvironmentDetailList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ComputeEnvironmentDetail(entry, context);
    });
};
var deserializeAws_restJson1ComputeEnvironmentOrder = function (output, context) {
  return {
    computeEnvironment:
      output.computeEnvironment !== undefined && output.computeEnvironment !== null
        ? output.computeEnvironment
        : undefined,
    order: output.order !== undefined && output.order !== null ? output.order : undefined,
  };
};
var deserializeAws_restJson1ComputeEnvironmentOrders = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};
var deserializeAws_restJson1ComputeResource = function (output, context) {
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
var deserializeAws_restJson1ContainerDetail = function (output, context) {
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
var deserializeAws_restJson1ContainerProperties = function (output, context) {
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
var deserializeAws_restJson1ContainerSummary = function (output, context) {
  return {
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
  };
};
var deserializeAws_restJson1Device = function (output, context) {
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
var deserializeAws_restJson1DeviceCgroupPermissions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1DevicesList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
};
var deserializeAws_restJson1Ec2Configuration = function (output, context) {
  return {
    imageIdOverride:
      output.imageIdOverride !== undefined && output.imageIdOverride !== null ? output.imageIdOverride : undefined,
    imageType: output.imageType !== undefined && output.imageType !== null ? output.imageType : undefined,
  };
};
var deserializeAws_restJson1Ec2ConfigurationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Ec2Configuration(entry, context);
    });
};
var deserializeAws_restJson1EFSAuthorizationConfig = function (output, context) {
  return {
    accessPointId:
      output.accessPointId !== undefined && output.accessPointId !== null ? output.accessPointId : undefined,
    iam: output.iam !== undefined && output.iam !== null ? output.iam : undefined,
  };
};
var deserializeAws_restJson1EFSVolumeConfiguration = function (output, context) {
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
var deserializeAws_restJson1EnvironmentVariables = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
var deserializeAws_restJson1EvaluateOnExit = function (output, context) {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    onExitCode: output.onExitCode !== undefined && output.onExitCode !== null ? output.onExitCode : undefined,
    onReason: output.onReason !== undefined && output.onReason !== null ? output.onReason : undefined,
    onStatusReason:
      output.onStatusReason !== undefined && output.onStatusReason !== null ? output.onStatusReason : undefined,
  };
};
var deserializeAws_restJson1EvaluateOnExitList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1EvaluateOnExit(entry, context);
    });
};
var deserializeAws_restJson1FargatePlatformConfiguration = function (output, context) {
  return {
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
  };
};
var deserializeAws_restJson1Host = function (output, context) {
  return {
    sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
  };
};
var deserializeAws_restJson1JobDefinition = function (output, context) {
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
var deserializeAws_restJson1JobDefinitionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDefinition(entry, context);
    });
};
var deserializeAws_restJson1JobDependency = function (output, context) {
  return {
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1JobDependencyList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDependency(entry, context);
    });
};
var deserializeAws_restJson1JobDetail = function (output, context) {
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
var deserializeAws_restJson1JobDetailList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDetail(entry, context);
    });
};
var deserializeAws_restJson1JobQueueDetail = function (output, context) {
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
var deserializeAws_restJson1JobQueueDetailList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobQueueDetail(entry, context);
    });
};
var deserializeAws_restJson1JobSummary = function (output, context) {
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
var deserializeAws_restJson1JobSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
};
var deserializeAws_restJson1JobTimeout = function (output, context) {
  return {
    attemptDurationSeconds:
      output.attemptDurationSeconds !== undefined && output.attemptDurationSeconds !== null
        ? output.attemptDurationSeconds
        : undefined,
  };
};
var deserializeAws_restJson1KeyValuePair = function (output, context) {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1LaunchTemplateSpecification = function (output, context) {
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
var deserializeAws_restJson1LinuxParameters = function (output, context) {
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
var deserializeAws_restJson1LogConfiguration = function (output, context) {
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
var deserializeAws_restJson1LogConfigurationOptionsMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1MountPoint = function (output, context) {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
    sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
  };
};
var deserializeAws_restJson1MountPoints = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1MountPoint(entry, context);
    });
};
var deserializeAws_restJson1NetworkConfiguration = function (output, context) {
  return {
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
  };
};
var deserializeAws_restJson1NetworkInterface = function (output, context) {
  return {
    attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
    ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined,
  };
};
var deserializeAws_restJson1NetworkInterfaceList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
var deserializeAws_restJson1NodeDetails = function (output, context) {
  return {
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
  };
};
var deserializeAws_restJson1NodeProperties = function (output, context) {
  return {
    mainNode: output.mainNode !== undefined && output.mainNode !== null ? output.mainNode : undefined,
    nodeRangeProperties:
      output.nodeRangeProperties !== undefined && output.nodeRangeProperties !== null
        ? deserializeAws_restJson1NodeRangeProperties(output.nodeRangeProperties, context)
        : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
  };
};
var deserializeAws_restJson1NodePropertiesSummary = function (output, context) {
  return {
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
  };
};
var deserializeAws_restJson1NodeRangeProperties = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1NodeRangeProperty(entry, context);
    });
};
var deserializeAws_restJson1NodeRangeProperty = function (output, context) {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerProperties(output.container, context)
        : undefined,
    targetNodes: output.targetNodes !== undefined && output.targetNodes !== null ? output.targetNodes : undefined,
  };
};
var deserializeAws_restJson1ParametersMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1PlatformCapabilityList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1ResourceRequirement = function (output, context) {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1ResourceRequirements = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ResourceRequirement(entry, context);
    });
};
var deserializeAws_restJson1RetryStrategy = function (output, context) {
  return {
    attempts: output.attempts !== undefined && output.attempts !== null ? output.attempts : undefined,
    evaluateOnExit:
      output.evaluateOnExit !== undefined && output.evaluateOnExit !== null
        ? deserializeAws_restJson1EvaluateOnExitList(output.evaluateOnExit, context)
        : undefined,
  };
};
var deserializeAws_restJson1Secret = function (output, context) {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
  };
};
var deserializeAws_restJson1SecretList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Secret(entry, context);
    });
};
var deserializeAws_restJson1StringList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1TagrisTagsMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1TagsMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1Tmpfs = function (output, context) {
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
var deserializeAws_restJson1TmpfsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Tmpfs(entry, context);
    });
};
var deserializeAws_restJson1Ulimit = function (output, context) {
  return {
    hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
  };
};
var deserializeAws_restJson1Ulimits = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Ulimit(entry, context);
    });
};
var deserializeAws_restJson1Volume = function (output, context) {
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
var deserializeAws_restJson1Volumes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Volume(entry, context);
    });
};
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var isSerializableHeaderValue = function (value) {
  return (
    value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
  var findKey = function (object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function (rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
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
