import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateApiKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apikeys";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            {},
                            input.customerId !== undefined &&
                              input.customerId !== null && { customerId: input.customerId }
                          ),
                          input.description !== undefined &&
                            input.description !== null && { description: input.description }
                        ),
                        input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }
                      ),
                      input.generateDistinctId !== undefined &&
                        input.generateDistinctId !== null && { generateDistinctId: input.generateDistinctId }
                    ),
                    input.name !== undefined && input.name !== null && { name: input.name }
                  ),
                  input.stageKeys !== undefined &&
                    input.stageKeys !== null && {
                      stageKeys: serializeAws_restJson1ListOfStageKeys(input.stageKeys, context),
                    }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
              ),
              input.value !== undefined && input.value !== null && { value: input.value }
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
export var serializeAws_restJson1CreateAuthorizerCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/authorizers";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
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
                              {},
                              input.authType !== undefined && input.authType !== null && { authType: input.authType }
                            ),
                            input.authorizerCredentials !== undefined &&
                              input.authorizerCredentials !== null && {
                                authorizerCredentials: input.authorizerCredentials,
                              }
                          ),
                          input.authorizerResultTtlInSeconds !== undefined &&
                            input.authorizerResultTtlInSeconds !== null && {
                              authorizerResultTtlInSeconds: input.authorizerResultTtlInSeconds,
                            }
                        ),
                        input.authorizerUri !== undefined &&
                          input.authorizerUri !== null && { authorizerUri: input.authorizerUri }
                      ),
                      input.identitySource !== undefined &&
                        input.identitySource !== null && { identitySource: input.identitySource }
                    ),
                    input.identityValidationExpression !== undefined &&
                      input.identityValidationExpression !== null && {
                        identityValidationExpression: input.identityValidationExpression,
                      }
                  ),
                  input.name !== undefined && input.name !== null && { name: input.name }
                ),
                input.providerARNs !== undefined &&
                  input.providerARNs !== null && {
                    providerARNs: serializeAws_restJson1ListOfARNs(input.providerARNs, context),
                  }
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
export var serializeAws_restJson1CreateBasePathMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/domainnames/{domainName}/basepathmappings";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign({}, input.basePath !== undefined && input.basePath !== null && { basePath: input.basePath }),
                input.restApiId !== undefined && input.restApiId !== null && { restApiId: input.restApiId }
              ),
              input.stage !== undefined && input.stage !== null && { stage: input.stage }
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
export var serializeAws_restJson1CreateDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/deployments";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            {},
                            input.cacheClusterEnabled !== undefined &&
                              input.cacheClusterEnabled !== null && { cacheClusterEnabled: input.cacheClusterEnabled }
                          ),
                          input.cacheClusterSize !== undefined &&
                            input.cacheClusterSize !== null && { cacheClusterSize: input.cacheClusterSize }
                        ),
                        input.canarySettings !== undefined &&
                          input.canarySettings !== null && {
                            canarySettings: serializeAws_restJson1DeploymentCanarySettings(
                              input.canarySettings,
                              context
                            ),
                          }
                      ),
                      input.description !== undefined &&
                        input.description !== null && { description: input.description }
                    ),
                    input.stageDescription !== undefined &&
                      input.stageDescription !== null && { stageDescription: input.stageDescription }
                  ),
                  input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }
                ),
                input.tracingEnabled !== undefined &&
                  input.tracingEnabled !== null && { tracingEnabled: input.tracingEnabled }
              ),
              input.variables !== undefined &&
                input.variables !== null && {
                  variables: serializeAws_restJson1MapOfStringToString(input.variables, context),
                }
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
export var serializeAws_restJson1CreateDocumentationPartCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/documentation/parts";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.location !== undefined &&
                  input.location !== null && {
                    location: serializeAws_restJson1DocumentationPartLocation(input.location, context),
                  }
              ),
              input.properties !== undefined && input.properties !== null && { properties: input.properties }
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
export var serializeAws_restJson1CreateDocumentationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/documentation/versions";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.description !== undefined && input.description !== null && { description: input.description }
                ),
                input.documentationVersion !== undefined &&
                  input.documentationVersion !== null && { documentationVersion: input.documentationVersion }
              ),
              input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }
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
export var serializeAws_restJson1CreateDomainNameCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/domainnames";
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
                                    input.certificateArn !== undefined &&
                                      input.certificateArn !== null && { certificateArn: input.certificateArn }
                                  ),
                                  input.certificateBody !== undefined &&
                                    input.certificateBody !== null && { certificateBody: input.certificateBody }
                                ),
                                input.certificateChain !== undefined &&
                                  input.certificateChain !== null && { certificateChain: input.certificateChain }
                              ),
                              input.certificateName !== undefined &&
                                input.certificateName !== null && { certificateName: input.certificateName }
                            ),
                            input.certificatePrivateKey !== undefined &&
                              input.certificatePrivateKey !== null && {
                                certificatePrivateKey: input.certificatePrivateKey,
                              }
                          ),
                          input.domainName !== undefined &&
                            input.domainName !== null && { domainName: input.domainName }
                        ),
                        input.endpointConfiguration !== undefined &&
                          input.endpointConfiguration !== null && {
                            endpointConfiguration: serializeAws_restJson1EndpointConfiguration(
                              input.endpointConfiguration,
                              context
                            ),
                          }
                      ),
                      input.mutualTlsAuthentication !== undefined &&
                        input.mutualTlsAuthentication !== null && {
                          mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
                            input.mutualTlsAuthentication,
                            context
                          ),
                        }
                    ),
                    input.regionalCertificateArn !== undefined &&
                      input.regionalCertificateArn !== null && { regionalCertificateArn: input.regionalCertificateArn }
                  ),
                  input.regionalCertificateName !== undefined &&
                    input.regionalCertificateName !== null && { regionalCertificateName: input.regionalCertificateName }
                ),
                input.securityPolicy !== undefined &&
                  input.securityPolicy !== null && { securityPolicy: input.securityPolicy }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
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
export var serializeAws_restJson1CreateModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/models";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }
                  ),
                  input.description !== undefined && input.description !== null && { description: input.description }
                ),
                input.name !== undefined && input.name !== null && { name: input.name }
              ),
              input.schema !== undefined && input.schema !== null && { schema: input.schema }
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
export var serializeAws_restJson1CreateRequestValidatorCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/requestvalidators";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign({}, input.name !== undefined && input.name !== null && { name: input.name }),
                input.validateRequestBody !== undefined &&
                  input.validateRequestBody !== null && { validateRequestBody: input.validateRequestBody }
              ),
              input.validateRequestParameters !== undefined &&
                input.validateRequestParameters !== null && {
                  validateRequestParameters: input.validateRequestParameters,
                }
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
export var serializeAws_restJson1CreateResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{parentId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.parentId !== undefined) {
            labelValue = input.parentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: parentId.");
            }
            resolvedPath = resolvedPath.replace("{parentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: parentId.");
          }
          body = JSON.stringify(
            __assign({}, input.pathPart !== undefined && input.pathPart !== null && { pathPart: input.pathPart })
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
export var serializeAws_restJson1CreateRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis";
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
                                  {},
                                  input.apiKeySource !== undefined &&
                                    input.apiKeySource !== null && { apiKeySource: input.apiKeySource }
                                ),
                                input.binaryMediaTypes !== undefined &&
                                  input.binaryMediaTypes !== null && {
                                    binaryMediaTypes: serializeAws_restJson1ListOfString(
                                      input.binaryMediaTypes,
                                      context
                                    ),
                                  }
                              ),
                              input.cloneFrom !== undefined &&
                                input.cloneFrom !== null && { cloneFrom: input.cloneFrom }
                            ),
                            input.description !== undefined &&
                              input.description !== null && { description: input.description }
                          ),
                          input.disableExecuteApiEndpoint !== undefined &&
                            input.disableExecuteApiEndpoint !== null && {
                              disableExecuteApiEndpoint: input.disableExecuteApiEndpoint,
                            }
                        ),
                        input.endpointConfiguration !== undefined &&
                          input.endpointConfiguration !== null && {
                            endpointConfiguration: serializeAws_restJson1EndpointConfiguration(
                              input.endpointConfiguration,
                              context
                            ),
                          }
                      ),
                      input.minimumCompressionSize !== undefined &&
                        input.minimumCompressionSize !== null && {
                          minimumCompressionSize: input.minimumCompressionSize,
                        }
                    ),
                    input.name !== undefined && input.name !== null && { name: input.name }
                  ),
                  input.policy !== undefined && input.policy !== null && { policy: input.policy }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
              ),
              input.version !== undefined && input.version !== null && { version: input.version }
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
export var serializeAws_restJson1CreateStageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/stages";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
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
                                input.cacheClusterEnabled !== undefined &&
                                  input.cacheClusterEnabled !== null && {
                                    cacheClusterEnabled: input.cacheClusterEnabled,
                                  }
                              ),
                              input.cacheClusterSize !== undefined &&
                                input.cacheClusterSize !== null && { cacheClusterSize: input.cacheClusterSize }
                            ),
                            input.canarySettings !== undefined &&
                              input.canarySettings !== null && {
                                canarySettings: serializeAws_restJson1CanarySettings(input.canarySettings, context),
                              }
                          ),
                          input.deploymentId !== undefined &&
                            input.deploymentId !== null && { deploymentId: input.deploymentId }
                        ),
                        input.description !== undefined &&
                          input.description !== null && { description: input.description }
                      ),
                      input.documentationVersion !== undefined &&
                        input.documentationVersion !== null && { documentationVersion: input.documentationVersion }
                    ),
                    input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }
                  ),
                  input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
                ),
                input.tracingEnabled !== undefined &&
                  input.tracingEnabled !== null && { tracingEnabled: input.tracingEnabled }
              ),
              input.variables !== undefined &&
                input.variables !== null && {
                  variables: serializeAws_restJson1MapOfStringToString(input.variables, context),
                }
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
export var serializeAws_restJson1CreateUsagePlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/usageplans";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.apiStages !== undefined &&
                          input.apiStages !== null && {
                            apiStages: serializeAws_restJson1ListOfApiStage(input.apiStages, context),
                          }
                      ),
                      input.description !== undefined &&
                        input.description !== null && { description: input.description }
                    ),
                    input.name !== undefined && input.name !== null && { name: input.name }
                  ),
                  input.quota !== undefined &&
                    input.quota !== null && { quota: serializeAws_restJson1QuotaSettings(input.quota, context) }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
              ),
              input.throttle !== undefined &&
                input.throttle !== null && { throttle: serializeAws_restJson1ThrottleSettings(input.throttle, context) }
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
export var serializeAws_restJson1CreateUsagePlanKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/usageplans/{usagePlanId}/keys";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          body = JSON.stringify(
            __assign(
              __assign({}, input.keyId !== undefined && input.keyId !== null && { keyId: input.keyId }),
              input.keyType !== undefined && input.keyType !== null && { keyType: input.keyType }
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
export var serializeAws_restJson1CreateVpcLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/vpclinks";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.description !== undefined && input.description !== null && { description: input.description }
                  ),
                  input.name !== undefined && input.name !== null && { name: input.name }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
              ),
              input.targetArns !== undefined &&
                input.targetArns !== null && {
                  targetArns: serializeAws_restJson1ListOfString(input.targetArns, context),
                }
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
export var serializeAws_restJson1DeleteApiKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apikeys/{apiKey}";
          if (input.apiKey !== undefined) {
            labelValue = input.apiKey;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: apiKey.");
            }
            resolvedPath = resolvedPath.replace("{apiKey}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: apiKey.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteAuthorizerCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.authorizerId !== undefined) {
            labelValue = input.authorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: authorizerId.");
            }
            resolvedPath = resolvedPath.replace("{authorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: authorizerId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteBasePathMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          if (input.basePath !== undefined) {
            labelValue = input.basePath;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: basePath.");
            }
            resolvedPath = resolvedPath.replace("{basePath}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: basePath.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteClientCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/clientcertificates/{clientCertificateId}";
          if (input.clientCertificateId !== undefined) {
            labelValue = input.clientCertificateId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
            }
            resolvedPath = resolvedPath.replace("{clientCertificateId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: clientCertificateId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.deploymentId !== undefined) {
            labelValue = input.deploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: deploymentId.");
            }
            resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: deploymentId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteDocumentationPartCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationPartId !== undefined) {
            labelValue = input.documentationPartId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationPartId.");
            }
            resolvedPath = resolvedPath.replace("{documentationPartId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationPartId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteDocumentationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationVersion !== undefined) {
            labelValue = input.documentationVersion;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationVersion.");
            }
            resolvedPath = resolvedPath.replace("{documentationVersion}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationVersion.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteDomainNameCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames/{domainName}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteGatewayResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.responseType !== undefined) {
            labelValue = input.responseType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: responseType.");
            }
            resolvedPath = resolvedPath.replace("{responseType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: responseType.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteIntegrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteIntegrationResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteMethodCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteMethodResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/models/{modelName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.modelName !== undefined) {
            labelValue = input.modelName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: modelName.");
            }
            resolvedPath = resolvedPath.replace("{modelName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: modelName.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteRequestValidatorCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.requestValidatorId !== undefined) {
            labelValue = input.requestValidatorId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
            }
            resolvedPath = resolvedPath.replace("{requestValidatorId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: requestValidatorId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteStageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteUsagePlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteUsagePlanKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          if (input.keyId !== undefined) {
            labelValue = input.keyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: keyId.");
            }
            resolvedPath = resolvedPath.replace("{keyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: keyId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteVpcLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/vpclinks/{vpcLinkId}";
          if (input.vpcLinkId !== undefined) {
            labelValue = input.vpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{vpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: vpcLinkId.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1FlushStageAuthorizersCacheCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}/cache/authorizers";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1FlushStageCacheCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}/cache/data";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
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
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GenerateClientCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/clientcertificates";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.description !== undefined && input.description !== null && { description: input.description }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
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
export var serializeAws_restJson1GetAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account";
          body = "";
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
export var serializeAws_restJson1GetApiKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apikeys/{apiKey}";
          if (input.apiKey !== undefined) {
            labelValue = input.apiKey;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: apiKey.");
            }
            resolvedPath = resolvedPath.replace("{apiKey}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: apiKey.");
          }
          query = __assign({}, input.includeValue !== undefined && { includeValue: input.includeValue.toString() });
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetApiKeysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apikeys";
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.position !== undefined && { position: input.position }),
                  input.limit !== undefined && { limit: input.limit.toString() }
                ),
                input.nameQuery !== undefined && { name: input.nameQuery }
              ),
              input.customerId !== undefined && { customerId: input.customerId }
            ),
            input.includeValues !== undefined && { includeValues: input.includeValues.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetAuthorizerCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.authorizerId !== undefined) {
            labelValue = input.authorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: authorizerId.");
            }
            resolvedPath = resolvedPath.replace("{authorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: authorizerId.");
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
export var serializeAws_restJson1GetAuthorizersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/authorizers";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetBasePathMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          if (input.basePath !== undefined) {
            labelValue = input.basePath;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: basePath.");
            }
            resolvedPath = resolvedPath.replace("{basePath}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: basePath.");
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
export var serializeAws_restJson1GetBasePathMappingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames/{domainName}/basepathmappings";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetClientCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/clientcertificates/{clientCertificateId}";
          if (input.clientCertificateId !== undefined) {
            labelValue = input.clientCertificateId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
            }
            resolvedPath = resolvedPath.replace("{clientCertificateId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: clientCertificateId.");
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
export var serializeAws_restJson1GetClientCertificatesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/clientcertificates";
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.deploymentId !== undefined) {
            labelValue = input.deploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: deploymentId.");
            }
            resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: deploymentId.");
          }
          query = __assign(
            {},
            input.embed !== undefined && {
              embed: (input.embed || []).map(function (_entry) {
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
              method: "GET",
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
export var serializeAws_restJson1GetDeploymentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/deployments";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetDocumentationPartCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationPartId !== undefined) {
            labelValue = input.documentationPartId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationPartId.");
            }
            resolvedPath = resolvedPath.replace("{documentationPartId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationPartId.");
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
export var serializeAws_restJson1GetDocumentationPartsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/parts";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign({}, input.type !== undefined && { type: input.type }),
                    input.nameQuery !== undefined && { name: input.nameQuery }
                  ),
                  input.path !== undefined && { path: input.path }
                ),
                input.position !== undefined && { position: input.position }
              ),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.locationStatus !== undefined && { locationStatus: input.locationStatus }
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
              method: "GET",
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
export var serializeAws_restJson1GetDocumentationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationVersion !== undefined) {
            labelValue = input.documentationVersion;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationVersion.");
            }
            resolvedPath = resolvedPath.replace("{documentationVersion}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationVersion.");
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
export var serializeAws_restJson1GetDocumentationVersionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/documentation/versions";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetDomainNameCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames/{domainName}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
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
export var serializeAws_restJson1GetDomainNamesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/domainnames";
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetExportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.accepts) && { accept: input.accepts });
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}/exports/{exportType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
          }
          if (input.exportType !== undefined) {
            labelValue = input.exportType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: exportType.");
            }
            resolvedPath = resolvedPath.replace("{exportType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: exportType.");
          }
          query = __assign({}, input.parameters !== undefined && input.parameters);
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetGatewayResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.responseType !== undefined) {
            labelValue = input.responseType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: responseType.");
            }
            resolvedPath = resolvedPath.replace("{responseType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: responseType.");
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
export var serializeAws_restJson1GetGatewayResponsesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/gatewayresponses";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetIntegrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
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
export var serializeAws_restJson1GetIntegrationResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
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
export var serializeAws_restJson1GetMethodCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
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
export var serializeAws_restJson1GetMethodResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
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
export var serializeAws_restJson1GetModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/models/{modelName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.modelName !== undefined) {
            labelValue = input.modelName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: modelName.");
            }
            resolvedPath = resolvedPath.replace("{modelName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: modelName.");
          }
          query = __assign({}, input.flatten !== undefined && { flatten: input.flatten.toString() });
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetModelsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/models";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetModelTemplateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/models/{modelName}/default_template";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.modelName !== undefined) {
            labelValue = input.modelName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: modelName.");
            }
            resolvedPath = resolvedPath.replace("{modelName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: modelName.");
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
export var serializeAws_restJson1GetRequestValidatorCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.requestValidatorId !== undefined) {
            labelValue = input.requestValidatorId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
            }
            resolvedPath = resolvedPath.replace("{requestValidatorId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: requestValidatorId.");
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
export var serializeAws_restJson1GetRequestValidatorsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/requestvalidators";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          query = __assign(
            {},
            input.embed !== undefined && {
              embed: (input.embed || []).map(function (_entry) {
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
              method: "GET",
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
export var serializeAws_restJson1GetResourcesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/resources";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign(
              __assign({}, input.position !== undefined && { position: input.position }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.embed !== undefined && {
              embed: (input.embed || []).map(function (_entry) {
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
              method: "GET",
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
export var serializeAws_restJson1GetRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
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
export var serializeAws_restJson1GetRestApisCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis";
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetSdkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
          }
          if (input.sdkType !== undefined) {
            labelValue = input.sdkType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: sdkType.");
            }
            resolvedPath = resolvedPath.replace("{sdkType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: sdkType.");
          }
          query = __assign({}, input.parameters !== undefined && input.parameters);
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetSdkTypeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/sdktypes/{id}";
          if (input.id !== undefined) {
            labelValue = input.id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: id.");
            }
            resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: id.");
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
export var serializeAws_restJson1GetSdkTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/sdktypes";
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetStageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
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
export var serializeAws_restJson1GetStagesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restapis/{restApiId}/stages";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign({}, input.deploymentId !== undefined && { deploymentId: input.deploymentId });
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{resourceArn}";
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
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetUsageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}/usage";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.keyId !== undefined && { keyId: input.keyId }),
                  input.startDate !== undefined && { startDate: input.startDate }
                ),
                input.endDate !== undefined && { endDate: input.endDate }
              ),
              input.position !== undefined && { position: input.position }
            ),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetUsagePlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
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
export var serializeAws_restJson1GetUsagePlanKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          if (input.keyId !== undefined) {
            labelValue = input.keyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: keyId.");
            }
            resolvedPath = resolvedPath.replace("{keyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: keyId.");
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
export var serializeAws_restJson1GetUsagePlanKeysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans/{usagePlanId}/keys";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          query = __assign(
            __assign(
              __assign({}, input.position !== undefined && { position: input.position }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.nameQuery !== undefined && { name: input.nameQuery }
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
              method: "GET",
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
export var serializeAws_restJson1GetUsagePlansCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/usageplans";
          query = __assign(
            __assign(
              __assign({}, input.position !== undefined && { position: input.position }),
              input.keyId !== undefined && { keyId: input.keyId }
            ),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1GetVpcLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/vpclinks/{vpcLinkId}";
          if (input.vpcLinkId !== undefined) {
            labelValue = input.vpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{vpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: vpcLinkId.");
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
export var serializeAws_restJson1GetVpcLinksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/vpclinks";
          query = __assign(
            __assign({}, input.position !== undefined && { position: input.position }),
            input.limit !== undefined && { limit: input.limit.toString() }
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
              method: "GET",
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
export var serializeAws_restJson1ImportApiKeysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/octet-stream",
          };
          resolvedPath = "/apikeys";
          query = __assign(
            __assign({ mode: "import" }, input.format !== undefined && { format: input.format }),
            input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }
          );
          if (input.body !== undefined) {
            body = input.body;
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
              method: "POST",
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
export var serializeAws_restJson1ImportDocumentationPartsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/octet-stream",
          };
          resolvedPath = "/restapis/{restApiId}/documentation/parts";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign({}, input.mode !== undefined && { mode: input.mode }),
            input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }
          );
          if (input.body !== undefined) {
            body = input.body;
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
              method: "PUT",
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
export var serializeAws_restJson1ImportRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/octet-stream",
          };
          resolvedPath = "/restapis";
          query = __assign(
            __assign({ mode: "import" }, input.parameters !== undefined && input.parameters),
            input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }
          );
          if (input.body !== undefined) {
            body = input.body;
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
              method: "POST",
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
export var serializeAws_restJson1PutGatewayResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.responseType !== undefined) {
            labelValue = input.responseType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: responseType.");
            }
            resolvedPath = resolvedPath.replace("{responseType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: responseType.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.responseParameters !== undefined &&
                    input.responseParameters !== null && {
                      responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
                    }
                ),
                input.responseTemplates !== undefined &&
                  input.responseTemplates !== null && {
                    responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
                  }
              ),
              input.statusCode !== undefined && input.statusCode !== null && { statusCode: input.statusCode }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1PutIntegrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
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
                                    __assign(
                                      __assign(
                                        {},
                                        input.cacheKeyParameters !== undefined &&
                                          input.cacheKeyParameters !== null && {
                                            cacheKeyParameters: serializeAws_restJson1ListOfString(
                                              input.cacheKeyParameters,
                                              context
                                            ),
                                          }
                                      ),
                                      input.cacheNamespace !== undefined &&
                                        input.cacheNamespace !== null && { cacheNamespace: input.cacheNamespace }
                                    ),
                                    input.connectionId !== undefined &&
                                      input.connectionId !== null && { connectionId: input.connectionId }
                                  ),
                                  input.connectionType !== undefined &&
                                    input.connectionType !== null && { connectionType: input.connectionType }
                                ),
                                input.contentHandling !== undefined &&
                                  input.contentHandling !== null && { contentHandling: input.contentHandling }
                              ),
                              input.credentials !== undefined &&
                                input.credentials !== null && { credentials: input.credentials }
                            ),
                            input.integrationHttpMethod !== undefined &&
                              input.integrationHttpMethod !== null && { httpMethod: input.integrationHttpMethod }
                          ),
                          input.passthroughBehavior !== undefined &&
                            input.passthroughBehavior !== null && { passthroughBehavior: input.passthroughBehavior }
                        ),
                        input.requestParameters !== undefined &&
                          input.requestParameters !== null && {
                            requestParameters: serializeAws_restJson1MapOfStringToString(
                              input.requestParameters,
                              context
                            ),
                          }
                      ),
                      input.requestTemplates !== undefined &&
                        input.requestTemplates !== null && {
                          requestTemplates: serializeAws_restJson1MapOfStringToString(input.requestTemplates, context),
                        }
                    ),
                    input.timeoutInMillis !== undefined &&
                      input.timeoutInMillis !== null && { timeoutInMillis: input.timeoutInMillis }
                  ),
                  input.tlsConfig !== undefined &&
                    input.tlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfig(input.tlsConfig, context) }
                ),
                input.type !== undefined && input.type !== null && { type: input.type }
              ),
              input.uri !== undefined && input.uri !== null && { uri: input.uri }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1PutIntegrationResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath =
            "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.contentHandling !== undefined &&
                      input.contentHandling !== null && { contentHandling: input.contentHandling }
                  ),
                  input.responseParameters !== undefined &&
                    input.responseParameters !== null && {
                      responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
                    }
                ),
                input.responseTemplates !== undefined &&
                  input.responseTemplates !== null && {
                    responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
                  }
              ),
              input.selectionPattern !== undefined &&
                input.selectionPattern !== null && { selectionPattern: input.selectionPattern }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1PutMethodCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            {},
                            input.apiKeyRequired !== undefined &&
                              input.apiKeyRequired !== null && { apiKeyRequired: input.apiKeyRequired }
                          ),
                          input.authorizationScopes !== undefined &&
                            input.authorizationScopes !== null && {
                              authorizationScopes: serializeAws_restJson1ListOfString(
                                input.authorizationScopes,
                                context
                              ),
                            }
                        ),
                        input.authorizationType !== undefined &&
                          input.authorizationType !== null && { authorizationType: input.authorizationType }
                      ),
                      input.authorizerId !== undefined &&
                        input.authorizerId !== null && { authorizerId: input.authorizerId }
                    ),
                    input.operationName !== undefined &&
                      input.operationName !== null && { operationName: input.operationName }
                  ),
                  input.requestModels !== undefined &&
                    input.requestModels !== null && {
                      requestModels: serializeAws_restJson1MapOfStringToString(input.requestModels, context),
                    }
                ),
                input.requestParameters !== undefined &&
                  input.requestParameters !== null && {
                    requestParameters: serializeAws_restJson1MapOfStringToBoolean(input.requestParameters, context),
                  }
              ),
              input.requestValidatorId !== undefined &&
                input.requestValidatorId !== null && { requestValidatorId: input.requestValidatorId }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1PutMethodResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.responseModels !== undefined &&
                  input.responseModels !== null && {
                    responseModels: serializeAws_restJson1MapOfStringToString(input.responseModels, context),
                  }
              ),
              input.responseParameters !== undefined &&
                input.responseParameters !== null && {
                  responseParameters: serializeAws_restJson1MapOfStringToBoolean(input.responseParameters, context),
                }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1PutRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/octet-stream",
          };
          resolvedPath = "/restapis/{restApiId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          query = __assign(
            __assign(
              __assign({}, input.parameters !== undefined && input.parameters),
              input.mode !== undefined && { mode: input.mode }
            ),
            input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }
          );
          if (input.body !== undefined) {
            body = input.body;
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
              method: "PUT",
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/tags/{resourceArn}";
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
                input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }
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
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1TestInvokeAuthorizerCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.authorizerId !== undefined) {
            labelValue = input.authorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: authorizerId.");
            }
            resolvedPath = resolvedPath.replace("{authorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: authorizerId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.additionalContext !== undefined &&
                          input.additionalContext !== null && {
                            additionalContext: serializeAws_restJson1MapOfStringToString(
                              input.additionalContext,
                              context
                            ),
                          }
                      ),
                      input.body !== undefined && input.body !== null && { body: input.body }
                    ),
                    input.headers !== undefined &&
                      input.headers !== null && {
                        headers: serializeAws_restJson1MapOfStringToString(input.headers, context),
                      }
                  ),
                  input.multiValueHeaders !== undefined &&
                    input.multiValueHeaders !== null && {
                      multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
                    }
                ),
                input.pathWithQueryString !== undefined &&
                  input.pathWithQueryString !== null && { pathWithQueryString: input.pathWithQueryString }
              ),
              input.stageVariables !== undefined &&
                input.stageVariables !== null && {
                  stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
                }
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
export var serializeAws_restJson1TestInvokeMethodCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign({}, input.body !== undefined && input.body !== null && { body: input.body }),
                      input.clientCertificateId !== undefined &&
                        input.clientCertificateId !== null && { clientCertificateId: input.clientCertificateId }
                    ),
                    input.headers !== undefined &&
                      input.headers !== null && {
                        headers: serializeAws_restJson1MapOfStringToString(input.headers, context),
                      }
                  ),
                  input.multiValueHeaders !== undefined &&
                    input.multiValueHeaders !== null && {
                      multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
                    }
                ),
                input.pathWithQueryString !== undefined &&
                  input.pathWithQueryString !== null && { pathWithQueryString: input.pathWithQueryString }
              ),
              input.stageVariables !== undefined &&
                input.stageVariables !== null && {
                  stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
                }
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
          resolvedPath = "/tags/{resourceArn}";
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
export var serializeAws_restJson1UpdateAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account";
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateApiKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apikeys/{apiKey}";
          if (input.apiKey !== undefined) {
            labelValue = input.apiKey;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: apiKey.");
            }
            resolvedPath = resolvedPath.replace("{apiKey}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: apiKey.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAuthorizerCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.authorizerId !== undefined) {
            labelValue = input.authorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: authorizerId.");
            }
            resolvedPath = resolvedPath.replace("{authorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: authorizerId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateBasePathMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          if (input.basePath !== undefined) {
            labelValue = input.basePath;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: basePath.");
            }
            resolvedPath = resolvedPath.replace("{basePath}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: basePath.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateClientCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/clientcertificates/{clientCertificateId}";
          if (input.clientCertificateId !== undefined) {
            labelValue = input.clientCertificateId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
            }
            resolvedPath = resolvedPath.replace("{clientCertificateId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: clientCertificateId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.deploymentId !== undefined) {
            labelValue = input.deploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: deploymentId.");
            }
            resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: deploymentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateDocumentationPartCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationPartId !== undefined) {
            labelValue = input.documentationPartId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationPartId.");
            }
            resolvedPath = resolvedPath.replace("{documentationPartId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationPartId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateDocumentationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.documentationVersion !== undefined) {
            labelValue = input.documentationVersion;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: documentationVersion.");
            }
            resolvedPath = resolvedPath.replace("{documentationVersion}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: documentationVersion.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateDomainNameCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/domainnames/{domainName}";
          if (input.domainName !== undefined) {
            labelValue = input.domainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: domainName.");
            }
            resolvedPath = resolvedPath.replace("{domainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: domainName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateGatewayResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.responseType !== undefined) {
            labelValue = input.responseType;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: responseType.");
            }
            resolvedPath = resolvedPath.replace("{responseType}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: responseType.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateIntegrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateIntegrationResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath =
            "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateMethodCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateMethodResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          if (input.httpMethod !== undefined) {
            labelValue = input.httpMethod;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: httpMethod.");
            }
            resolvedPath = resolvedPath.replace("{httpMethod}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: httpMethod.");
          }
          if (input.statusCode !== undefined) {
            labelValue = input.statusCode;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: statusCode.");
            }
            resolvedPath = resolvedPath.replace("{statusCode}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: statusCode.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/models/{modelName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.modelName !== undefined) {
            labelValue = input.modelName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: modelName.");
            }
            resolvedPath = resolvedPath.replace("{modelName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: modelName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateRequestValidatorCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.requestValidatorId !== undefined) {
            labelValue = input.requestValidatorId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
            }
            resolvedPath = resolvedPath.replace("{requestValidatorId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: requestValidatorId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.resourceId !== undefined) {
            labelValue = input.resourceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceId.");
            }
            resolvedPath = resolvedPath.replace("{resourceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateRestApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateStageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
          if (input.restApiId !== undefined) {
            labelValue = input.restApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: restApiId.");
            }
            resolvedPath = resolvedPath.replace("{restApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: restApiId.");
          }
          if (input.stageName !== undefined) {
            labelValue = input.stageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: stageName.");
            }
            resolvedPath = resolvedPath.replace("{stageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: stageName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateUsageCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}/usage";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          if (input.keyId !== undefined) {
            labelValue = input.keyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: keyId.");
            }
            resolvedPath = resolvedPath.replace("{keyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: keyId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateUsagePlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/usageplans/{usagePlanId}";
          if (input.usagePlanId !== undefined) {
            labelValue = input.usagePlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: usagePlanId.");
            }
            resolvedPath = resolvedPath.replace("{usagePlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: usagePlanId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateVpcLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/vpclinks/{vpcLinkId}";
          if (input.vpcLinkId !== undefined) {
            labelValue = input.vpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{vpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: vpcLinkId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.patchOperations !== undefined &&
                input.patchOperations !== null && {
                  patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
                }
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
              method: "PATCH",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restJson1CreateApiKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateApiKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            customerId: undefined,
            description: undefined,
            enabled: undefined,
            id: undefined,
            lastUpdatedDate: undefined,
            name: undefined,
            stageKeys: undefined,
            tags: undefined,
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.customerId !== undefined && data.customerId !== null) {
            contents.customerId = data.customerId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.enabled !== undefined && data.enabled !== null) {
            contents.enabled = data.enabled;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.stageKeys !== undefined && data.stageKeys !== null) {
            contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateApiKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateAuthorizerCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateAuthorizerCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            authType: undefined,
            authorizerCredentials: undefined,
            authorizerResultTtlInSeconds: undefined,
            authorizerUri: undefined,
            id: undefined,
            identitySource: undefined,
            identityValidationExpression: undefined,
            name: undefined,
            providerARNs: undefined,
            type: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authType !== undefined && data.authType !== null) {
            contents.authType = data.authType;
          }
          if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
            contents.authorizerCredentials = data.authorizerCredentials;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.authorizerUri = data.authorizerUri;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.identitySource = data.identitySource;
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.identityValidationExpression = data.identityValidationExpression;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.providerARNs !== undefined && data.providerARNs !== null) {
            contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAuthorizerCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateBasePathMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBasePathMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            basePath: undefined,
            restApiId: undefined,
            stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.basePath !== undefined && data.basePath !== null) {
            contents.basePath = data.basePath;
          }
          if (data.restApiId !== undefined && data.restApiId !== null) {
            contents.restApiId = data.restApiId;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBasePathMappingCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiSummary: undefined,
            createdDate: undefined,
            description: undefined,
            id: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiSummary !== undefined && data.apiSummary !== null) {
            contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDeploymentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_k.body = _l.sent()), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 12];
            case "UnauthorizedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateDocumentationPartCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDocumentationPartCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            location: undefined,
            properties: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.location !== undefined && data.location !== null) {
            contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
          }
          if (data.properties !== undefined && data.properties !== null) {
            contents.properties = data.properties;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDocumentationPartCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateDocumentationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDocumentationVersionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            description: undefined,
            version: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDocumentationVersionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateDomainNameCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDomainNameCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            certificateArn: undefined,
            certificateName: undefined,
            certificateUploadDate: undefined,
            distributionDomainName: undefined,
            distributionHostedZoneId: undefined,
            domainName: undefined,
            domainNameStatus: undefined,
            domainNameStatusMessage: undefined,
            endpointConfiguration: undefined,
            mutualTlsAuthentication: undefined,
            regionalCertificateArn: undefined,
            regionalCertificateName: undefined,
            regionalDomainName: undefined,
            regionalHostedZoneId: undefined,
            securityPolicy: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.certificateArn !== undefined && data.certificateArn !== null) {
            contents.certificateArn = data.certificateArn;
          }
          if (data.certificateName !== undefined && data.certificateName !== null) {
            contents.certificateName = data.certificateName;
          }
          if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
            contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
          }
          if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
            contents.distributionDomainName = data.distributionDomainName;
          }
          if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
            contents.distributionHostedZoneId = data.distributionHostedZoneId;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.domainName = data.domainName;
          }
          if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
            contents.domainNameStatus = data.domainNameStatus;
          }
          if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
            contents.domainNameStatusMessage = data.domainNameStatusMessage;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
            contents.regionalCertificateArn = data.regionalCertificateArn;
          }
          if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
            contents.regionalCertificateName = data.regionalCertificateName;
          }
          if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
            contents.regionalDomainName = data.regionalDomainName;
          }
          if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
            contents.regionalHostedZoneId = data.regionalHostedZoneId;
          }
          if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
            contents.securityPolicy = data.securityPolicy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDomainNameCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateModelCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateModelCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentType: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.contentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateModelCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateRequestValidatorCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateRequestValidatorCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            name: undefined,
            validateRequestBody: undefined,
            validateRequestParameters: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
            contents.validateRequestBody = data.validateRequestBody;
          }
          if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
            contents.validateRequestParameters = data.validateRequestParameters;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateRequestValidatorCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            parentId: undefined,
            path: undefined,
            pathPart: undefined,
            resourceMethods: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.parentId !== undefined && data.parentId !== null) {
            contents.parentId = data.parentId;
          }
          if (data.path !== undefined && data.path !== null) {
            contents.path = data.path;
          }
          if (data.pathPart !== undefined && data.pathPart !== null) {
            contents.pathPart = data.pathPart;
          }
          if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
            contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateRestApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeySource: undefined,
            binaryMediaTypes: undefined,
            createdDate: undefined,
            description: undefined,
            disableExecuteApiEndpoint: undefined,
            endpointConfiguration: undefined,
            id: undefined,
            minimumCompressionSize: undefined,
            name: undefined,
            policy: undefined,
            tags: undefined,
            version: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
            contents.apiKeySource = data.apiKeySource;
          }
          if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
            contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
            contents.minimumCompressionSize = data.minimumCompressionSize;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateStageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateStageCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            accessLogSettings: undefined,
            cacheClusterEnabled: undefined,
            cacheClusterSize: undefined,
            cacheClusterStatus: undefined,
            canarySettings: undefined,
            clientCertificateId: undefined,
            createdDate: undefined,
            deploymentId: undefined,
            description: undefined,
            documentationVersion: undefined,
            lastUpdatedDate: undefined,
            methodSettings: undefined,
            stageName: undefined,
            tags: undefined,
            tracingEnabled: undefined,
            variables: undefined,
            webAclArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
            contents.cacheClusterEnabled = data.cacheClusterEnabled;
          }
          if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
            contents.cacheClusterSize = data.cacheClusterSize;
          }
          if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
            contents.cacheClusterStatus = data.cacheClusterStatus;
          }
          if (data.canarySettings !== undefined && data.canarySettings !== null) {
            contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.deploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
            contents.documentationVersion = data.documentationVersion;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.methodSettings !== undefined && data.methodSettings !== null) {
            contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.stageName = data.stageName;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
            contents.tracingEnabled = data.tracingEnabled;
          }
          if (data.variables !== undefined && data.variables !== null) {
            contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
          }
          if (data.webAclArn !== undefined && data.webAclArn !== null) {
            contents.webAclArn = data.webAclArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateStageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateUsagePlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateUsagePlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiStages: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            productCode: undefined,
            quota: undefined,
            tags: undefined,
            throttle: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiStages !== undefined && data.apiStages !== null) {
            contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.productCode !== undefined && data.productCode !== null) {
            contents.productCode = data.productCode;
          }
          if (data.quota !== undefined && data.quota !== null) {
            contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.throttle !== undefined && data.throttle !== null) {
            contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateUsagePlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateUsagePlanKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateUsagePlanKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            name: undefined,
            type: undefined,
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateUsagePlanKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateVpcLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVpcLinkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            description: undefined,
            id: undefined,
            name: undefined,
            status: undefined,
            statusMessage: undefined,
            tags: undefined,
            targetArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          if (data.statusMessage !== undefined && data.statusMessage !== null) {
            contents.statusMessage = data.statusMessage;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.targetArns !== undefined && data.targetArns !== null) {
            contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVpcLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteApiKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteApiKeyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteApiKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteAuthorizerCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAuthorizerCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAuthorizerCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteBasePathMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBasePathMappingCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBasePathMappingCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteClientCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteClientCertificateCommandError(output, context)];
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
var deserializeAws_restJson1DeleteClientCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDeploymentCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDeploymentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteDocumentationPartCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDocumentationPartCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDocumentationPartCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteDocumentationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDocumentationVersionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDocumentationVersionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteDomainNameCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDomainNameCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDomainNameCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteGatewayResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteGatewayResponseCommandError(output, context)];
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
var deserializeAws_restJson1DeleteGatewayResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteIntegrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteIntegrationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntegrationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteIntegrationResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteIntegrationResponseCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntegrationResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteMethodCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteMethodCommandError(output, context)];
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
var deserializeAws_restJson1DeleteMethodCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteMethodResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteMethodResponseCommandError(output, context)];
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
var deserializeAws_restJson1DeleteMethodResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteModelCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteModelCommandError(output, context)];
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
var deserializeAws_restJson1DeleteModelCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteRequestValidatorCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRequestValidatorCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRequestValidatorCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteResourceCommandError(output, context)];
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
var deserializeAws_restJson1DeleteResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRestApiCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteStageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteStageCommandError(output, context)];
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
var deserializeAws_restJson1DeleteStageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteUsagePlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteUsagePlanCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUsagePlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteUsagePlanKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteUsagePlanKeyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUsagePlanKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteVpcLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteVpcLinkCommandError(output, context)];
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
var deserializeAws_restJson1DeleteVpcLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1FlushStageAuthorizersCacheCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1FlushStageAuthorizersCacheCommandError(output, context)];
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
var deserializeAws_restJson1FlushStageAuthorizersCacheCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1FlushStageCacheCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1FlushStageCacheCommandError(output, context)];
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
var deserializeAws_restJson1FlushStageCacheCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GenerateClientCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GenerateClientCertificateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            clientCertificateId: undefined,
            createdDate: undefined,
            description: undefined,
            expirationDate: undefined,
            pemEncodedCertificate: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.expirationDate !== undefined && data.expirationDate !== null) {
            contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
          }
          if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
            contents.pemEncodedCertificate = data.pemEncodedCertificate;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GenerateClientCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "LimitExceededException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAccountCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeyVersion: undefined,
            cloudwatchRoleArn: undefined,
            features: undefined,
            throttleSettings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeyVersion !== undefined && data.apiKeyVersion !== null) {
            contents.apiKeyVersion = data.apiKeyVersion;
          }
          if (data.cloudwatchRoleArn !== undefined && data.cloudwatchRoleArn !== null) {
            contents.cloudwatchRoleArn = data.cloudwatchRoleArn;
          }
          if (data.features !== undefined && data.features !== null) {
            contents.features = deserializeAws_restJson1ListOfString(data.features, context);
          }
          if (data.throttleSettings !== undefined && data.throttleSettings !== null) {
            contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetApiKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApiKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            customerId: undefined,
            description: undefined,
            enabled: undefined,
            id: undefined,
            lastUpdatedDate: undefined,
            name: undefined,
            stageKeys: undefined,
            tags: undefined,
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.customerId !== undefined && data.customerId !== null) {
            contents.customerId = data.customerId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.enabled !== undefined && data.enabled !== null) {
            contents.enabled = data.enabled;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.stageKeys !== undefined && data.stageKeys !== null) {
            contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApiKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetApiKeysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApiKeysCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfApiKey(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApiKeysCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAuthorizerCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAuthorizerCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            authType: undefined,
            authorizerCredentials: undefined,
            authorizerResultTtlInSeconds: undefined,
            authorizerUri: undefined,
            id: undefined,
            identitySource: undefined,
            identityValidationExpression: undefined,
            name: undefined,
            providerARNs: undefined,
            type: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authType !== undefined && data.authType !== null) {
            contents.authType = data.authType;
          }
          if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
            contents.authorizerCredentials = data.authorizerCredentials;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.authorizerUri = data.authorizerUri;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.identitySource = data.identitySource;
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.identityValidationExpression = data.identityValidationExpression;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.providerARNs !== undefined && data.providerARNs !== null) {
            contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAuthorizerCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAuthorizersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAuthorizersCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfAuthorizer(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAuthorizersCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetBasePathMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBasePathMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            basePath: undefined,
            restApiId: undefined,
            stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.basePath !== undefined && data.basePath !== null) {
            contents.basePath = data.basePath;
          }
          if (data.restApiId !== undefined && data.restApiId !== null) {
            contents.restApiId = data.restApiId;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBasePathMappingCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetBasePathMappingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBasePathMappingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfBasePathMapping(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBasePathMappingsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetClientCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetClientCertificateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            clientCertificateId: undefined,
            createdDate: undefined,
            description: undefined,
            expirationDate: undefined,
            pemEncodedCertificate: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.expirationDate !== undefined && data.expirationDate !== null) {
            contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
          }
          if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
            contents.pemEncodedCertificate = data.pemEncodedCertificate;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetClientCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetClientCertificatesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetClientCertificatesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfClientCertificate(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetClientCertificatesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiSummary: undefined,
            createdDate: undefined,
            description: undefined,
            id: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiSummary !== undefined && data.apiSummary !== null) {
            contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDeploymentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDeploymentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfDeployment(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "ServiceUnavailableException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#ServiceUnavailableException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDocumentationPartCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDocumentationPartCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            location: undefined,
            properties: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.location !== undefined && data.location !== null) {
            contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
          }
          if (data.properties !== undefined && data.properties !== null) {
            contents.properties = data.properties;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDocumentationPartCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDocumentationPartsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDocumentationPartsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfDocumentationPart(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDocumentationPartsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDocumentationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDocumentationVersionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            description: undefined,
            version: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDocumentationVersionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDocumentationVersionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDocumentationVersionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfDocumentationVersion(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDocumentationVersionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDomainNameCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDomainNameCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            certificateArn: undefined,
            certificateName: undefined,
            certificateUploadDate: undefined,
            distributionDomainName: undefined,
            distributionHostedZoneId: undefined,
            domainName: undefined,
            domainNameStatus: undefined,
            domainNameStatusMessage: undefined,
            endpointConfiguration: undefined,
            mutualTlsAuthentication: undefined,
            regionalCertificateArn: undefined,
            regionalCertificateName: undefined,
            regionalDomainName: undefined,
            regionalHostedZoneId: undefined,
            securityPolicy: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.certificateArn !== undefined && data.certificateArn !== null) {
            contents.certificateArn = data.certificateArn;
          }
          if (data.certificateName !== undefined && data.certificateName !== null) {
            contents.certificateName = data.certificateName;
          }
          if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
            contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
          }
          if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
            contents.distributionDomainName = data.distributionDomainName;
          }
          if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
            contents.distributionHostedZoneId = data.distributionHostedZoneId;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.domainName = data.domainName;
          }
          if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
            contents.domainNameStatus = data.domainNameStatus;
          }
          if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
            contents.domainNameStatusMessage = data.domainNameStatusMessage;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
            contents.regionalCertificateArn = data.regionalCertificateArn;
          }
          if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
            contents.regionalCertificateName = data.regionalCertificateName;
          }
          if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
            contents.regionalDomainName = data.regionalDomainName;
          }
          if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
            contents.regionalHostedZoneId = data.regionalHostedZoneId;
          }
          if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
            contents.securityPolicy = data.securityPolicy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDomainNameCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDomainNamesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDomainNamesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfDomainName(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDomainNamesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetExportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetExportCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            body: undefined,
            contentDisposition: undefined,
            contentType: undefined,
          };
          if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
          }
          if (output.headers["content-disposition"] !== undefined) {
            contents.contentDisposition = output.headers["content-disposition"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.body = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetExportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetGatewayResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetGatewayResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            defaultResponse: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            responseType: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
            contents.defaultResponse = data.defaultResponse;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.responseType !== undefined && data.responseType !== null) {
            contents.responseType = data.responseType;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetGatewayResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetGatewayResponsesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetGatewayResponsesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfGatewayResponse(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetGatewayResponsesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetIntegrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetIntegrationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            cacheKeyParameters: undefined,
            cacheNamespace: undefined,
            connectionId: undefined,
            connectionType: undefined,
            contentHandling: undefined,
            credentials: undefined,
            httpMethod: undefined,
            integrationResponses: undefined,
            passthroughBehavior: undefined,
            requestParameters: undefined,
            requestTemplates: undefined,
            timeoutInMillis: undefined,
            tlsConfig: undefined,
            type: undefined,
            uri: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
            contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
          }
          if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
            contents.cacheNamespace = data.cacheNamespace;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.connectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.connectionType = data.connectionType;
          }
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.credentials !== undefined && data.credentials !== null) {
            contents.credentials = data.credentials;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
            contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
              data.integrationResponses,
              context
            );
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.passthroughBehavior = data.passthroughBehavior;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.timeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          if (data.uri !== undefined && data.uri !== null) {
            contents.uri = data.uri;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetIntegrationResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetIntegrationResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentHandling: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            selectionPattern: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
            contents.selectionPattern = data.selectionPattern;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetMethodCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetMethodCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeyRequired: undefined,
            authorizationScopes: undefined,
            authorizationType: undefined,
            authorizerId: undefined,
            httpMethod: undefined,
            methodIntegration: undefined,
            methodResponses: undefined,
            operationName: undefined,
            requestModels: undefined,
            requestParameters: undefined,
            requestValidatorId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.apiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.authorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.authorizerId = data.authorizerId;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
            contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
          }
          if (data.methodResponses !== undefined && data.methodResponses !== null) {
            contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.operationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
          }
          if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
            contents.requestValidatorId = data.requestValidatorId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetMethodCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetMethodResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetMethodResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            responseModels: undefined,
            responseParameters: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(
              data.responseParameters,
              context
            );
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetMethodResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetModelCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetModelCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentType: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.contentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetModelsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetModelsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfModel(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetModelTemplateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetModelTemplateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelTemplateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetRequestValidatorCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRequestValidatorCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            name: undefined,
            validateRequestBody: undefined,
            validateRequestParameters: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
            contents.validateRequestBody = data.validateRequestBody;
          }
          if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
            contents.validateRequestParameters = data.validateRequestParameters;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRequestValidatorCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetRequestValidatorsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRequestValidatorsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfRequestValidator(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRequestValidatorsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            parentId: undefined,
            path: undefined,
            pathPart: undefined,
            resourceMethods: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.parentId !== undefined && data.parentId !== null) {
            contents.parentId = data.parentId;
          }
          if (data.path !== undefined && data.path !== null) {
            contents.path = data.path;
          }
          if (data.pathPart !== undefined && data.pathPart !== null) {
            contents.pathPart = data.pathPart;
          }
          if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
            contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetResourcesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetResourcesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfResource(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetResourcesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRestApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeySource: undefined,
            binaryMediaTypes: undefined,
            createdDate: undefined,
            description: undefined,
            disableExecuteApiEndpoint: undefined,
            endpointConfiguration: undefined,
            id: undefined,
            minimumCompressionSize: undefined,
            name: undefined,
            policy: undefined,
            tags: undefined,
            version: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
            contents.apiKeySource = data.apiKeySource;
          }
          if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
            contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
            contents.minimumCompressionSize = data.minimumCompressionSize;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetRestApisCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRestApisCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfRestApi(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRestApisCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetSdkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSdkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            body: undefined,
            contentDisposition: undefined,
            contentType: undefined,
          };
          if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
          }
          if (output.headers["content-disposition"] !== undefined) {
            contents.contentDisposition = output.headers["content-disposition"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.body = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSdkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetSdkTypeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSdkTypeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            configurationProperties: undefined,
            description: undefined,
            friendlyName: undefined,
            id: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.configurationProperties !== undefined && data.configurationProperties !== null) {
            contents.configurationProperties = deserializeAws_restJson1ListOfSdkConfigurationProperty(
              data.configurationProperties,
              context
            );
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.friendlyName !== undefined && data.friendlyName !== null) {
            contents.friendlyName = data.friendlyName;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSdkTypeCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetSdkTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSdkTypesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfSdkType(data.item, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSdkTypesCommandError = function (output, context) {
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
            case "TooManyRequestsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 2];
            case "UnauthorizedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetStageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetStageCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            accessLogSettings: undefined,
            cacheClusterEnabled: undefined,
            cacheClusterSize: undefined,
            cacheClusterStatus: undefined,
            canarySettings: undefined,
            clientCertificateId: undefined,
            createdDate: undefined,
            deploymentId: undefined,
            description: undefined,
            documentationVersion: undefined,
            lastUpdatedDate: undefined,
            methodSettings: undefined,
            stageName: undefined,
            tags: undefined,
            tracingEnabled: undefined,
            variables: undefined,
            webAclArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
            contents.cacheClusterEnabled = data.cacheClusterEnabled;
          }
          if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
            contents.cacheClusterSize = data.cacheClusterSize;
          }
          if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
            contents.cacheClusterStatus = data.cacheClusterStatus;
          }
          if (data.canarySettings !== undefined && data.canarySettings !== null) {
            contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.deploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
            contents.documentationVersion = data.documentationVersion;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.methodSettings !== undefined && data.methodSettings !== null) {
            contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.stageName = data.stageName;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
            contents.tracingEnabled = data.tracingEnabled;
          }
          if (data.variables !== undefined && data.variables !== null) {
            contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
          }
          if (data.webAclArn !== undefined && data.webAclArn !== null) {
            contents.webAclArn = data.webAclArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetStageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetStagesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetStagesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            item: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.item = deserializeAws_restJson1ListOfStage(data.item, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetStagesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetTagsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetUsageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetUsageCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            endDate: undefined,
            items: undefined,
            position: undefined,
            startDate: undefined,
            usagePlanId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.endDate !== undefined && data.endDate !== null) {
            contents.endDate = data.endDate;
          }
          if (data.values !== undefined && data.values !== null) {
            contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          if (data.startDate !== undefined && data.startDate !== null) {
            contents.startDate = data.startDate;
          }
          if (data.usagePlanId !== undefined && data.usagePlanId !== null) {
            contents.usagePlanId = data.usagePlanId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetUsageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetUsagePlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetUsagePlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiStages: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            productCode: undefined,
            quota: undefined,
            tags: undefined,
            throttle: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiStages !== undefined && data.apiStages !== null) {
            contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.productCode !== undefined && data.productCode !== null) {
            contents.productCode = data.productCode;
          }
          if (data.quota !== undefined && data.quota !== null) {
            contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.throttle !== undefined && data.throttle !== null) {
            contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetUsagePlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetUsagePlanKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetUsagePlanKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            name: undefined,
            type: undefined,
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetUsagePlanKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetUsagePlanKeysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetUsagePlanKeysCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfUsagePlanKey(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetUsagePlanKeysCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetUsagePlansCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetUsagePlansCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfUsagePlan(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetUsagePlansCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetVpcLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetVpcLinkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            description: undefined,
            id: undefined,
            name: undefined,
            status: undefined,
            statusMessage: undefined,
            tags: undefined,
            targetArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          if (data.statusMessage !== undefined && data.statusMessage !== null) {
            contents.statusMessage = data.statusMessage;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.targetArns !== undefined && data.targetArns !== null) {
            contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetVpcLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetVpcLinksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetVpcLinksCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            items: undefined,
            position: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.item !== undefined && data.item !== null) {
            contents.items = deserializeAws_restJson1ListOfVpcLink(data.item, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetVpcLinksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ImportApiKeysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ImportApiKeysCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ids: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ids !== undefined && data.ids !== null) {
            contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ImportApiKeysCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ImportDocumentationPartsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ImportDocumentationPartsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ids: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ids !== undefined && data.ids !== null) {
            contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ImportDocumentationPartsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ImportRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ImportRestApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeySource: undefined,
            binaryMediaTypes: undefined,
            createdDate: undefined,
            description: undefined,
            disableExecuteApiEndpoint: undefined,
            endpointConfiguration: undefined,
            id: undefined,
            minimumCompressionSize: undefined,
            name: undefined,
            policy: undefined,
            tags: undefined,
            version: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
            contents.apiKeySource = data.apiKeySource;
          }
          if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
            contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
            contents.minimumCompressionSize = data.minimumCompressionSize;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ImportRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutGatewayResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutGatewayResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            defaultResponse: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            responseType: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
            contents.defaultResponse = data.defaultResponse;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.responseType !== undefined && data.responseType !== null) {
            contents.responseType = data.responseType;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutGatewayResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutIntegrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutIntegrationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            cacheKeyParameters: undefined,
            cacheNamespace: undefined,
            connectionId: undefined,
            connectionType: undefined,
            contentHandling: undefined,
            credentials: undefined,
            httpMethod: undefined,
            integrationResponses: undefined,
            passthroughBehavior: undefined,
            requestParameters: undefined,
            requestTemplates: undefined,
            timeoutInMillis: undefined,
            tlsConfig: undefined,
            type: undefined,
            uri: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
            contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
          }
          if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
            contents.cacheNamespace = data.cacheNamespace;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.connectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.connectionType = data.connectionType;
          }
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.credentials !== undefined && data.credentials !== null) {
            contents.credentials = data.credentials;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
            contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
              data.integrationResponses,
              context
            );
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.passthroughBehavior = data.passthroughBehavior;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.timeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          if (data.uri !== undefined && data.uri !== null) {
            contents.uri = data.uri;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutIntegrationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutIntegrationResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutIntegrationResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentHandling: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            selectionPattern: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
            contents.selectionPattern = data.selectionPattern;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutIntegrationResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutMethodCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutMethodCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeyRequired: undefined,
            authorizationScopes: undefined,
            authorizationType: undefined,
            authorizerId: undefined,
            httpMethod: undefined,
            methodIntegration: undefined,
            methodResponses: undefined,
            operationName: undefined,
            requestModels: undefined,
            requestParameters: undefined,
            requestValidatorId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.apiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.authorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.authorizerId = data.authorizerId;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
            contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
          }
          if (data.methodResponses !== undefined && data.methodResponses !== null) {
            contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.operationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
          }
          if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
            contents.requestValidatorId = data.requestValidatorId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutMethodCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutMethodResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutMethodResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            responseModels: undefined,
            responseParameters: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(
              data.responseParameters,
              context
            );
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutMethodResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PutRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutRestApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeySource: undefined,
            binaryMediaTypes: undefined,
            createdDate: undefined,
            description: undefined,
            disableExecuteApiEndpoint: undefined,
            endpointConfiguration: undefined,
            id: undefined,
            minimumCompressionSize: undefined,
            name: undefined,
            policy: undefined,
            tags: undefined,
            version: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
            contents.apiKeySource = data.apiKeySource;
          }
          if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
            contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
            contents.minimumCompressionSize = data.minimumCompressionSize;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
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
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1TestInvokeAuthorizerCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TestInvokeAuthorizerCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            authorization: undefined,
            claims: undefined,
            clientStatus: undefined,
            latency: undefined,
            log: undefined,
            policy: undefined,
            principalId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authorization !== undefined && data.authorization !== null) {
            contents.authorization = deserializeAws_restJson1MapOfStringToList(data.authorization, context);
          }
          if (data.claims !== undefined && data.claims !== null) {
            contents.claims = deserializeAws_restJson1MapOfStringToString(data.claims, context);
          }
          if (data.clientStatus !== undefined && data.clientStatus !== null) {
            contents.clientStatus = data.clientStatus;
          }
          if (data.latency !== undefined && data.latency !== null) {
            contents.latency = data.latency;
          }
          if (data.log !== undefined && data.log !== null) {
            contents.log = data.log;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.principalId !== undefined && data.principalId !== null) {
            contents.principalId = data.principalId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TestInvokeAuthorizerCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1TestInvokeMethodCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TestInvokeMethodCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            body: undefined,
            headers: undefined,
            latency: undefined,
            log: undefined,
            multiValueHeaders: undefined,
            status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.body !== undefined && data.body !== null) {
            contents.body = data.body;
          }
          if (data.headers !== undefined && data.headers !== null) {
            contents.headers = deserializeAws_restJson1MapOfStringToString(data.headers, context);
          }
          if (data.latency !== undefined && data.latency !== null) {
            contents.latency = data.latency;
          }
          if (data.log !== undefined && data.log !== null) {
            contents.log = data.log;
          }
          if (data.multiValueHeaders !== undefined && data.multiValueHeaders !== null) {
            contents.multiValueHeaders = deserializeAws_restJson1MapOfStringToList(data.multiValueHeaders, context);
          }
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TestInvokeMethodCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
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
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAccountCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeyVersion: undefined,
            cloudwatchRoleArn: undefined,
            features: undefined,
            throttleSettings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeyVersion !== undefined && data.apiKeyVersion !== null) {
            contents.apiKeyVersion = data.apiKeyVersion;
          }
          if (data.cloudwatchRoleArn !== undefined && data.cloudwatchRoleArn !== null) {
            contents.cloudwatchRoleArn = data.cloudwatchRoleArn;
          }
          if (data.features !== undefined && data.features !== null) {
            contents.features = deserializeAws_restJson1ListOfString(data.features, context);
          }
          if (data.throttleSettings !== undefined && data.throttleSettings !== null) {
            contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateApiKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateApiKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            customerId: undefined,
            description: undefined,
            enabled: undefined,
            id: undefined,
            lastUpdatedDate: undefined,
            name: undefined,
            stageKeys: undefined,
            tags: undefined,
            value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.customerId !== undefined && data.customerId !== null) {
            contents.customerId = data.customerId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.enabled !== undefined && data.enabled !== null) {
            contents.enabled = data.enabled;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.stageKeys !== undefined && data.stageKeys !== null) {
            contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.value !== undefined && data.value !== null) {
            contents.value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateApiKeyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAuthorizerCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAuthorizerCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            authType: undefined,
            authorizerCredentials: undefined,
            authorizerResultTtlInSeconds: undefined,
            authorizerUri: undefined,
            id: undefined,
            identitySource: undefined,
            identityValidationExpression: undefined,
            name: undefined,
            providerARNs: undefined,
            type: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authType !== undefined && data.authType !== null) {
            contents.authType = data.authType;
          }
          if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
            contents.authorizerCredentials = data.authorizerCredentials;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.authorizerUri = data.authorizerUri;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.identitySource = data.identitySource;
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.identityValidationExpression = data.identityValidationExpression;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.providerARNs !== undefined && data.providerARNs !== null) {
            contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAuthorizerCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateBasePathMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBasePathMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            basePath: undefined,
            restApiId: undefined,
            stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.basePath !== undefined && data.basePath !== null) {
            contents.basePath = data.basePath;
          }
          if (data.restApiId !== undefined && data.restApiId !== null) {
            contents.restApiId = data.restApiId;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBasePathMappingCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateClientCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateClientCertificateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            clientCertificateId: undefined,
            createdDate: undefined,
            description: undefined,
            expirationDate: undefined,
            pemEncodedCertificate: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.expirationDate !== undefined && data.expirationDate !== null) {
            contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
          }
          if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
            contents.pemEncodedCertificate = data.pemEncodedCertificate;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateClientCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiSummary: undefined,
            createdDate: undefined,
            description: undefined,
            id: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiSummary !== undefined && data.apiSummary !== null) {
            contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDeploymentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "ServiceUnavailableException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#ServiceUnavailableException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateDocumentationPartCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDocumentationPartCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            location: undefined,
            properties: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.location !== undefined && data.location !== null) {
            contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
          }
          if (data.properties !== undefined && data.properties !== null) {
            contents.properties = data.properties;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDocumentationPartCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateDocumentationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDocumentationVersionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdDate: undefined,
            description: undefined,
            version: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDocumentationVersionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateDomainNameCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDomainNameCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            certificateArn: undefined,
            certificateName: undefined,
            certificateUploadDate: undefined,
            distributionDomainName: undefined,
            distributionHostedZoneId: undefined,
            domainName: undefined,
            domainNameStatus: undefined,
            domainNameStatusMessage: undefined,
            endpointConfiguration: undefined,
            mutualTlsAuthentication: undefined,
            regionalCertificateArn: undefined,
            regionalCertificateName: undefined,
            regionalDomainName: undefined,
            regionalHostedZoneId: undefined,
            securityPolicy: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.certificateArn !== undefined && data.certificateArn !== null) {
            contents.certificateArn = data.certificateArn;
          }
          if (data.certificateName !== undefined && data.certificateName !== null) {
            contents.certificateName = data.certificateName;
          }
          if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
            contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
          }
          if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
            contents.distributionDomainName = data.distributionDomainName;
          }
          if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
            contents.distributionHostedZoneId = data.distributionHostedZoneId;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.domainName = data.domainName;
          }
          if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
            contents.domainNameStatus = data.domainNameStatus;
          }
          if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
            contents.domainNameStatusMessage = data.domainNameStatusMessage;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
            contents.regionalCertificateArn = data.regionalCertificateArn;
          }
          if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
            contents.regionalCertificateName = data.regionalCertificateName;
          }
          if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
            contents.regionalDomainName = data.regionalDomainName;
          }
          if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
            contents.regionalHostedZoneId = data.regionalHostedZoneId;
          }
          if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
            contents.securityPolicy = data.securityPolicy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDomainNameCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateGatewayResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateGatewayResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            defaultResponse: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            responseType: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
            contents.defaultResponse = data.defaultResponse;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.responseType !== undefined && data.responseType !== null) {
            contents.responseType = data.responseType;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateGatewayResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateIntegrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateIntegrationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            cacheKeyParameters: undefined,
            cacheNamespace: undefined,
            connectionId: undefined,
            connectionType: undefined,
            contentHandling: undefined,
            credentials: undefined,
            httpMethod: undefined,
            integrationResponses: undefined,
            passthroughBehavior: undefined,
            requestParameters: undefined,
            requestTemplates: undefined,
            timeoutInMillis: undefined,
            tlsConfig: undefined,
            type: undefined,
            uri: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
            contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
          }
          if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
            contents.cacheNamespace = data.cacheNamespace;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.connectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.connectionType = data.connectionType;
          }
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.credentials !== undefined && data.credentials !== null) {
            contents.credentials = data.credentials;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
            contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
              data.integrationResponses,
              context
            );
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.passthroughBehavior = data.passthroughBehavior;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.timeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
          }
          if (data.uri !== undefined && data.uri !== null) {
            contents.uri = data.uri;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateIntegrationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateIntegrationResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateIntegrationResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentHandling: undefined,
            responseParameters: undefined,
            responseTemplates: undefined,
            selectionPattern: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandling !== undefined && data.contentHandling !== null) {
            contents.contentHandling = data.contentHandling;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
          }
          if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
            contents.selectionPattern = data.selectionPattern;
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateIntegrationResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateMethodCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateMethodCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeyRequired: undefined,
            authorizationScopes: undefined,
            authorizationType: undefined,
            authorizerId: undefined,
            httpMethod: undefined,
            methodIntegration: undefined,
            methodResponses: undefined,
            operationName: undefined,
            requestModels: undefined,
            requestParameters: undefined,
            requestValidatorId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.apiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.authorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.authorizerId = data.authorizerId;
          }
          if (data.httpMethod !== undefined && data.httpMethod !== null) {
            contents.httpMethod = data.httpMethod;
          }
          if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
            contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
          }
          if (data.methodResponses !== undefined && data.methodResponses !== null) {
            contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.operationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
          }
          if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
            contents.requestValidatorId = data.requestValidatorId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateMethodCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateMethodResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateMethodResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            responseModels: undefined,
            responseParameters: undefined,
            statusCode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(
              data.responseParameters,
              context
            );
          }
          if (data.statusCode !== undefined && data.statusCode !== null) {
            contents.statusCode = data.statusCode;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateMethodResponseCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateModelCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateModelCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            contentType: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.contentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateModelCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateRequestValidatorCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRequestValidatorCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            name: undefined,
            validateRequestBody: undefined,
            validateRequestParameters: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
            contents.validateRequestBody = data.validateRequestBody;
          }
          if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
            contents.validateRequestParameters = data.validateRequestParameters;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRequestValidatorCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            id: undefined,
            parentId: undefined,
            path: undefined,
            pathPart: undefined,
            resourceMethods: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.parentId !== undefined && data.parentId !== null) {
            contents.parentId = data.parentId;
          }
          if (data.path !== undefined && data.path !== null) {
            contents.path = data.path;
          }
          if (data.pathPart !== undefined && data.pathPart !== null) {
            contents.pathPart = data.pathPart;
          }
          if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
            contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateRestApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRestApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiKeySource: undefined,
            binaryMediaTypes: undefined,
            createdDate: undefined,
            description: undefined,
            disableExecuteApiEndpoint: undefined,
            endpointConfiguration: undefined,
            id: undefined,
            minimumCompressionSize: undefined,
            name: undefined,
            policy: undefined,
            tags: undefined,
            version: undefined,
            warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
            contents.apiKeySource = data.apiKeySource;
          }
          if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
            contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
            contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(
              data.endpointConfiguration,
              context
            );
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
            contents.minimumCompressionSize = data.minimumCompressionSize;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.policy !== undefined && data.policy !== null) {
            contents.policy = data.policy;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRestApiCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateStageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateStageCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            accessLogSettings: undefined,
            cacheClusterEnabled: undefined,
            cacheClusterSize: undefined,
            cacheClusterStatus: undefined,
            canarySettings: undefined,
            clientCertificateId: undefined,
            createdDate: undefined,
            deploymentId: undefined,
            description: undefined,
            documentationVersion: undefined,
            lastUpdatedDate: undefined,
            methodSettings: undefined,
            stageName: undefined,
            tags: undefined,
            tracingEnabled: undefined,
            variables: undefined,
            webAclArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
            contents.cacheClusterEnabled = data.cacheClusterEnabled;
          }
          if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
            contents.cacheClusterSize = data.cacheClusterSize;
          }
          if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
            contents.cacheClusterStatus = data.cacheClusterStatus;
          }
          if (data.canarySettings !== undefined && data.canarySettings !== null) {
            contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.clientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.createdDate = new Date(Math.round(data.createdDate * 1000));
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.deploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
            contents.documentationVersion = data.documentationVersion;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
          }
          if (data.methodSettings !== undefined && data.methodSettings !== null) {
            contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.stageName = data.stageName;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
            contents.tracingEnabled = data.tracingEnabled;
          }
          if (data.variables !== undefined && data.variables !== null) {
            contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
          }
          if (data.webAclArn !== undefined && data.webAclArn !== null) {
            contents.webAclArn = data.webAclArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateStageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateUsageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateUsageCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            endDate: undefined,
            items: undefined,
            position: undefined,
            startDate: undefined,
            usagePlanId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.endDate !== undefined && data.endDate !== null) {
            contents.endDate = data.endDate;
          }
          if (data.values !== undefined && data.values !== null) {
            contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
          }
          if (data.position !== undefined && data.position !== null) {
            contents.position = data.position;
          }
          if (data.startDate !== undefined && data.startDate !== null) {
            contents.startDate = data.startDate;
          }
          if (data.usagePlanId !== undefined && data.usagePlanId !== null) {
            contents.usagePlanId = data.usagePlanId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateUsageCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateUsagePlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateUsagePlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apiStages: undefined,
            description: undefined,
            id: undefined,
            name: undefined,
            productCode: undefined,
            quota: undefined,
            tags: undefined,
            throttle: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiStages !== undefined && data.apiStages !== null) {
            contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.productCode !== undefined && data.productCode !== null) {
            contents.productCode = data.productCode;
          }
          if (data.quota !== undefined && data.quota !== null) {
            contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.throttle !== undefined && data.throttle !== null) {
            contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateUsagePlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateVpcLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateVpcLinkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            description: undefined,
            id: undefined,
            name: undefined,
            status: undefined,
            statusMessage: undefined,
            tags: undefined,
            targetArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.id !== undefined && data.id !== null) {
            contents.id = data.id;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.name = data.name;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          if (data.statusMessage !== undefined && data.statusMessage !== null) {
            contents.statusMessage = data.statusMessage;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
          }
          if (data.targetArns !== undefined && data.targetArns !== null) {
            contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVpcLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigateway#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigateway#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigateway#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigateway#TooManyRequestsException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigateway#UnauthorizedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "BadRequestException",
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
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ConflictException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
      };
      if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
      }
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NotFoundException",
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
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
      };
      if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
      }
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
      };
      if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
      }
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1UnauthorizedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "UnauthorizedException",
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
var serializeAws_restJson1ApiStage = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.apiId !== undefined && input.apiId !== null && { apiId: input.apiId }),
      input.stage !== undefined && input.stage !== null && { stage: input.stage }
    ),
    input.throttle !== undefined &&
      input.throttle !== null && {
        throttle: serializeAws_restJson1MapOfApiStageThrottleSettings(input.throttle, context),
      }
  );
};
var serializeAws_restJson1CanarySettings = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }
        ),
        input.percentTraffic !== undefined && input.percentTraffic !== null && { percentTraffic: input.percentTraffic }
      ),
      input.stageVariableOverrides !== undefined &&
        input.stageVariableOverrides !== null && {
          stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
        }
    ),
    input.useStageCache !== undefined && input.useStageCache !== null && { useStageCache: input.useStageCache }
  );
};
var serializeAws_restJson1DeploymentCanarySettings = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.percentTraffic !== undefined && input.percentTraffic !== null && { percentTraffic: input.percentTraffic }
      ),
      input.stageVariableOverrides !== undefined &&
        input.stageVariableOverrides !== null && {
          stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
        }
    ),
    input.useStageCache !== undefined && input.useStageCache !== null && { useStageCache: input.useStageCache }
  );
};
var serializeAws_restJson1DocumentationPartLocation = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.method !== undefined && input.method !== null && { method: input.method }),
          input.name !== undefined && input.name !== null && { name: input.name }
        ),
        input.path !== undefined && input.path !== null && { path: input.path }
      ),
      input.statusCode !== undefined && input.statusCode !== null && { statusCode: input.statusCode }
    ),
    input.type !== undefined && input.type !== null && { type: input.type }
  );
};
var serializeAws_restJson1EndpointConfiguration = function (input, context) {
  return __assign(
    __assign(
      {},
      input.types !== undefined &&
        input.types !== null && { types: serializeAws_restJson1ListOfEndpointType(input.types, context) }
    ),
    input.vpcEndpointIds !== undefined &&
      input.vpcEndpointIds !== null && {
        vpcEndpointIds: serializeAws_restJson1ListOfString(input.vpcEndpointIds, context),
      }
  );
};
var serializeAws_restJson1ListOfApiStage = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ApiStage(entry, context);
    });
};
var serializeAws_restJson1ListOfARNs = function (input, context) {
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
var serializeAws_restJson1ListOfEndpointType = function (input, context) {
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
var serializeAws_restJson1ListOfPatchOperation = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1PatchOperation(entry, context);
    });
};
var serializeAws_restJson1ListOfStageKeys = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1StageKey(entry, context);
    });
};
var serializeAws_restJson1ListOfString = function (input, context) {
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
var serializeAws_restJson1MapOfApiStageThrottleSettings = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = serializeAws_restJson1ThrottleSettings(value, context)), _b)
    );
  }, {});
};
var serializeAws_restJson1MapOfStringToBoolean = function (input, context) {
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
var serializeAws_restJson1MapOfStringToList = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = serializeAws_restJson1ListOfString(value, context)), _b));
  }, {});
};
var serializeAws_restJson1MapOfStringToString = function (input, context) {
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
var serializeAws_restJson1MutualTlsAuthenticationInput = function (input, context) {
  return __assign(
    __assign(
      {},
      input.truststoreUri !== undefined && input.truststoreUri !== null && { truststoreUri: input.truststoreUri }
    ),
    input.truststoreVersion !== undefined &&
      input.truststoreVersion !== null && { truststoreVersion: input.truststoreVersion }
  );
};
var serializeAws_restJson1PatchOperation = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.from !== undefined && input.from !== null && { from: input.from }),
        input.op !== undefined && input.op !== null && { op: input.op }
      ),
      input.path !== undefined && input.path !== null && { path: input.path }
    ),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1QuotaSettings = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.limit !== undefined && input.limit !== null && { limit: input.limit }),
      input.offset !== undefined && input.offset !== null && { offset: input.offset }
    ),
    input.period !== undefined && input.period !== null && { period: input.period }
  );
};
var serializeAws_restJson1StageKey = function (input, context) {
  return __assign(
    __assign({}, input.restApiId !== undefined && input.restApiId !== null && { restApiId: input.restApiId }),
    input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }
  );
};
var serializeAws_restJson1ThrottleSettings = function (input, context) {
  return __assign(
    __assign({}, input.burstLimit !== undefined && input.burstLimit !== null && { burstLimit: input.burstLimit }),
    input.rateLimit !== undefined && input.rateLimit !== null && { rateLimit: input.rateLimit }
  );
};
var serializeAws_restJson1TlsConfig = function (input, context) {
  return __assign(
    {},
    input.insecureSkipVerification !== undefined &&
      input.insecureSkipVerification !== null && { insecureSkipVerification: input.insecureSkipVerification }
  );
};
var deserializeAws_restJson1AccessLogSettings = function (output, context) {
  return {
    destinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
  };
};
var deserializeAws_restJson1ApiKey = function (output, context) {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    customerId: output.customerId !== undefined && output.customerId !== null ? output.customerId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    stageKeys:
      output.stageKeys !== undefined && output.stageKeys !== null
        ? deserializeAws_restJson1ListOfString(output.stageKeys, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1ApiStage = function (output, context) {
  return {
    apiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    throttle:
      output.throttle !== undefined && output.throttle !== null
        ? deserializeAws_restJson1MapOfApiStageThrottleSettings(output.throttle, context)
        : undefined,
  };
};
var deserializeAws_restJson1Authorizer = function (output, context) {
  return {
    authType: output.authType !== undefined && output.authType !== null ? output.authType : undefined,
    authorizerCredentials:
      output.authorizerCredentials !== undefined && output.authorizerCredentials !== null
        ? output.authorizerCredentials
        : undefined,
    authorizerResultTtlInSeconds:
      output.authorizerResultTtlInSeconds !== undefined && output.authorizerResultTtlInSeconds !== null
        ? output.authorizerResultTtlInSeconds
        : undefined,
    authorizerUri:
      output.authorizerUri !== undefined && output.authorizerUri !== null ? output.authorizerUri : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    identitySource:
      output.identitySource !== undefined && output.identitySource !== null ? output.identitySource : undefined,
    identityValidationExpression:
      output.identityValidationExpression !== undefined && output.identityValidationExpression !== null
        ? output.identityValidationExpression
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    providerARNs:
      output.providerARNs !== undefined && output.providerARNs !== null
        ? deserializeAws_restJson1ListOfARNs(output.providerARNs, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1BasePathMapping = function (output, context) {
  return {
    basePath: output.basePath !== undefined && output.basePath !== null ? output.basePath : undefined,
    restApiId: output.restApiId !== undefined && output.restApiId !== null ? output.restApiId : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
var deserializeAws_restJson1CanarySettings = function (output, context) {
  return {
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    percentTraffic:
      output.percentTraffic !== undefined && output.percentTraffic !== null ? output.percentTraffic : undefined,
    stageVariableOverrides:
      output.stageVariableOverrides !== undefined && output.stageVariableOverrides !== null
        ? deserializeAws_restJson1MapOfStringToString(output.stageVariableOverrides, context)
        : undefined,
    useStageCache:
      output.useStageCache !== undefined && output.useStageCache !== null ? output.useStageCache : undefined,
  };
};
var deserializeAws_restJson1ClientCertificate = function (output, context) {
  return {
    clientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    expirationDate:
      output.expirationDate !== undefined && output.expirationDate !== null
        ? new Date(Math.round(output.expirationDate * 1000))
        : undefined,
    pemEncodedCertificate:
      output.pemEncodedCertificate !== undefined && output.pemEncodedCertificate !== null
        ? output.pemEncodedCertificate
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
  };
};
var deserializeAws_restJson1Deployment = function (output, context) {
  return {
    apiSummary:
      output.apiSummary !== undefined && output.apiSummary !== null
        ? deserializeAws_restJson1PathToMapOfMethodSnapshot(output.apiSummary, context)
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  };
};
var deserializeAws_restJson1DocumentationPart = function (output, context) {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_restJson1DocumentationPartLocation(output.location, context)
        : undefined,
    properties: output.properties !== undefined && output.properties !== null ? output.properties : undefined,
  };
};
var deserializeAws_restJson1DocumentationPartLocation = function (output, context) {
  return {
    method: output.method !== undefined && output.method !== null ? output.method : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1DocumentationVersion = function (output, context) {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
var deserializeAws_restJson1DomainName = function (output, context) {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    certificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    certificateUploadDate:
      output.certificateUploadDate !== undefined && output.certificateUploadDate !== null
        ? new Date(Math.round(output.certificateUploadDate * 1000))
        : undefined,
    distributionDomainName:
      output.distributionDomainName !== undefined && output.distributionDomainName !== null
        ? output.distributionDomainName
        : undefined,
    distributionHostedZoneId:
      output.distributionHostedZoneId !== undefined && output.distributionHostedZoneId !== null
        ? output.distributionHostedZoneId
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainNameStatus:
      output.domainNameStatus !== undefined && output.domainNameStatus !== null ? output.domainNameStatus : undefined,
    domainNameStatusMessage:
      output.domainNameStatusMessage !== undefined && output.domainNameStatusMessage !== null
        ? output.domainNameStatusMessage
        : undefined,
    endpointConfiguration:
      output.endpointConfiguration !== undefined && output.endpointConfiguration !== null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    mutualTlsAuthentication:
      output.mutualTlsAuthentication !== undefined && output.mutualTlsAuthentication !== null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    regionalCertificateArn:
      output.regionalCertificateArn !== undefined && output.regionalCertificateArn !== null
        ? output.regionalCertificateArn
        : undefined,
    regionalCertificateName:
      output.regionalCertificateName !== undefined && output.regionalCertificateName !== null
        ? output.regionalCertificateName
        : undefined,
    regionalDomainName:
      output.regionalDomainName !== undefined && output.regionalDomainName !== null
        ? output.regionalDomainName
        : undefined,
    regionalHostedZoneId:
      output.regionalHostedZoneId !== undefined && output.regionalHostedZoneId !== null
        ? output.regionalHostedZoneId
        : undefined,
    securityPolicy:
      output.securityPolicy !== undefined && output.securityPolicy !== null ? output.securityPolicy : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
  };
};
var deserializeAws_restJson1EndpointConfiguration = function (output, context) {
  return {
    types:
      output.types !== undefined && output.types !== null
        ? deserializeAws_restJson1ListOfEndpointType(output.types, context)
        : undefined,
    vpcEndpointIds:
      output.vpcEndpointIds !== undefined && output.vpcEndpointIds !== null
        ? deserializeAws_restJson1ListOfString(output.vpcEndpointIds, context)
        : undefined,
  };
};
var deserializeAws_restJson1GatewayResponse = function (output, context) {
  return {
    defaultResponse:
      output.defaultResponse !== undefined && output.defaultResponse !== null ? output.defaultResponse : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    responseType: output.responseType !== undefined && output.responseType !== null ? output.responseType : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
var deserializeAws_restJson1Integration = function (output, context) {
  return {
    cacheKeyParameters:
      output.cacheKeyParameters !== undefined && output.cacheKeyParameters !== null
        ? deserializeAws_restJson1ListOfString(output.cacheKeyParameters, context)
        : undefined,
    cacheNamespace:
      output.cacheNamespace !== undefined && output.cacheNamespace !== null ? output.cacheNamespace : undefined,
    connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    connectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    contentHandling:
      output.contentHandling !== undefined && output.contentHandling !== null ? output.contentHandling : undefined,
    credentials: output.credentials !== undefined && output.credentials !== null ? output.credentials : undefined,
    httpMethod: output.httpMethod !== undefined && output.httpMethod !== null ? output.httpMethod : undefined,
    integrationResponses:
      output.integrationResponses !== undefined && output.integrationResponses !== null
        ? deserializeAws_restJson1MapOfIntegrationResponse(output.integrationResponses, context)
        : undefined,
    passthroughBehavior:
      output.passthroughBehavior !== undefined && output.passthroughBehavior !== null
        ? output.passthroughBehavior
        : undefined,
    requestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestParameters, context)
        : undefined,
    requestTemplates:
      output.requestTemplates !== undefined && output.requestTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestTemplates, context)
        : undefined,
    timeoutInMillis:
      output.timeoutInMillis !== undefined && output.timeoutInMillis !== null ? output.timeoutInMillis : undefined,
    tlsConfig:
      output.tlsConfig !== undefined && output.tlsConfig !== null
        ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
  };
};
var deserializeAws_restJson1IntegrationResponse = function (output, context) {
  return {
    contentHandling:
      output.contentHandling !== undefined && output.contentHandling !== null ? output.contentHandling : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    selectionPattern:
      output.selectionPattern !== undefined && output.selectionPattern !== null ? output.selectionPattern : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
var deserializeAws_restJson1ListOfApiKey = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
};
var deserializeAws_restJson1ListOfApiStage = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiStage(entry, context);
    });
};
var deserializeAws_restJson1ListOfARNs = function (output, context) {
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
var deserializeAws_restJson1ListOfAuthorizer = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Authorizer(entry, context);
    });
};
var deserializeAws_restJson1ListOfBasePathMapping = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BasePathMapping(entry, context);
    });
};
var deserializeAws_restJson1ListOfClientCertificate = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ClientCertificate(entry, context);
    });
};
var deserializeAws_restJson1ListOfDeployment = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
};
var deserializeAws_restJson1ListOfDocumentationPart = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DocumentationPart(entry, context);
    });
};
var deserializeAws_restJson1ListOfDocumentationVersion = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DocumentationVersion(entry, context);
    });
};
var deserializeAws_restJson1ListOfDomainName = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainName(entry, context);
    });
};
var deserializeAws_restJson1ListOfEndpointType = function (output, context) {
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
var deserializeAws_restJson1ListOfGatewayResponse = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GatewayResponse(entry, context);
    });
};
var deserializeAws_restJson1ListOfLong = function (output, context) {
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
var deserializeAws_restJson1ListOfModel = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Model(entry, context);
    });
};
var deserializeAws_restJson1ListOfRequestValidator = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RequestValidator(entry, context);
    });
};
var deserializeAws_restJson1ListOfResource = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};
var deserializeAws_restJson1ListOfRestApi = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RestApi(entry, context);
    });
};
var deserializeAws_restJson1ListOfSdkConfigurationProperty = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SdkConfigurationProperty(entry, context);
    });
};
var deserializeAws_restJson1ListOfSdkType = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SdkType(entry, context);
    });
};
var deserializeAws_restJson1ListOfStage = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Stage(entry, context);
    });
};
var deserializeAws_restJson1ListOfString = function (output, context) {
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
var deserializeAws_restJson1ListOfUsage = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ListOfLong(entry, context);
    });
};
var deserializeAws_restJson1ListOfUsagePlan = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1UsagePlan(entry, context);
    });
};
var deserializeAws_restJson1ListOfUsagePlanKey = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1UsagePlanKey(entry, context);
    });
};
var deserializeAws_restJson1ListOfVpcLink = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VpcLink(entry, context);
    });
};
var deserializeAws_restJson1MapOfApiStageThrottleSettings = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1ThrottleSettings(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfIntegrationResponse = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1IntegrationResponse(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfKeyUsages = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1ListOfUsage(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfMethod = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = deserializeAws_restJson1Method(value, context)), _b));
  }, {});
};
var deserializeAws_restJson1MapOfMethodResponse = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1MethodResponse(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfMethodSettings = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1MethodSetting(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfMethodSnapshot = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1MethodSnapshot(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfStringToBoolean = function (output, context) {
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
var deserializeAws_restJson1MapOfStringToList = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1ListOfString(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1MapOfStringToString = function (output, context) {
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
var deserializeAws_restJson1Method = function (output, context) {
  return {
    apiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    authorizationScopes:
      output.authorizationScopes !== undefined && output.authorizationScopes !== null
        ? deserializeAws_restJson1ListOfString(output.authorizationScopes, context)
        : undefined,
    authorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    authorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    httpMethod: output.httpMethod !== undefined && output.httpMethod !== null ? output.httpMethod : undefined,
    methodIntegration:
      output.methodIntegration !== undefined && output.methodIntegration !== null
        ? deserializeAws_restJson1Integration(output.methodIntegration, context)
        : undefined,
    methodResponses:
      output.methodResponses !== undefined && output.methodResponses !== null
        ? deserializeAws_restJson1MapOfMethodResponse(output.methodResponses, context)
        : undefined,
    operationName:
      output.operationName !== undefined && output.operationName !== null ? output.operationName : undefined,
    requestModels:
      output.requestModels !== undefined && output.requestModels !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestModels, context)
        : undefined,
    requestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.requestParameters, context)
        : undefined,
    requestValidatorId:
      output.requestValidatorId !== undefined && output.requestValidatorId !== null
        ? output.requestValidatorId
        : undefined,
  };
};
var deserializeAws_restJson1MethodResponse = function (output, context) {
  return {
    responseModels:
      output.responseModels !== undefined && output.responseModels !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseModels, context)
        : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.responseParameters, context)
        : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
var deserializeAws_restJson1MethodSetting = function (output, context) {
  return {
    cacheDataEncrypted:
      output.cacheDataEncrypted !== undefined && output.cacheDataEncrypted !== null
        ? output.cacheDataEncrypted
        : undefined,
    cacheTtlInSeconds:
      output.cacheTtlInSeconds !== undefined && output.cacheTtlInSeconds !== null
        ? output.cacheTtlInSeconds
        : undefined,
    cachingEnabled:
      output.cachingEnabled !== undefined && output.cachingEnabled !== null ? output.cachingEnabled : undefined,
    dataTraceEnabled:
      output.dataTraceEnabled !== undefined && output.dataTraceEnabled !== null ? output.dataTraceEnabled : undefined,
    loggingLevel: output.loggingLevel !== undefined && output.loggingLevel !== null ? output.loggingLevel : undefined,
    metricsEnabled:
      output.metricsEnabled !== undefined && output.metricsEnabled !== null ? output.metricsEnabled : undefined,
    requireAuthorizationForCacheControl:
      output.requireAuthorizationForCacheControl !== undefined && output.requireAuthorizationForCacheControl !== null
        ? output.requireAuthorizationForCacheControl
        : undefined,
    throttlingBurstLimit:
      output.throttlingBurstLimit !== undefined && output.throttlingBurstLimit !== null
        ? output.throttlingBurstLimit
        : undefined,
    throttlingRateLimit:
      output.throttlingRateLimit !== undefined && output.throttlingRateLimit !== null
        ? output.throttlingRateLimit
        : undefined,
    unauthorizedCacheControlHeaderStrategy:
      output.unauthorizedCacheControlHeaderStrategy !== undefined &&
      output.unauthorizedCacheControlHeaderStrategy !== null
        ? output.unauthorizedCacheControlHeaderStrategy
        : undefined,
  };
};
var deserializeAws_restJson1MethodSnapshot = function (output, context) {
  return {
    apiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    authorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
  };
};
var deserializeAws_restJson1Model = function (output, context) {
  return {
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  };
};
var deserializeAws_restJson1MutualTlsAuthentication = function (output, context) {
  return {
    truststoreUri:
      output.truststoreUri !== undefined && output.truststoreUri !== null ? output.truststoreUri : undefined,
    truststoreVersion:
      output.truststoreVersion !== undefined && output.truststoreVersion !== null
        ? output.truststoreVersion
        : undefined,
    truststoreWarnings:
      output.truststoreWarnings !== undefined && output.truststoreWarnings !== null
        ? deserializeAws_restJson1ListOfString(output.truststoreWarnings, context)
        : undefined,
  };
};
var deserializeAws_restJson1PathToMapOfMethodSnapshot = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_restJson1MapOfMethodSnapshot(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1QuotaSettings = function (output, context) {
  return {
    limit: output.limit !== undefined && output.limit !== null ? output.limit : undefined,
    offset: output.offset !== undefined && output.offset !== null ? output.offset : undefined,
    period: output.period !== undefined && output.period !== null ? output.period : undefined,
  };
};
var deserializeAws_restJson1RequestValidator = function (output, context) {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    validateRequestBody:
      output.validateRequestBody !== undefined && output.validateRequestBody !== null
        ? output.validateRequestBody
        : undefined,
    validateRequestParameters:
      output.validateRequestParameters !== undefined && output.validateRequestParameters !== null
        ? output.validateRequestParameters
        : undefined,
  };
};
var deserializeAws_restJson1Resource = function (output, context) {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    parentId: output.parentId !== undefined && output.parentId !== null ? output.parentId : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    pathPart: output.pathPart !== undefined && output.pathPart !== null ? output.pathPart : undefined,
    resourceMethods:
      output.resourceMethods !== undefined && output.resourceMethods !== null
        ? deserializeAws_restJson1MapOfMethod(output.resourceMethods, context)
        : undefined,
  };
};
var deserializeAws_restJson1RestApi = function (output, context) {
  return {
    apiKeySource: output.apiKeySource !== undefined && output.apiKeySource !== null ? output.apiKeySource : undefined,
    binaryMediaTypes:
      output.binaryMediaTypes !== undefined && output.binaryMediaTypes !== null
        ? deserializeAws_restJson1ListOfString(output.binaryMediaTypes, context)
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    disableExecuteApiEndpoint:
      output.disableExecuteApiEndpoint !== undefined && output.disableExecuteApiEndpoint !== null
        ? output.disableExecuteApiEndpoint
        : undefined,
    endpointConfiguration:
      output.endpointConfiguration !== undefined && output.endpointConfiguration !== null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    minimumCompressionSize:
      output.minimumCompressionSize !== undefined && output.minimumCompressionSize !== null
        ? output.minimumCompressionSize
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    policy: output.policy !== undefined && output.policy !== null ? output.policy : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_restJson1ListOfString(output.warnings, context)
        : undefined,
  };
};
var deserializeAws_restJson1SdkConfigurationProperty = function (output, context) {
  return {
    defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    friendlyName: output.friendlyName !== undefined && output.friendlyName !== null ? output.friendlyName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    required: output.required !== undefined && output.required !== null ? output.required : undefined,
  };
};
var deserializeAws_restJson1SdkType = function (output, context) {
  return {
    configurationProperties:
      output.configurationProperties !== undefined && output.configurationProperties !== null
        ? deserializeAws_restJson1ListOfSdkConfigurationProperty(output.configurationProperties, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    friendlyName: output.friendlyName !== undefined && output.friendlyName !== null ? output.friendlyName : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  };
};
var deserializeAws_restJson1Stage = function (output, context) {
  return {
    accessLogSettings:
      output.accessLogSettings !== undefined && output.accessLogSettings !== null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    cacheClusterEnabled:
      output.cacheClusterEnabled !== undefined && output.cacheClusterEnabled !== null
        ? output.cacheClusterEnabled
        : undefined,
    cacheClusterSize:
      output.cacheClusterSize !== undefined && output.cacheClusterSize !== null ? output.cacheClusterSize : undefined,
    cacheClusterStatus:
      output.cacheClusterStatus !== undefined && output.cacheClusterStatus !== null
        ? output.cacheClusterStatus
        : undefined,
    canarySettings:
      output.canarySettings !== undefined && output.canarySettings !== null
        ? deserializeAws_restJson1CanarySettings(output.canarySettings, context)
        : undefined,
    clientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    documentationVersion:
      output.documentationVersion !== undefined && output.documentationVersion !== null
        ? output.documentationVersion
        : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    methodSettings:
      output.methodSettings !== undefined && output.methodSettings !== null
        ? deserializeAws_restJson1MapOfMethodSettings(output.methodSettings, context)
        : undefined,
    stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    tracingEnabled:
      output.tracingEnabled !== undefined && output.tracingEnabled !== null ? output.tracingEnabled : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_restJson1MapOfStringToString(output.variables, context)
        : undefined,
    webAclArn: output.webAclArn !== undefined && output.webAclArn !== null ? output.webAclArn : undefined,
  };
};
var deserializeAws_restJson1ThrottleSettings = function (output, context) {
  return {
    burstLimit: output.burstLimit !== undefined && output.burstLimit !== null ? output.burstLimit : undefined,
    rateLimit: output.rateLimit !== undefined && output.rateLimit !== null ? output.rateLimit : undefined,
  };
};
var deserializeAws_restJson1TlsConfig = function (output, context) {
  return {
    insecureSkipVerification:
      output.insecureSkipVerification !== undefined && output.insecureSkipVerification !== null
        ? output.insecureSkipVerification
        : undefined,
  };
};
var deserializeAws_restJson1UsagePlan = function (output, context) {
  return {
    apiStages:
      output.apiStages !== undefined && output.apiStages !== null
        ? deserializeAws_restJson1ListOfApiStage(output.apiStages, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    productCode: output.productCode !== undefined && output.productCode !== null ? output.productCode : undefined,
    quota:
      output.quota !== undefined && output.quota !== null
        ? deserializeAws_restJson1QuotaSettings(output.quota, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    throttle:
      output.throttle !== undefined && output.throttle !== null
        ? deserializeAws_restJson1ThrottleSettings(output.throttle, context)
        : undefined,
  };
};
var deserializeAws_restJson1UsagePlanKey = function (output, context) {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1VpcLink = function (output, context) {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    targetArns:
      output.targetArns !== undefined && output.targetArns !== null
        ? deserializeAws_restJson1ListOfString(output.targetArns, context)
        : undefined,
  };
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
