import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis";
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
                                      {},
                                      input.ApiKeySelectionExpression !== undefined &&
                                        input.ApiKeySelectionExpression !== null && {
                                          apiKeySelectionExpression: input.ApiKeySelectionExpression,
                                        }
                                    ),
                                    input.CorsConfiguration !== undefined &&
                                      input.CorsConfiguration !== null && {
                                        corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
                                      }
                                  ),
                                  input.CredentialsArn !== undefined &&
                                    input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }
                                ),
                                input.Description !== undefined &&
                                  input.Description !== null && { description: input.Description }
                              ),
                              input.DisableExecuteApiEndpoint !== undefined &&
                                input.DisableExecuteApiEndpoint !== null && {
                                  disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint,
                                }
                            ),
                            input.DisableSchemaValidation !== undefined &&
                              input.DisableSchemaValidation !== null && {
                                disableSchemaValidation: input.DisableSchemaValidation,
                              }
                          ),
                          input.Name !== undefined && input.Name !== null && { name: input.Name }
                        ),
                        input.ProtocolType !== undefined &&
                          input.ProtocolType !== null && { protocolType: input.ProtocolType }
                      ),
                      input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }
                    ),
                    input.RouteSelectionExpression !== undefined &&
                      input.RouteSelectionExpression !== null && {
                        routeSelectionExpression: input.RouteSelectionExpression,
                      }
                  ),
                  input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }
                ),
                input.Target !== undefined && input.Target !== null && { target: input.Target }
              ),
              input.Version !== undefined && input.Version !== null && { version: input.Version }
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
export var serializeAws_restJson1CreateApiMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign({}, input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
                input.ApiMappingKey !== undefined &&
                  input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }
              ),
              input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }
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
          resolvedPath = "/v2/apis/{ApiId}/authorizers";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
                                input.AuthorizerCredentialsArn !== undefined &&
                                  input.AuthorizerCredentialsArn !== null && {
                                    authorizerCredentialsArn: input.AuthorizerCredentialsArn,
                                  }
                              ),
                              input.AuthorizerPayloadFormatVersion !== undefined &&
                                input.AuthorizerPayloadFormatVersion !== null && {
                                  authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
                                }
                            ),
                            input.AuthorizerResultTtlInSeconds !== undefined &&
                              input.AuthorizerResultTtlInSeconds !== null && {
                                authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
                              }
                          ),
                          input.AuthorizerType !== undefined &&
                            input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }
                        ),
                        input.AuthorizerUri !== undefined &&
                          input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }
                      ),
                      input.EnableSimpleResponses !== undefined &&
                        input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }
                    ),
                    input.IdentitySource !== undefined &&
                      input.IdentitySource !== null && {
                        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
                      }
                  ),
                  input.IdentityValidationExpression !== undefined &&
                    input.IdentityValidationExpression !== null && {
                      identityValidationExpression: input.IdentityValidationExpression,
                    }
                ),
                input.JwtConfiguration !== undefined &&
                  input.JwtConfiguration !== null && {
                    jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
                  }
              ),
              input.Name !== undefined && input.Name !== null && { name: input.Name }
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
          resolvedPath = "/v2/apis/{ApiId}/deployments";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.Description !== undefined && input.Description !== null && { description: input.Description }
              ),
              input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }
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
          resolvedPath = "/v2/domainnames";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.DomainName !== undefined && input.DomainName !== null && { domainName: input.DomainName }
                  ),
                  input.DomainNameConfigurations !== undefined &&
                    input.DomainNameConfigurations !== null && {
                      domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
                        input.DomainNameConfigurations,
                        context
                      ),
                    }
                ),
                input.MutualTlsAuthentication !== undefined &&
                  input.MutualTlsAuthentication !== null && {
                    mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
                      input.MutualTlsAuthentication,
                      context
                    ),
                  }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }
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
export var serializeAws_restJson1CreateIntegrationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/integrations";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
                                        __assign(
                                          __assign(
                                            __assign(
                                              {},
                                              input.ConnectionId !== undefined &&
                                                input.ConnectionId !== null && { connectionId: input.ConnectionId }
                                            ),
                                            input.ConnectionType !== undefined &&
                                              input.ConnectionType !== null && { connectionType: input.ConnectionType }
                                          ),
                                          input.ContentHandlingStrategy !== undefined &&
                                            input.ContentHandlingStrategy !== null && {
                                              contentHandlingStrategy: input.ContentHandlingStrategy,
                                            }
                                        ),
                                        input.CredentialsArn !== undefined &&
                                          input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }
                                      ),
                                      input.Description !== undefined &&
                                        input.Description !== null && { description: input.Description }
                                    ),
                                    input.IntegrationMethod !== undefined &&
                                      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }
                                  ),
                                  input.IntegrationSubtype !== undefined &&
                                    input.IntegrationSubtype !== null && {
                                      integrationSubtype: input.IntegrationSubtype,
                                    }
                                ),
                                input.IntegrationType !== undefined &&
                                  input.IntegrationType !== null && { integrationType: input.IntegrationType }
                              ),
                              input.IntegrationUri !== undefined &&
                                input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }
                            ),
                            input.PassthroughBehavior !== undefined &&
                              input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }
                          ),
                          input.PayloadFormatVersion !== undefined &&
                            input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }
                        ),
                        input.RequestParameters !== undefined &&
                          input.RequestParameters !== null && {
                            requestParameters: serializeAws_restJson1IntegrationParameters(
                              input.RequestParameters,
                              context
                            ),
                          }
                      ),
                      input.RequestTemplates !== undefined &&
                        input.RequestTemplates !== null && {
                          requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
                        }
                    ),
                    input.ResponseParameters !== undefined &&
                      input.ResponseParameters !== null && {
                        responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
                      }
                  ),
                  input.TemplateSelectionExpression !== undefined &&
                    input.TemplateSelectionExpression !== null && {
                      templateSelectionExpression: input.TemplateSelectionExpression,
                    }
                ),
                input.TimeoutInMillis !== undefined &&
                  input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }
              ),
              input.TlsConfig !== undefined &&
                input.TlsConfig !== null && {
                  tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context),
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
export var serializeAws_restJson1CreateIntegrationResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.ContentHandlingStrategy !== undefined &&
                        input.ContentHandlingStrategy !== null && {
                          contentHandlingStrategy: input.ContentHandlingStrategy,
                        }
                    ),
                    input.IntegrationResponseKey !== undefined &&
                      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }
                  ),
                  input.ResponseParameters !== undefined &&
                    input.ResponseParameters !== null && {
                      responseParameters: serializeAws_restJson1IntegrationParameters(
                        input.ResponseParameters,
                        context
                      ),
                    }
                ),
                input.ResponseTemplates !== undefined &&
                  input.ResponseTemplates !== null && {
                    responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
                  }
              ),
              input.TemplateSelectionExpression !== undefined &&
                input.TemplateSelectionExpression !== null && {
                  templateSelectionExpression: input.TemplateSelectionExpression,
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
export var serializeAws_restJson1CreateModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/models";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }
                  ),
                  input.Description !== undefined && input.Description !== null && { description: input.Description }
                ),
                input.Name !== undefined && input.Name !== null && { name: input.Name }
              ),
              input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }
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
export var serializeAws_restJson1CreateRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/routes";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
                                  {},
                                  input.ApiKeyRequired !== undefined &&
                                    input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }
                                ),
                                input.AuthorizationScopes !== undefined &&
                                  input.AuthorizationScopes !== null && {
                                    authorizationScopes: serializeAws_restJson1AuthorizationScopes(
                                      input.AuthorizationScopes,
                                      context
                                    ),
                                  }
                              ),
                              input.AuthorizationType !== undefined &&
                                input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }
                            ),
                            input.AuthorizerId !== undefined &&
                              input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }
                          ),
                          input.ModelSelectionExpression !== undefined &&
                            input.ModelSelectionExpression !== null && {
                              modelSelectionExpression: input.ModelSelectionExpression,
                            }
                        ),
                        input.OperationName !== undefined &&
                          input.OperationName !== null && { operationName: input.OperationName }
                      ),
                      input.RequestModels !== undefined &&
                        input.RequestModels !== null && {
                          requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
                        }
                    ),
                    input.RequestParameters !== undefined &&
                      input.RequestParameters !== null && {
                        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
                      }
                  ),
                  input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }
                ),
                input.RouteResponseSelectionExpression !== undefined &&
                  input.RouteResponseSelectionExpression !== null && {
                    routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
                  }
              ),
              input.Target !== undefined && input.Target !== null && { target: input.Target }
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
export var serializeAws_restJson1CreateRouteResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.ModelSelectionExpression !== undefined &&
                      input.ModelSelectionExpression !== null && {
                        modelSelectionExpression: input.ModelSelectionExpression,
                      }
                  ),
                  input.ResponseModels !== undefined &&
                    input.ResponseModels !== null && {
                      responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
                    }
                ),
                input.ResponseParameters !== undefined &&
                  input.ResponseParameters !== null && {
                    responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
                  }
              ),
              input.RouteResponseKey !== undefined &&
                input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }
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
          resolvedPath = "/v2/apis/{ApiId}/stages";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
                                input.AccessLogSettings !== undefined &&
                                  input.AccessLogSettings !== null && {
                                    accessLogSettings: serializeAws_restJson1AccessLogSettings(
                                      input.AccessLogSettings,
                                      context
                                    ),
                                  }
                              ),
                              input.AutoDeploy !== undefined &&
                                input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }
                            ),
                            input.ClientCertificateId !== undefined &&
                              input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }
                          ),
                          input.DefaultRouteSettings !== undefined &&
                            input.DefaultRouteSettings !== null && {
                              defaultRouteSettings: serializeAws_restJson1RouteSettings(
                                input.DefaultRouteSettings,
                                context
                              ),
                            }
                        ),
                        input.DeploymentId !== undefined &&
                          input.DeploymentId !== null && { deploymentId: input.DeploymentId }
                      ),
                      input.Description !== undefined &&
                        input.Description !== null && { description: input.Description }
                    ),
                    input.RouteSettings !== undefined &&
                      input.RouteSettings !== null && {
                        routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
                      }
                  ),
                  input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }
                ),
                input.StageVariables !== undefined &&
                  input.StageVariables !== null && {
                    stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
                  }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }
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
          resolvedPath = "/v2/vpclinks";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.Name !== undefined && input.Name !== null && { name: input.Name }),
                  input.SecurityGroupIds !== undefined &&
                    input.SecurityGroupIds !== null && {
                      securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIds, context),
                    }
                ),
                input.SubnetIds !== undefined &&
                  input.SubnetIds !== null && {
                    subnetIds: serializeAws_restJson1SubnetIdList(input.SubnetIds, context),
                  }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }
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
export var serializeAws_restJson1DeleteAccessLogSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
export var serializeAws_restJson1DeleteApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
export var serializeAws_restJson1DeleteApiMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
          if (input.ApiMappingId !== undefined) {
            labelValue = input.ApiMappingId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
            }
            resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiMappingId.");
          }
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
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
          resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.AuthorizerId !== undefined) {
            labelValue = input.AuthorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
            }
            resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AuthorizerId.");
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
export var serializeAws_restJson1DeleteCorsConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/cors";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
          resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.DeploymentId !== undefined) {
            labelValue = input.DeploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentId.");
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
          resolvedPath = "/v2/domainnames/{DomainName}";
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
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
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
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
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
          }
          if (input.IntegrationResponseId !== undefined) {
            labelValue = input.IntegrationResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
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
          resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.ModelId !== undefined) {
            labelValue = input.ModelId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ModelId.");
            }
            resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ModelId.");
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
export var serializeAws_restJson1DeleteRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
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
export var serializeAws_restJson1DeleteRouteRequestParameterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RequestParameterKey !== undefined) {
            labelValue = input.RequestParameterKey;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RequestParameterKey.");
            }
            resolvedPath = resolvedPath.replace("{RequestParameterKey}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RequestParameterKey.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
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
export var serializeAws_restJson1DeleteRouteResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
          }
          if (input.RouteResponseId !== undefined) {
            labelValue = input.RouteResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
            }
            resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteResponseId.");
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
export var serializeAws_restJson1DeleteRouteSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteKey !== undefined) {
            labelValue = input.RouteKey;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteKey.");
            }
            resolvedPath = resolvedPath.replace("{RouteKey}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteKey.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
          resolvedPath = "/v2/vpclinks/{VpcLinkId}";
          if (input.VpcLinkId !== undefined) {
            labelValue = input.VpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: VpcLinkId.");
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
export var serializeAws_restJson1ExportApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/exports/{Specification}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.Specification !== undefined) {
            labelValue = input.Specification;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Specification.");
            }
            resolvedPath = resolvedPath.replace("{Specification}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Specification.");
          }
          query = __assign(
            __assign(
              __assign(
                __assign({}, input.ExportVersion !== undefined && { exportVersion: input.ExportVersion }),
                input.IncludeExtensions !== undefined && { includeExtensions: input.IncludeExtensions.toString() }
              ),
              input.OutputType !== undefined && { outputType: input.OutputType }
            ),
            input.StageName !== undefined && { stageName: input.StageName }
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
export var serializeAws_restJson1GetApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
export var serializeAws_restJson1GetApiMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
          if (input.ApiMappingId !== undefined) {
            labelValue = input.ApiMappingId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
            }
            resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiMappingId.");
          }
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1GetApiMappingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1GetApisCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis";
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
          resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.AuthorizerId !== undefined) {
            labelValue = input.AuthorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
            }
            resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AuthorizerId.");
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
          resolvedPath = "/v2/apis/{ApiId}/authorizers";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.DeploymentId !== undefined) {
            labelValue = input.DeploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentId.");
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
export var serializeAws_restJson1GetDeploymentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/deployments";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
          resolvedPath = "/v2/domainnames/{DomainName}";
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
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
          resolvedPath = "/v2/domainnames";
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
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
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
          }
          if (input.IntegrationResponseId !== undefined) {
            labelValue = input.IntegrationResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
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
export var serializeAws_restJson1GetIntegrationResponsesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1GetIntegrationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/integrations";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1GetModelCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.ModelId !== undefined) {
            labelValue = input.ModelId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ModelId.");
            }
            resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ModelId.");
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
export var serializeAws_restJson1GetModelsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/models";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
          resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}/template";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.ModelId !== undefined) {
            labelValue = input.ModelId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ModelId.");
            }
            resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ModelId.");
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
export var serializeAws_restJson1GetRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
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
export var serializeAws_restJson1GetRouteResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
          }
          if (input.RouteResponseId !== undefined) {
            labelValue = input.RouteResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
            }
            resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteResponseId.");
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
export var serializeAws_restJson1GetRouteResponsesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1GetRoutesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/routes";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
          resolvedPath = "/v2/apis/{ApiId}/stages";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1GetTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/tags/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
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
export var serializeAws_restJson1GetVpcLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/vpclinks/{VpcLinkId}";
          if (input.VpcLinkId !== undefined) {
            labelValue = input.VpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: VpcLinkId.");
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
          resolvedPath = "/v2/vpclinks";
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { maxResults: input.MaxResults }),
            input.NextToken !== undefined && { nextToken: input.NextToken }
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
export var serializeAws_restJson1ImportApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis";
          query = __assign(
            __assign({}, input.Basepath !== undefined && { basepath: input.Basepath }),
            input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }
          );
          body = JSON.stringify(__assign({}, input.Body !== undefined && input.Body !== null && { body: input.Body }));
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
export var serializeAws_restJson1ReimportApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          query = __assign(
            __assign({}, input.Basepath !== undefined && { basepath: input.Basepath }),
            input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }
          );
          body = JSON.stringify(__assign({}, input.Body !== undefined && input.Body !== null && { body: input.Body }));
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
export var serializeAws_restJson1ResetAuthorizersCacheCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/tags/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.Tags !== undefined &&
                input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }
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
          resolvedPath = "/v2/tags/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          query = __assign(
            {},
            input.TagKeys !== undefined && {
              tagKeys: (input.TagKeys || []).map(function (_entry) {
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
export var serializeAws_restJson1UpdateApiCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
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
                                  {},
                                  input.ApiKeySelectionExpression !== undefined &&
                                    input.ApiKeySelectionExpression !== null && {
                                      apiKeySelectionExpression: input.ApiKeySelectionExpression,
                                    }
                                ),
                                input.CorsConfiguration !== undefined &&
                                  input.CorsConfiguration !== null && {
                                    corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
                                  }
                              ),
                              input.CredentialsArn !== undefined &&
                                input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }
                            ),
                            input.Description !== undefined &&
                              input.Description !== null && { description: input.Description }
                          ),
                          input.DisableExecuteApiEndpoint !== undefined &&
                            input.DisableExecuteApiEndpoint !== null && {
                              disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint,
                            }
                        ),
                        input.DisableSchemaValidation !== undefined &&
                          input.DisableSchemaValidation !== null && {
                            disableSchemaValidation: input.DisableSchemaValidation,
                          }
                      ),
                      input.Name !== undefined && input.Name !== null && { name: input.Name }
                    ),
                    input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }
                  ),
                  input.RouteSelectionExpression !== undefined &&
                    input.RouteSelectionExpression !== null && {
                      routeSelectionExpression: input.RouteSelectionExpression,
                    }
                ),
                input.Target !== undefined && input.Target !== null && { target: input.Target }
              ),
              input.Version !== undefined && input.Version !== null && { version: input.Version }
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
export var serializeAws_restJson1UpdateApiMappingCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
          if (input.ApiMappingId !== undefined) {
            labelValue = input.ApiMappingId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
            }
            resolvedPath = resolvedPath.replace("{ApiMappingId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiMappingId.");
          }
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign({}, input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
                input.ApiMappingKey !== undefined &&
                  input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }
              ),
              input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }
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
          resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.AuthorizerId !== undefined) {
            labelValue = input.AuthorizerId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
            }
            resolvedPath = resolvedPath.replace("{AuthorizerId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AuthorizerId.");
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
                                input.AuthorizerCredentialsArn !== undefined &&
                                  input.AuthorizerCredentialsArn !== null && {
                                    authorizerCredentialsArn: input.AuthorizerCredentialsArn,
                                  }
                              ),
                              input.AuthorizerPayloadFormatVersion !== undefined &&
                                input.AuthorizerPayloadFormatVersion !== null && {
                                  authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
                                }
                            ),
                            input.AuthorizerResultTtlInSeconds !== undefined &&
                              input.AuthorizerResultTtlInSeconds !== null && {
                                authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
                              }
                          ),
                          input.AuthorizerType !== undefined &&
                            input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }
                        ),
                        input.AuthorizerUri !== undefined &&
                          input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }
                      ),
                      input.EnableSimpleResponses !== undefined &&
                        input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }
                    ),
                    input.IdentitySource !== undefined &&
                      input.IdentitySource !== null && {
                        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
                      }
                  ),
                  input.IdentityValidationExpression !== undefined &&
                    input.IdentityValidationExpression !== null && {
                      identityValidationExpression: input.IdentityValidationExpression,
                    }
                ),
                input.JwtConfiguration !== undefined &&
                  input.JwtConfiguration !== null && {
                    jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
                  }
              ),
              input.Name !== undefined && input.Name !== null && { name: input.Name }
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
          resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.DeploymentId !== undefined) {
            labelValue = input.DeploymentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.Description !== undefined && input.Description !== null && { description: input.Description }
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
          resolvedPath = "/v2/domainnames/{DomainName}";
          if (input.DomainName !== undefined) {
            labelValue = input.DomainName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DomainName.");
            }
            resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DomainName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.DomainNameConfigurations !== undefined &&
                  input.DomainNameConfigurations !== null && {
                    domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
                      input.DomainNameConfigurations,
                      context
                    ),
                  }
              ),
              input.MutualTlsAuthentication !== undefined &&
                input.MutualTlsAuthentication !== null && {
                  mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
                    input.MutualTlsAuthentication,
                    context
                  ),
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
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
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
                                        __assign(
                                          __assign(
                                            __assign(
                                              {},
                                              input.ConnectionId !== undefined &&
                                                input.ConnectionId !== null && { connectionId: input.ConnectionId }
                                            ),
                                            input.ConnectionType !== undefined &&
                                              input.ConnectionType !== null && { connectionType: input.ConnectionType }
                                          ),
                                          input.ContentHandlingStrategy !== undefined &&
                                            input.ContentHandlingStrategy !== null && {
                                              contentHandlingStrategy: input.ContentHandlingStrategy,
                                            }
                                        ),
                                        input.CredentialsArn !== undefined &&
                                          input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }
                                      ),
                                      input.Description !== undefined &&
                                        input.Description !== null && { description: input.Description }
                                    ),
                                    input.IntegrationMethod !== undefined &&
                                      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }
                                  ),
                                  input.IntegrationSubtype !== undefined &&
                                    input.IntegrationSubtype !== null && {
                                      integrationSubtype: input.IntegrationSubtype,
                                    }
                                ),
                                input.IntegrationType !== undefined &&
                                  input.IntegrationType !== null && { integrationType: input.IntegrationType }
                              ),
                              input.IntegrationUri !== undefined &&
                                input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }
                            ),
                            input.PassthroughBehavior !== undefined &&
                              input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }
                          ),
                          input.PayloadFormatVersion !== undefined &&
                            input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }
                        ),
                        input.RequestParameters !== undefined &&
                          input.RequestParameters !== null && {
                            requestParameters: serializeAws_restJson1IntegrationParameters(
                              input.RequestParameters,
                              context
                            ),
                          }
                      ),
                      input.RequestTemplates !== undefined &&
                        input.RequestTemplates !== null && {
                          requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
                        }
                    ),
                    input.ResponseParameters !== undefined &&
                      input.ResponseParameters !== null && {
                        responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
                      }
                  ),
                  input.TemplateSelectionExpression !== undefined &&
                    input.TemplateSelectionExpression !== null && {
                      templateSelectionExpression: input.TemplateSelectionExpression,
                    }
                ),
                input.TimeoutInMillis !== undefined &&
                  input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }
              ),
              input.TlsConfig !== undefined &&
                input.TlsConfig !== null && {
                  tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context),
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
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.IntegrationId !== undefined) {
            labelValue = input.IntegrationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationId.");
          }
          if (input.IntegrationResponseId !== undefined) {
            labelValue = input.IntegrationResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
            }
            resolvedPath = resolvedPath.replace("{IntegrationResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.ContentHandlingStrategy !== undefined &&
                        input.ContentHandlingStrategy !== null && {
                          contentHandlingStrategy: input.ContentHandlingStrategy,
                        }
                    ),
                    input.IntegrationResponseKey !== undefined &&
                      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }
                  ),
                  input.ResponseParameters !== undefined &&
                    input.ResponseParameters !== null && {
                      responseParameters: serializeAws_restJson1IntegrationParameters(
                        input.ResponseParameters,
                        context
                      ),
                    }
                ),
                input.ResponseTemplates !== undefined &&
                  input.ResponseTemplates !== null && {
                    responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
                  }
              ),
              input.TemplateSelectionExpression !== undefined &&
                input.TemplateSelectionExpression !== null && {
                  templateSelectionExpression: input.TemplateSelectionExpression,
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
          resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.ModelId !== undefined) {
            labelValue = input.ModelId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ModelId.");
            }
            resolvedPath = resolvedPath.replace("{ModelId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ModelId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }
                  ),
                  input.Description !== undefined && input.Description !== null && { description: input.Description }
                ),
                input.Name !== undefined && input.Name !== null && { name: input.Name }
              ),
              input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }
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
export var serializeAws_restJson1UpdateRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
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
                                  {},
                                  input.ApiKeyRequired !== undefined &&
                                    input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }
                                ),
                                input.AuthorizationScopes !== undefined &&
                                  input.AuthorizationScopes !== null && {
                                    authorizationScopes: serializeAws_restJson1AuthorizationScopes(
                                      input.AuthorizationScopes,
                                      context
                                    ),
                                  }
                              ),
                              input.AuthorizationType !== undefined &&
                                input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }
                            ),
                            input.AuthorizerId !== undefined &&
                              input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }
                          ),
                          input.ModelSelectionExpression !== undefined &&
                            input.ModelSelectionExpression !== null && {
                              modelSelectionExpression: input.ModelSelectionExpression,
                            }
                        ),
                        input.OperationName !== undefined &&
                          input.OperationName !== null && { operationName: input.OperationName }
                      ),
                      input.RequestModels !== undefined &&
                        input.RequestModels !== null && {
                          requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
                        }
                    ),
                    input.RequestParameters !== undefined &&
                      input.RequestParameters !== null && {
                        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
                      }
                  ),
                  input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }
                ),
                input.RouteResponseSelectionExpression !== undefined &&
                  input.RouteResponseSelectionExpression !== null && {
                    routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
                  }
              ),
              input.Target !== undefined && input.Target !== null && { target: input.Target }
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
export var serializeAws_restJson1UpdateRouteResponseCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.RouteId !== undefined) {
            labelValue = input.RouteId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteId.");
            }
            resolvedPath = resolvedPath.replace("{RouteId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteId.");
          }
          if (input.RouteResponseId !== undefined) {
            labelValue = input.RouteResponseId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
            }
            resolvedPath = resolvedPath.replace("{RouteResponseId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RouteResponseId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.ModelSelectionExpression !== undefined &&
                      input.ModelSelectionExpression !== null && {
                        modelSelectionExpression: input.ModelSelectionExpression,
                      }
                  ),
                  input.ResponseModels !== undefined &&
                    input.ResponseModels !== null && {
                      responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
                    }
                ),
                input.ResponseParameters !== undefined &&
                  input.ResponseParameters !== null && {
                    responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
                  }
              ),
              input.RouteResponseKey !== undefined &&
                input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }
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
          resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
          if (input.ApiId !== undefined) {
            labelValue = input.ApiId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApiId.");
            }
            resolvedPath = resolvedPath.replace("{ApiId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApiId.");
          }
          if (input.StageName !== undefined) {
            labelValue = input.StageName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: StageName.");
            }
            resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: StageName.");
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
                            input.AccessLogSettings !== undefined &&
                              input.AccessLogSettings !== null && {
                                accessLogSettings: serializeAws_restJson1AccessLogSettings(
                                  input.AccessLogSettings,
                                  context
                                ),
                              }
                          ),
                          input.AutoDeploy !== undefined &&
                            input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }
                        ),
                        input.ClientCertificateId !== undefined &&
                          input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }
                      ),
                      input.DefaultRouteSettings !== undefined &&
                        input.DefaultRouteSettings !== null && {
                          defaultRouteSettings: serializeAws_restJson1RouteSettings(
                            input.DefaultRouteSettings,
                            context
                          ),
                        }
                    ),
                    input.DeploymentId !== undefined &&
                      input.DeploymentId !== null && { deploymentId: input.DeploymentId }
                  ),
                  input.Description !== undefined && input.Description !== null && { description: input.Description }
                ),
                input.RouteSettings !== undefined &&
                  input.RouteSettings !== null && {
                    routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
                  }
              ),
              input.StageVariables !== undefined &&
                input.StageVariables !== null && {
                  stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
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
          resolvedPath = "/v2/vpclinks/{VpcLinkId}";
          if (input.VpcLinkId !== undefined) {
            labelValue = input.VpcLinkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
            }
            resolvedPath = resolvedPath.replace("{VpcLinkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: VpcLinkId.");
          }
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { name: input.Name }));
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
export var deserializeAws_restJson1CreateApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiEndpoint: undefined,
            ApiGatewayManaged: undefined,
            ApiId: undefined,
            ApiKeySelectionExpression: undefined,
            CorsConfiguration: undefined,
            CreatedDate: undefined,
            Description: undefined,
            DisableExecuteApiEndpoint: undefined,
            DisableSchemaValidation: undefined,
            ImportInfo: undefined,
            Name: undefined,
            ProtocolType: undefined,
            RouteSelectionExpression: undefined,
            Tags: undefined,
            Version: undefined,
            Warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
            contents.ApiEndpoint = data.apiEndpoint;
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
            contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
          }
          if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
            contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
            contents.DisableSchemaValidation = data.disableSchemaValidation;
          }
          if (data.importInfo !== undefined && data.importInfo !== null) {
            contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.protocolType !== undefined && data.protocolType !== null) {
            contents.ProtocolType = data.protocolType;
          }
          if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
            contents.RouteSelectionExpression = data.routeSelectionExpression;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.Version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateApiCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateApiMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateApiMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiId: undefined,
            ApiMappingId: undefined,
            ApiMappingKey: undefined,
            Stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
            contents.ApiMappingId = data.apiMappingId;
          }
          if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
            contents.ApiMappingKey = data.apiMappingKey;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.Stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateApiMappingCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AuthorizerCredentialsArn: undefined,
            AuthorizerId: undefined,
            AuthorizerPayloadFormatVersion: undefined,
            AuthorizerResultTtlInSeconds: undefined,
            AuthorizerType: undefined,
            AuthorizerUri: undefined,
            EnableSimpleResponses: undefined,
            IdentitySource: undefined,
            IdentityValidationExpression: undefined,
            JwtConfiguration: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
            contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
            contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerType !== undefined && data.authorizerType !== null) {
            contents.AuthorizerType = data.authorizerType;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.AuthorizerUri = data.authorizerUri;
          }
          if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
            contents.EnableSimpleResponses = data.enableSimpleResponses;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.IdentityValidationExpression = data.identityValidationExpression;
          }
          if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
            contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAuthorizerCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AutoDeployed: undefined,
            CreatedDate: undefined,
            DeploymentId: undefined,
            DeploymentStatus: undefined,
            DeploymentStatusMessage: undefined,
            Description: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
            contents.AutoDeployed = data.autoDeployed;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
            contents.DeploymentStatus = data.deploymentStatus;
          }
          if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
            contents.DeploymentStatusMessage = data.deploymentStatusMessage;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ApiMappingSelectionExpression: undefined,
            DomainName: undefined,
            DomainNameConfigurations: undefined,
            MutualTlsAuthentication: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
            contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.DomainName = data.domainName;
          }
          if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
            contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
              data.domainNameConfigurations,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDomainNameCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#AccessDeniedException":
              return [3 /*break*/, 2];
            case "BadRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 4];
            case "ConflictException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 8];
            case "TooManyRequestsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIntegrationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateIntegrationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiGatewayManaged: undefined,
            ConnectionId: undefined,
            ConnectionType: undefined,
            ContentHandlingStrategy: undefined,
            CredentialsArn: undefined,
            Description: undefined,
            IntegrationId: undefined,
            IntegrationMethod: undefined,
            IntegrationResponseSelectionExpression: undefined,
            IntegrationSubtype: undefined,
            IntegrationType: undefined,
            IntegrationUri: undefined,
            PassthroughBehavior: undefined,
            PayloadFormatVersion: undefined,
            RequestParameters: undefined,
            RequestTemplates: undefined,
            ResponseParameters: undefined,
            TemplateSelectionExpression: undefined,
            TimeoutInMillis: undefined,
            TlsConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.ConnectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.ConnectionType = data.connectionType;
          }
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
            contents.CredentialsArn = data.credentialsArn;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.integrationId !== undefined && data.integrationId !== null) {
            contents.IntegrationId = data.integrationId;
          }
          if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
            contents.IntegrationMethod = data.integrationMethod;
          }
          if (
            data.integrationResponseSelectionExpression !== undefined &&
            data.integrationResponseSelectionExpression !== null
          ) {
            contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
          }
          if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
            contents.IntegrationSubtype = data.integrationSubtype;
          }
          if (data.integrationType !== undefined && data.integrationType !== null) {
            contents.IntegrationType = data.integrationType;
          }
          if (data.integrationUri !== undefined && data.integrationUri !== null) {
            contents.IntegrationUri = data.integrationUri;
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.PassthroughBehavior = data.passthroughBehavior;
          }
          if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
            contents.PayloadFormatVersion = data.payloadFormatVersion;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.TimeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateIntegrationCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIntegrationResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateIntegrationResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ContentHandlingStrategy: undefined,
            IntegrationResponseId: undefined,
            IntegrationResponseKey: undefined,
            ResponseParameters: undefined,
            ResponseTemplates: undefined,
            TemplateSelectionExpression: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
            contents.IntegrationResponseId = data.integrationResponseId;
          }
          if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
            contents.IntegrationResponseKey = data.integrationResponseKey;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(
              data.responseParameters,
              context
            );
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateIntegrationResponseCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ContentType: undefined,
            Description: undefined,
            ModelId: undefined,
            Name: undefined,
            Schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.ContentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.modelId !== undefined && data.modelId !== null) {
            contents.ModelId = data.modelId;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.Schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateModelCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiGatewayManaged: undefined,
            ApiKeyRequired: undefined,
            AuthorizationScopes: undefined,
            AuthorizationType: undefined,
            AuthorizerId: undefined,
            ModelSelectionExpression: undefined,
            OperationName: undefined,
            RequestModels: undefined,
            RequestParameters: undefined,
            RouteId: undefined,
            RouteKey: undefined,
            RouteResponseSelectionExpression: undefined,
            Target: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.ApiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(
              data.authorizationScopes,
              context
            );
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.AuthorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.OperationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
          }
          if (data.routeId !== undefined && data.routeId !== null) {
            contents.RouteId = data.routeId;
          }
          if (data.routeKey !== undefined && data.routeKey !== null) {
            contents.RouteKey = data.routeKey;
          }
          if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
            contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
          }
          if (data.target !== undefined && data.target !== null) {
            contents.Target = data.target;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateRouteCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRouteResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateRouteResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ModelSelectionExpression: undefined,
            ResponseModels: undefined,
            ResponseParameters: undefined,
            RouteResponseId: undefined,
            RouteResponseKey: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
          }
          if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
            contents.RouteResponseId = data.routeResponseId;
          }
          if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
            contents.RouteResponseKey = data.routeResponseKey;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateRouteResponseCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AccessLogSettings: undefined,
            ApiGatewayManaged: undefined,
            AutoDeploy: undefined,
            ClientCertificateId: undefined,
            CreatedDate: undefined,
            DefaultRouteSettings: undefined,
            DeploymentId: undefined,
            Description: undefined,
            LastDeploymentStatusMessage: undefined,
            LastUpdatedDate: undefined,
            RouteSettings: undefined,
            StageName: undefined,
            StageVariables: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
            contents.AutoDeploy = data.autoDeploy;
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.ClientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
            contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
            contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
          }
          if (data.routeSettings !== undefined && data.routeSettings !== null) {
            contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.StageName = data.stageName;
          }
          if (data.stageVariables !== undefined && data.stageVariables !== null) {
            contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateStageCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateVpcLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVpcLinkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CreatedDate: undefined,
            Name: undefined,
            SecurityGroupIds: undefined,
            SubnetIds: undefined,
            Tags: undefined,
            VpcLinkId: undefined,
            VpcLinkStatus: undefined,
            VpcLinkStatusMessage: undefined,
            VpcLinkVersion: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
            contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
          }
          if (data.subnetIds !== undefined && data.subnetIds !== null) {
            contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
            contents.VpcLinkId = data.vpcLinkId;
          }
          if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
            contents.VpcLinkStatus = data.vpcLinkStatus;
          }
          if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
            contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
          }
          if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
            contents.VpcLinkVersion = data.vpcLinkVersion;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVpcLinkCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteAccessLogSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAccessLogSettingsCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAccessLogSettingsCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteApiCommandError(output, context)];
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
var deserializeAws_restJson1DeleteApiCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteApiMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteApiMappingCommandError(output, context)];
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
var deserializeAws_restJson1DeleteApiMappingCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteCorsConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteCorsConfigurationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteCorsConfigurationCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDomainNameCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteModelCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRouteCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRouteCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRouteRequestParameterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRouteRequestParameterCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRouteRequestParameterCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRouteResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRouteResponseCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRouteResponseCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRouteSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRouteSettingsCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRouteSettingsCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteStageCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ExportApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ExportApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            body: undefined,
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.body = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ExportApiCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiEndpoint: undefined,
            ApiGatewayManaged: undefined,
            ApiId: undefined,
            ApiKeySelectionExpression: undefined,
            CorsConfiguration: undefined,
            CreatedDate: undefined,
            Description: undefined,
            DisableExecuteApiEndpoint: undefined,
            DisableSchemaValidation: undefined,
            ImportInfo: undefined,
            Name: undefined,
            ProtocolType: undefined,
            RouteSelectionExpression: undefined,
            Tags: undefined,
            Version: undefined,
            Warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
            contents.ApiEndpoint = data.apiEndpoint;
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
            contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
          }
          if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
            contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
            contents.DisableSchemaValidation = data.disableSchemaValidation;
          }
          if (data.importInfo !== undefined && data.importInfo !== null) {
            contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.protocolType !== undefined && data.protocolType !== null) {
            contents.ProtocolType = data.protocolType;
          }
          if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
            contents.RouteSelectionExpression = data.routeSelectionExpression;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.Version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApiCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApiMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApiMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiId: undefined,
            ApiMappingId: undefined,
            ApiMappingKey: undefined,
            Stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
            contents.ApiMappingId = data.apiMappingId;
          }
          if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
            contents.ApiMappingKey = data.apiMappingKey;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.Stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApiMappingCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApiMappingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApiMappingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfApiMapping(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApiMappingsCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApisCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApisCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfApi(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApisCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AuthorizerCredentialsArn: undefined,
            AuthorizerId: undefined,
            AuthorizerPayloadFormatVersion: undefined,
            AuthorizerResultTtlInSeconds: undefined,
            AuthorizerType: undefined,
            AuthorizerUri: undefined,
            EnableSimpleResponses: undefined,
            IdentitySource: undefined,
            IdentityValidationExpression: undefined,
            JwtConfiguration: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
            contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
            contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerType !== undefined && data.authorizerType !== null) {
            contents.AuthorizerType = data.authorizerType;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.AuthorizerUri = data.authorizerUri;
          }
          if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
            contents.EnableSimpleResponses = data.enableSimpleResponses;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.IdentityValidationExpression = data.identityValidationExpression;
          }
          if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
            contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAuthorizerCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfAuthorizer(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAuthorizersCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AutoDeployed: undefined,
            CreatedDate: undefined,
            DeploymentId: undefined,
            DeploymentStatus: undefined,
            DeploymentStatusMessage: undefined,
            Description: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
            contents.AutoDeployed = data.autoDeployed;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
            contents.DeploymentStatus = data.deploymentStatus;
          }
          if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
            contents.DeploymentStatusMessage = data.deploymentStatusMessage;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfDeployment(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentsCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ApiMappingSelectionExpression: undefined,
            DomainName: undefined,
            DomainNameConfigurations: undefined,
            MutualTlsAuthentication: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
            contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.DomainName = data.domainName;
          }
          if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
            contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
              data.domainNameConfigurations,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDomainNameCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfDomainName(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ApiGatewayManaged: undefined,
            ConnectionId: undefined,
            ConnectionType: undefined,
            ContentHandlingStrategy: undefined,
            CredentialsArn: undefined,
            Description: undefined,
            IntegrationId: undefined,
            IntegrationMethod: undefined,
            IntegrationResponseSelectionExpression: undefined,
            IntegrationSubtype: undefined,
            IntegrationType: undefined,
            IntegrationUri: undefined,
            PassthroughBehavior: undefined,
            PayloadFormatVersion: undefined,
            RequestParameters: undefined,
            RequestTemplates: undefined,
            ResponseParameters: undefined,
            TemplateSelectionExpression: undefined,
            TimeoutInMillis: undefined,
            TlsConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.ConnectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.ConnectionType = data.connectionType;
          }
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
            contents.CredentialsArn = data.credentialsArn;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.integrationId !== undefined && data.integrationId !== null) {
            contents.IntegrationId = data.integrationId;
          }
          if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
            contents.IntegrationMethod = data.integrationMethod;
          }
          if (
            data.integrationResponseSelectionExpression !== undefined &&
            data.integrationResponseSelectionExpression !== null
          ) {
            contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
          }
          if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
            contents.IntegrationSubtype = data.integrationSubtype;
          }
          if (data.integrationType !== undefined && data.integrationType !== null) {
            contents.IntegrationType = data.integrationType;
          }
          if (data.integrationUri !== undefined && data.integrationUri !== null) {
            contents.IntegrationUri = data.integrationUri;
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.PassthroughBehavior = data.passthroughBehavior;
          }
          if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
            contents.PayloadFormatVersion = data.payloadFormatVersion;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.TimeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ContentHandlingStrategy: undefined,
            IntegrationResponseId: undefined,
            IntegrationResponseKey: undefined,
            ResponseParameters: undefined,
            ResponseTemplates: undefined,
            TemplateSelectionExpression: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
            contents.IntegrationResponseId = data.integrationResponseId;
          }
          if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
            contents.IntegrationResponseKey = data.integrationResponseKey;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(
              data.responseParameters,
              context
            );
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationResponseCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIntegrationResponsesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetIntegrationResponsesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfIntegrationResponse(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationResponsesCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIntegrationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetIntegrationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfIntegration(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetIntegrationsCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ContentType: undefined,
            Description: undefined,
            ModelId: undefined,
            Name: undefined,
            Schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.ContentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.modelId !== undefined && data.modelId !== null) {
            contents.ModelId = data.modelId;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.Schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfModel(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelsCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Value: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.value !== undefined && data.value !== null) {
            contents.Value = data.value;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetModelTemplateCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiGatewayManaged: undefined,
            ApiKeyRequired: undefined,
            AuthorizationScopes: undefined,
            AuthorizationType: undefined,
            AuthorizerId: undefined,
            ModelSelectionExpression: undefined,
            OperationName: undefined,
            RequestModels: undefined,
            RequestParameters: undefined,
            RouteId: undefined,
            RouteKey: undefined,
            RouteResponseSelectionExpression: undefined,
            Target: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.ApiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(
              data.authorizationScopes,
              context
            );
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.AuthorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.OperationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
          }
          if (data.routeId !== undefined && data.routeId !== null) {
            contents.RouteId = data.routeId;
          }
          if (data.routeKey !== undefined && data.routeKey !== null) {
            contents.RouteKey = data.routeKey;
          }
          if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
            contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
          }
          if (data.target !== undefined && data.target !== null) {
            contents.Target = data.target;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRouteCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRouteResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRouteResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ModelSelectionExpression: undefined,
            ResponseModels: undefined,
            ResponseParameters: undefined,
            RouteResponseId: undefined,
            RouteResponseKey: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
          }
          if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
            contents.RouteResponseId = data.routeResponseId;
          }
          if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
            contents.RouteResponseKey = data.routeResponseKey;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRouteResponseCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRouteResponsesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRouteResponsesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfRouteResponse(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRouteResponsesCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRoutesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRoutesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfRoute(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRoutesCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AccessLogSettings: undefined,
            ApiGatewayManaged: undefined,
            AutoDeploy: undefined,
            ClientCertificateId: undefined,
            CreatedDate: undefined,
            DefaultRouteSettings: undefined,
            DeploymentId: undefined,
            Description: undefined,
            LastDeploymentStatusMessage: undefined,
            LastUpdatedDate: undefined,
            RouteSettings: undefined,
            StageName: undefined,
            StageVariables: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
            contents.AutoDeploy = data.autoDeploy;
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.ClientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
            contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
            contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
          }
          if (data.routeSettings !== undefined && data.routeSettings !== null) {
            contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.StageName = data.stageName;
          }
          if (data.stageVariables !== undefined && data.stageVariables !== null) {
            contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetStageCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfStage(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetTagsCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            CreatedDate: undefined,
            Name: undefined,
            SecurityGroupIds: undefined,
            SubnetIds: undefined,
            Tags: undefined,
            VpcLinkId: undefined,
            VpcLinkStatus: undefined,
            VpcLinkStatusMessage: undefined,
            VpcLinkVersion: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
            contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
          }
          if (data.subnetIds !== undefined && data.subnetIds !== null) {
            contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
            contents.VpcLinkId = data.vpcLinkId;
          }
          if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
            contents.VpcLinkStatus = data.vpcLinkStatus;
          }
          if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
            contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
          }
          if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
            contents.VpcLinkVersion = data.vpcLinkVersion;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetVpcLinkCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.items !== undefined && data.items !== null) {
            contents.Items = deserializeAws_restJson1__listOfVpcLink(data.items, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetVpcLinksCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ImportApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ImportApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiEndpoint: undefined,
            ApiGatewayManaged: undefined,
            ApiId: undefined,
            ApiKeySelectionExpression: undefined,
            CorsConfiguration: undefined,
            CreatedDate: undefined,
            Description: undefined,
            DisableExecuteApiEndpoint: undefined,
            DisableSchemaValidation: undefined,
            ImportInfo: undefined,
            Name: undefined,
            ProtocolType: undefined,
            RouteSelectionExpression: undefined,
            Tags: undefined,
            Version: undefined,
            Warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
            contents.ApiEndpoint = data.apiEndpoint;
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
            contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
          }
          if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
            contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
            contents.DisableSchemaValidation = data.disableSchemaValidation;
          }
          if (data.importInfo !== undefined && data.importInfo !== null) {
            contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.protocolType !== undefined && data.protocolType !== null) {
            contents.ProtocolType = data.protocolType;
          }
          if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
            contents.RouteSelectionExpression = data.routeSelectionExpression;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.Version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ImportApiCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ReimportApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ReimportApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiEndpoint: undefined,
            ApiGatewayManaged: undefined,
            ApiId: undefined,
            ApiKeySelectionExpression: undefined,
            CorsConfiguration: undefined,
            CreatedDate: undefined,
            Description: undefined,
            DisableExecuteApiEndpoint: undefined,
            DisableSchemaValidation: undefined,
            ImportInfo: undefined,
            Name: undefined,
            ProtocolType: undefined,
            RouteSelectionExpression: undefined,
            Tags: undefined,
            Version: undefined,
            Warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
            contents.ApiEndpoint = data.apiEndpoint;
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
            contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
          }
          if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
            contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
            contents.DisableSchemaValidation = data.disableSchemaValidation;
          }
          if (data.importInfo !== undefined && data.importInfo !== null) {
            contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.protocolType !== undefined && data.protocolType !== null) {
            contents.ProtocolType = data.protocolType;
          }
          if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
            contents.RouteSelectionExpression = data.routeSelectionExpression;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.Version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ReimportApiCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ResetAuthorizersCacheCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ResetAuthorizersCacheCommandError(output, context)];
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
var deserializeAws_restJson1ResetAuthorizersCacheCommandError = function (output, context) {
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
            case "NotFoundException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 2];
            case "TooManyRequestsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
          if (output.statusCode !== 201 && output.statusCode >= 300) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateApiCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateApiCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiEndpoint: undefined,
            ApiGatewayManaged: undefined,
            ApiId: undefined,
            ApiKeySelectionExpression: undefined,
            CorsConfiguration: undefined,
            CreatedDate: undefined,
            Description: undefined,
            DisableExecuteApiEndpoint: undefined,
            DisableSchemaValidation: undefined,
            ImportInfo: undefined,
            Name: undefined,
            ProtocolType: undefined,
            RouteSelectionExpression: undefined,
            Tags: undefined,
            Version: undefined,
            Warnings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
            contents.ApiEndpoint = data.apiEndpoint;
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
            contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
          }
          if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
            contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
            contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
          }
          if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
            contents.DisableSchemaValidation = data.disableSchemaValidation;
          }
          if (data.importInfo !== undefined && data.importInfo !== null) {
            contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.protocolType !== undefined && data.protocolType !== null) {
            contents.ProtocolType = data.protocolType;
          }
          if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
            contents.RouteSelectionExpression = data.routeSelectionExpression;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.version !== undefined && data.version !== null) {
            contents.Version = data.version;
          }
          if (data.warnings !== undefined && data.warnings !== null) {
            contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateApiCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateApiMappingCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateApiMappingCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiId: undefined,
            ApiMappingId: undefined,
            ApiMappingKey: undefined,
            Stage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiId !== undefined && data.apiId !== null) {
            contents.ApiId = data.apiId;
          }
          if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
            contents.ApiMappingId = data.apiMappingId;
          }
          if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
            contents.ApiMappingKey = data.apiMappingKey;
          }
          if (data.stage !== undefined && data.stage !== null) {
            contents.Stage = data.stage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateApiMappingCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AuthorizerCredentialsArn: undefined,
            AuthorizerId: undefined,
            AuthorizerPayloadFormatVersion: undefined,
            AuthorizerResultTtlInSeconds: undefined,
            AuthorizerType: undefined,
            AuthorizerUri: undefined,
            EnableSimpleResponses: undefined,
            IdentitySource: undefined,
            IdentityValidationExpression: undefined,
            JwtConfiguration: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
            contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
            contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
          }
          if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
            contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
          }
          if (data.authorizerType !== undefined && data.authorizerType !== null) {
            contents.AuthorizerType = data.authorizerType;
          }
          if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
            contents.AuthorizerUri = data.authorizerUri;
          }
          if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
            contents.EnableSimpleResponses = data.enableSimpleResponses;
          }
          if (data.identitySource !== undefined && data.identitySource !== null) {
            contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
          }
          if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
            contents.IdentityValidationExpression = data.identityValidationExpression;
          }
          if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
            contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AutoDeployed: undefined,
            CreatedDate: undefined,
            DeploymentId: undefined,
            DeploymentStatus: undefined,
            DeploymentStatusMessage: undefined,
            Description: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
            contents.AutoDeployed = data.autoDeployed;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
            contents.DeploymentStatus = data.deploymentStatus;
          }
          if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
            contents.DeploymentStatusMessage = data.deploymentStatusMessage;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ApiMappingSelectionExpression: undefined,
            DomainName: undefined,
            DomainNameConfigurations: undefined,
            MutualTlsAuthentication: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
            contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
          }
          if (data.domainName !== undefined && data.domainName !== null) {
            contents.DomainName = data.domainName;
          }
          if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
            contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
              data.domainNameConfigurations,
              context
            );
          }
          if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
            contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
              data.mutualTlsAuthentication,
              context
            );
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDomainNameCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ApiGatewayManaged: undefined,
            ConnectionId: undefined,
            ConnectionType: undefined,
            ContentHandlingStrategy: undefined,
            CredentialsArn: undefined,
            Description: undefined,
            IntegrationId: undefined,
            IntegrationMethod: undefined,
            IntegrationResponseSelectionExpression: undefined,
            IntegrationSubtype: undefined,
            IntegrationType: undefined,
            IntegrationUri: undefined,
            PassthroughBehavior: undefined,
            PayloadFormatVersion: undefined,
            RequestParameters: undefined,
            RequestTemplates: undefined,
            ResponseParameters: undefined,
            TemplateSelectionExpression: undefined,
            TimeoutInMillis: undefined,
            TlsConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.connectionId !== undefined && data.connectionId !== null) {
            contents.ConnectionId = data.connectionId;
          }
          if (data.connectionType !== undefined && data.connectionType !== null) {
            contents.ConnectionType = data.connectionType;
          }
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
            contents.CredentialsArn = data.credentialsArn;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.integrationId !== undefined && data.integrationId !== null) {
            contents.IntegrationId = data.integrationId;
          }
          if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
            contents.IntegrationMethod = data.integrationMethod;
          }
          if (
            data.integrationResponseSelectionExpression !== undefined &&
            data.integrationResponseSelectionExpression !== null
          ) {
            contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
          }
          if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
            contents.IntegrationSubtype = data.integrationSubtype;
          }
          if (data.integrationType !== undefined && data.integrationType !== null) {
            contents.IntegrationType = data.integrationType;
          }
          if (data.integrationUri !== undefined && data.integrationUri !== null) {
            contents.IntegrationUri = data.integrationUri;
          }
          if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
            contents.PassthroughBehavior = data.passthroughBehavior;
          }
          if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
            contents.PayloadFormatVersion = data.payloadFormatVersion;
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
          }
          if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
            contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
            contents.TimeoutInMillis = data.timeoutInMillis;
          }
          if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
            contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateIntegrationCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ContentHandlingStrategy: undefined,
            IntegrationResponseId: undefined,
            IntegrationResponseKey: undefined,
            ResponseParameters: undefined,
            ResponseTemplates: undefined,
            TemplateSelectionExpression: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
            contents.ContentHandlingStrategy = data.contentHandlingStrategy;
          }
          if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
            contents.IntegrationResponseId = data.integrationResponseId;
          }
          if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
            contents.IntegrationResponseKey = data.integrationResponseKey;
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(
              data.responseParameters,
              context
            );
          }
          if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
            contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
          }
          if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
            contents.TemplateSelectionExpression = data.templateSelectionExpression;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateIntegrationResponseCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            ContentType: undefined,
            Description: undefined,
            ModelId: undefined,
            Name: undefined,
            Schema: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.contentType !== undefined && data.contentType !== null) {
            contents.ContentType = data.contentType;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.modelId !== undefined && data.modelId !== null) {
            contents.ModelId = data.modelId;
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.schema !== undefined && data.schema !== null) {
            contents.Schema = data.schema;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateModelCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApiGatewayManaged: undefined,
            ApiKeyRequired: undefined,
            AuthorizationScopes: undefined,
            AuthorizationType: undefined,
            AuthorizerId: undefined,
            ModelSelectionExpression: undefined,
            OperationName: undefined,
            RequestModels: undefined,
            RequestParameters: undefined,
            RouteId: undefined,
            RouteKey: undefined,
            RouteResponseSelectionExpression: undefined,
            Target: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
            contents.ApiKeyRequired = data.apiKeyRequired;
          }
          if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
            contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(
              data.authorizationScopes,
              context
            );
          }
          if (data.authorizationType !== undefined && data.authorizationType !== null) {
            contents.AuthorizationType = data.authorizationType;
          }
          if (data.authorizerId !== undefined && data.authorizerId !== null) {
            contents.AuthorizerId = data.authorizerId;
          }
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.operationName !== undefined && data.operationName !== null) {
            contents.OperationName = data.operationName;
          }
          if (data.requestModels !== undefined && data.requestModels !== null) {
            contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
          }
          if (data.requestParameters !== undefined && data.requestParameters !== null) {
            contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
          }
          if (data.routeId !== undefined && data.routeId !== null) {
            contents.RouteId = data.routeId;
          }
          if (data.routeKey !== undefined && data.routeKey !== null) {
            contents.RouteKey = data.routeKey;
          }
          if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
            contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
          }
          if (data.target !== undefined && data.target !== null) {
            contents.Target = data.target;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRouteCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRouteResponseCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRouteResponseCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ModelSelectionExpression: undefined,
            ResponseModels: undefined,
            ResponseParameters: undefined,
            RouteResponseId: undefined,
            RouteResponseKey: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
            contents.ModelSelectionExpression = data.modelSelectionExpression;
          }
          if (data.responseModels !== undefined && data.responseModels !== null) {
            contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
          }
          if (data.responseParameters !== undefined && data.responseParameters !== null) {
            contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
          }
          if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
            contents.RouteResponseId = data.routeResponseId;
          }
          if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
            contents.RouteResponseKey = data.routeResponseKey;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRouteResponseCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            AccessLogSettings: undefined,
            ApiGatewayManaged: undefined,
            AutoDeploy: undefined,
            ClientCertificateId: undefined,
            CreatedDate: undefined,
            DefaultRouteSettings: undefined,
            DeploymentId: undefined,
            Description: undefined,
            LastDeploymentStatusMessage: undefined,
            LastUpdatedDate: undefined,
            RouteSettings: undefined,
            StageName: undefined,
            StageVariables: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
            contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
          }
          if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
            contents.ApiGatewayManaged = data.apiGatewayManaged;
          }
          if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
            contents.AutoDeploy = data.autoDeploy;
          }
          if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
            contents.ClientCertificateId = data.clientCertificateId;
          }
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
            contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
          }
          if (data.deploymentId !== undefined && data.deploymentId !== null) {
            contents.DeploymentId = data.deploymentId;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.Description = data.description;
          }
          if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
            contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
          }
          if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
            contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
          }
          if (data.routeSettings !== undefined && data.routeSettings !== null) {
            contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
          }
          if (data.stageName !== undefined && data.stageName !== null) {
            contents.StageName = data.stageName;
          }
          if (data.stageVariables !== undefined && data.stageVariables !== null) {
            contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateStageCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#ConflictException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            CreatedDate: undefined,
            Name: undefined,
            SecurityGroupIds: undefined,
            SubnetIds: undefined,
            Tags: undefined,
            VpcLinkId: undefined,
            VpcLinkStatus: undefined,
            VpcLinkStatusMessage: undefined,
            VpcLinkVersion: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdDate !== undefined && data.createdDate !== null) {
            contents.CreatedDate = new Date(data.createdDate);
          }
          if (data.name !== undefined && data.name !== null) {
            contents.Name = data.name;
          }
          if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
            contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
          }
          if (data.subnetIds !== undefined && data.subnetIds !== null) {
            contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
          }
          if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
            contents.VpcLinkId = data.vpcLinkId;
          }
          if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
            contents.VpcLinkStatus = data.vpcLinkStatus;
          }
          if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
            contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
          }
          if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
            contents.VpcLinkVersion = data.vpcLinkVersion;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVpcLinkCommandError = function (output, context) {
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
            case "com.amazonaws.apigatewayv2#BadRequestException":
              return [3 /*break*/, 2];
            case "NotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apigatewayv2#NotFoundException":
              return [3 /*break*/, 4];
            case "TooManyRequestsException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
      }
      return [2 /*return*/, contents];
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
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
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
        Message: undefined,
        ResourceType: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
      }
      if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.ResourceType = data.resourceType;
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
        LimitType: undefined,
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.limitType !== undefined && data.limitType !== null) {
        contents.LimitType = data.limitType;
      }
      if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1__listOf__string = function (input, context) {
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
var serializeAws_restJson1AccessLogSettings = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DestinationArn !== undefined && input.DestinationArn !== null && { destinationArn: input.DestinationArn }
    ),
    input.Format !== undefined && input.Format !== null && { format: input.Format }
  );
};
var serializeAws_restJson1AuthorizationScopes = function (input, context) {
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
var serializeAws_restJson1Cors = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.AllowCredentials !== undefined &&
                input.AllowCredentials !== null && { allowCredentials: input.AllowCredentials }
            ),
            input.AllowHeaders !== undefined &&
              input.AllowHeaders !== null && {
                allowHeaders: serializeAws_restJson1CorsHeaderList(input.AllowHeaders, context),
              }
          ),
          input.AllowMethods !== undefined &&
            input.AllowMethods !== null && {
              allowMethods: serializeAws_restJson1CorsMethodList(input.AllowMethods, context),
            }
        ),
        input.AllowOrigins !== undefined &&
          input.AllowOrigins !== null && {
            allowOrigins: serializeAws_restJson1CorsOriginList(input.AllowOrigins, context),
          }
      ),
      input.ExposeHeaders !== undefined &&
        input.ExposeHeaders !== null && {
          exposeHeaders: serializeAws_restJson1CorsHeaderList(input.ExposeHeaders, context),
        }
    ),
    input.MaxAge !== undefined && input.MaxAge !== null && { maxAge: input.MaxAge }
  );
};
var serializeAws_restJson1CorsHeaderList = function (input, context) {
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
var serializeAws_restJson1CorsMethodList = function (input, context) {
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
var serializeAws_restJson1CorsOriginList = function (input, context) {
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
var serializeAws_restJson1DomainNameConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.ApiGatewayDomainName !== undefined &&
                      input.ApiGatewayDomainName !== null && { apiGatewayDomainName: input.ApiGatewayDomainName }
                  ),
                  input.CertificateArn !== undefined &&
                    input.CertificateArn !== null && { certificateArn: input.CertificateArn }
                ),
                input.CertificateName !== undefined &&
                  input.CertificateName !== null && { certificateName: input.CertificateName }
              ),
              input.CertificateUploadDate !== undefined &&
                input.CertificateUploadDate !== null && {
                  certificateUploadDate: input.CertificateUploadDate.toISOString().split(".")[0] + "Z",
                }
            ),
            input.DomainNameStatus !== undefined &&
              input.DomainNameStatus !== null && { domainNameStatus: input.DomainNameStatus }
          ),
          input.DomainNameStatusMessage !== undefined &&
            input.DomainNameStatusMessage !== null && { domainNameStatusMessage: input.DomainNameStatusMessage }
        ),
        input.EndpointType !== undefined && input.EndpointType !== null && { endpointType: input.EndpointType }
      ),
      input.HostedZoneId !== undefined && input.HostedZoneId !== null && { hostedZoneId: input.HostedZoneId }
    ),
    input.SecurityPolicy !== undefined && input.SecurityPolicy !== null && { securityPolicy: input.SecurityPolicy }
  );
};
var serializeAws_restJson1DomainNameConfigurations = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};
var serializeAws_restJson1IdentitySourceList = function (input, context) {
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
var serializeAws_restJson1IntegrationParameters = function (input, context) {
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
var serializeAws_restJson1JWTConfiguration = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Audience !== undefined &&
        input.Audience !== null && { audience: serializeAws_restJson1__listOf__string(input.Audience, context) }
    ),
    input.Issuer !== undefined && input.Issuer !== null && { issuer: input.Issuer }
  );
};
var serializeAws_restJson1MutualTlsAuthenticationInput = function (input, context) {
  return __assign(
    __assign(
      {},
      input.TruststoreUri !== undefined && input.TruststoreUri !== null && { truststoreUri: input.TruststoreUri }
    ),
    input.TruststoreVersion !== undefined &&
      input.TruststoreVersion !== null && { truststoreVersion: input.TruststoreVersion }
  );
};
var serializeAws_restJson1ParameterConstraints = function (input, context) {
  return __assign({}, input.Required !== undefined && input.Required !== null && { required: input.Required });
};
var serializeAws_restJson1ResponseParameters = function (input, context) {
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
      ((_b = {}), (_b[key] = serializeAws_restJson1IntegrationParameters(value, context)), _b)
    );
  }, {});
};
var serializeAws_restJson1RouteModels = function (input, context) {
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
var serializeAws_restJson1RouteParameters = function (input, context) {
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
      ((_b = {}), (_b[key] = serializeAws_restJson1ParameterConstraints(value, context)), _b)
    );
  }, {});
};
var serializeAws_restJson1RouteSettings = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.DataTraceEnabled !== undefined &&
              input.DataTraceEnabled !== null && { dataTraceEnabled: input.DataTraceEnabled }
          ),
          input.DetailedMetricsEnabled !== undefined &&
            input.DetailedMetricsEnabled !== null && { detailedMetricsEnabled: input.DetailedMetricsEnabled }
        ),
        input.LoggingLevel !== undefined && input.LoggingLevel !== null && { loggingLevel: input.LoggingLevel }
      ),
      input.ThrottlingBurstLimit !== undefined &&
        input.ThrottlingBurstLimit !== null && { throttlingBurstLimit: input.ThrottlingBurstLimit }
    ),
    input.ThrottlingRateLimit !== undefined &&
      input.ThrottlingRateLimit !== null && { throttlingRateLimit: input.ThrottlingRateLimit }
  );
};
var serializeAws_restJson1RouteSettingsMap = function (input, context) {
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
      ((_b = {}), (_b[key] = serializeAws_restJson1RouteSettings(value, context)), _b)
    );
  }, {});
};
var serializeAws_restJson1SecurityGroupIdList = function (input, context) {
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
var serializeAws_restJson1StageVariablesMap = function (input, context) {
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
var serializeAws_restJson1SubnetIdList = function (input, context) {
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
var serializeAws_restJson1Tags = function (input, context) {
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
var serializeAws_restJson1TemplateMap = function (input, context) {
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
var serializeAws_restJson1TlsConfigInput = function (input, context) {
  return __assign(
    {},
    input.ServerNameToVerify !== undefined &&
      input.ServerNameToVerify !== null && { serverNameToVerify: input.ServerNameToVerify }
  );
};
var deserializeAws_restJson1__listOf__string = function (output, context) {
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
var deserializeAws_restJson1__listOfApi = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Api(entry, context);
    });
};
var deserializeAws_restJson1__listOfApiMapping = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiMapping(entry, context);
    });
};
var deserializeAws_restJson1__listOfAuthorizer = function (output, context) {
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
var deserializeAws_restJson1__listOfDeployment = function (output, context) {
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
var deserializeAws_restJson1__listOfDomainName = function (output, context) {
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
var deserializeAws_restJson1__listOfIntegration = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Integration(entry, context);
    });
};
var deserializeAws_restJson1__listOfIntegrationResponse = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1IntegrationResponse(entry, context);
    });
};
var deserializeAws_restJson1__listOfModel = function (output, context) {
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
var deserializeAws_restJson1__listOfRoute = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Route(entry, context);
    });
};
var deserializeAws_restJson1__listOfRouteResponse = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RouteResponse(entry, context);
    });
};
var deserializeAws_restJson1__listOfStage = function (output, context) {
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
var deserializeAws_restJson1__listOfVpcLink = function (output, context) {
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
var deserializeAws_restJson1AccessLogSettings = function (output, context) {
  return {
    DestinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
    Format: output.format !== undefined && output.format !== null ? output.format : undefined,
  };
};
var deserializeAws_restJson1Api = function (output, context) {
  return {
    ApiEndpoint: output.apiEndpoint !== undefined && output.apiEndpoint !== null ? output.apiEndpoint : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiKeySelectionExpression:
      output.apiKeySelectionExpression !== undefined && output.apiKeySelectionExpression !== null
        ? output.apiKeySelectionExpression
        : undefined,
    CorsConfiguration:
      output.corsConfiguration !== undefined && output.corsConfiguration !== null
        ? deserializeAws_restJson1Cors(output.corsConfiguration, context)
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    DisableExecuteApiEndpoint:
      output.disableExecuteApiEndpoint !== undefined && output.disableExecuteApiEndpoint !== null
        ? output.disableExecuteApiEndpoint
        : undefined,
    DisableSchemaValidation:
      output.disableSchemaValidation !== undefined && output.disableSchemaValidation !== null
        ? output.disableSchemaValidation
        : undefined,
    ImportInfo:
      output.importInfo !== undefined && output.importInfo !== null
        ? deserializeAws_restJson1__listOf__string(output.importInfo, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    ProtocolType: output.protocolType !== undefined && output.protocolType !== null ? output.protocolType : undefined,
    RouteSelectionExpression:
      output.routeSelectionExpression !== undefined && output.routeSelectionExpression !== null
        ? output.routeSelectionExpression
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    Version: output.version !== undefined && output.version !== null ? output.version : undefined,
    Warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_restJson1__listOf__string(output.warnings, context)
        : undefined,
  };
};
var deserializeAws_restJson1ApiMapping = function (output, context) {
  return {
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiMappingId: output.apiMappingId !== undefined && output.apiMappingId !== null ? output.apiMappingId : undefined,
    ApiMappingKey:
      output.apiMappingKey !== undefined && output.apiMappingKey !== null ? output.apiMappingKey : undefined,
    Stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
var deserializeAws_restJson1AuthorizationScopes = function (output, context) {
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
var deserializeAws_restJson1Authorizer = function (output, context) {
  return {
    AuthorizerCredentialsArn:
      output.authorizerCredentialsArn !== undefined && output.authorizerCredentialsArn !== null
        ? output.authorizerCredentialsArn
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    AuthorizerPayloadFormatVersion:
      output.authorizerPayloadFormatVersion !== undefined && output.authorizerPayloadFormatVersion !== null
        ? output.authorizerPayloadFormatVersion
        : undefined,
    AuthorizerResultTtlInSeconds:
      output.authorizerResultTtlInSeconds !== undefined && output.authorizerResultTtlInSeconds !== null
        ? output.authorizerResultTtlInSeconds
        : undefined,
    AuthorizerType:
      output.authorizerType !== undefined && output.authorizerType !== null ? output.authorizerType : undefined,
    AuthorizerUri:
      output.authorizerUri !== undefined && output.authorizerUri !== null ? output.authorizerUri : undefined,
    EnableSimpleResponses:
      output.enableSimpleResponses !== undefined && output.enableSimpleResponses !== null
        ? output.enableSimpleResponses
        : undefined,
    IdentitySource:
      output.identitySource !== undefined && output.identitySource !== null
        ? deserializeAws_restJson1IdentitySourceList(output.identitySource, context)
        : undefined,
    IdentityValidationExpression:
      output.identityValidationExpression !== undefined && output.identityValidationExpression !== null
        ? output.identityValidationExpression
        : undefined,
    JwtConfiguration:
      output.jwtConfiguration !== undefined && output.jwtConfiguration !== null
        ? deserializeAws_restJson1JWTConfiguration(output.jwtConfiguration, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1Cors = function (output, context) {
  return {
    AllowCredentials:
      output.allowCredentials !== undefined && output.allowCredentials !== null ? output.allowCredentials : undefined,
    AllowHeaders:
      output.allowHeaders !== undefined && output.allowHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.allowHeaders, context)
        : undefined,
    AllowMethods:
      output.allowMethods !== undefined && output.allowMethods !== null
        ? deserializeAws_restJson1CorsMethodList(output.allowMethods, context)
        : undefined,
    AllowOrigins:
      output.allowOrigins !== undefined && output.allowOrigins !== null
        ? deserializeAws_restJson1CorsOriginList(output.allowOrigins, context)
        : undefined,
    ExposeHeaders:
      output.exposeHeaders !== undefined && output.exposeHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.exposeHeaders, context)
        : undefined,
    MaxAge: output.maxAge !== undefined && output.maxAge !== null ? output.maxAge : undefined,
  };
};
var deserializeAws_restJson1CorsHeaderList = function (output, context) {
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
var deserializeAws_restJson1CorsMethodList = function (output, context) {
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
var deserializeAws_restJson1CorsOriginList = function (output, context) {
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
var deserializeAws_restJson1Deployment = function (output, context) {
  return {
    AutoDeployed: output.autoDeployed !== undefined && output.autoDeployed !== null ? output.autoDeployed : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    DeploymentStatus:
      output.deploymentStatus !== undefined && output.deploymentStatus !== null ? output.deploymentStatus : undefined,
    DeploymentStatusMessage:
      output.deploymentStatusMessage !== undefined && output.deploymentStatusMessage !== null
        ? output.deploymentStatusMessage
        : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
  };
};
var deserializeAws_restJson1DomainName = function (output, context) {
  return {
    ApiMappingSelectionExpression:
      output.apiMappingSelectionExpression !== undefined && output.apiMappingSelectionExpression !== null
        ? output.apiMappingSelectionExpression
        : undefined,
    DomainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    DomainNameConfigurations:
      output.domainNameConfigurations !== undefined && output.domainNameConfigurations !== null
        ? deserializeAws_restJson1DomainNameConfigurations(output.domainNameConfigurations, context)
        : undefined,
    MutualTlsAuthentication:
      output.mutualTlsAuthentication !== undefined && output.mutualTlsAuthentication !== null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  };
};
var deserializeAws_restJson1DomainNameConfiguration = function (output, context) {
  return {
    ApiGatewayDomainName:
      output.apiGatewayDomainName !== undefined && output.apiGatewayDomainName !== null
        ? output.apiGatewayDomainName
        : undefined,
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    CertificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    CertificateUploadDate:
      output.certificateUploadDate !== undefined && output.certificateUploadDate !== null
        ? new Date(output.certificateUploadDate)
        : undefined,
    DomainNameStatus:
      output.domainNameStatus !== undefined && output.domainNameStatus !== null ? output.domainNameStatus : undefined,
    DomainNameStatusMessage:
      output.domainNameStatusMessage !== undefined && output.domainNameStatusMessage !== null
        ? output.domainNameStatusMessage
        : undefined,
    EndpointType: output.endpointType !== undefined && output.endpointType !== null ? output.endpointType : undefined,
    HostedZoneId: output.hostedZoneId !== undefined && output.hostedZoneId !== null ? output.hostedZoneId : undefined,
    SecurityPolicy:
      output.securityPolicy !== undefined && output.securityPolicy !== null ? output.securityPolicy : undefined,
  };
};
var deserializeAws_restJson1DomainNameConfigurations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};
var deserializeAws_restJson1IdentitySourceList = function (output, context) {
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
var deserializeAws_restJson1Integration = function (output, context) {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ConnectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    ConnectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    CredentialsArn:
      output.credentialsArn !== undefined && output.credentialsArn !== null ? output.credentialsArn : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    IntegrationId:
      output.integrationId !== undefined && output.integrationId !== null ? output.integrationId : undefined,
    IntegrationMethod:
      output.integrationMethod !== undefined && output.integrationMethod !== null
        ? output.integrationMethod
        : undefined,
    IntegrationResponseSelectionExpression:
      output.integrationResponseSelectionExpression !== undefined &&
      output.integrationResponseSelectionExpression !== null
        ? output.integrationResponseSelectionExpression
        : undefined,
    IntegrationSubtype:
      output.integrationSubtype !== undefined && output.integrationSubtype !== null
        ? output.integrationSubtype
        : undefined,
    IntegrationType:
      output.integrationType !== undefined && output.integrationType !== null ? output.integrationType : undefined,
    IntegrationUri:
      output.integrationUri !== undefined && output.integrationUri !== null ? output.integrationUri : undefined,
    PassthroughBehavior:
      output.passthroughBehavior !== undefined && output.passthroughBehavior !== null
        ? output.passthroughBehavior
        : undefined,
    PayloadFormatVersion:
      output.payloadFormatVersion !== undefined && output.payloadFormatVersion !== null
        ? output.payloadFormatVersion
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.requestParameters, context)
        : undefined,
    RequestTemplates:
      output.requestTemplates !== undefined && output.requestTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.requestTemplates, context)
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1ResponseParameters(output.responseParameters, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
    TimeoutInMillis:
      output.timeoutInMillis !== undefined && output.timeoutInMillis !== null ? output.timeoutInMillis : undefined,
    TlsConfig:
      output.tlsConfig !== undefined && output.tlsConfig !== null
        ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context)
        : undefined,
  };
};
var deserializeAws_restJson1IntegrationParameters = function (output, context) {
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
var deserializeAws_restJson1IntegrationResponse = function (output, context) {
  return {
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    IntegrationResponseId:
      output.integrationResponseId !== undefined && output.integrationResponseId !== null
        ? output.integrationResponseId
        : undefined,
    IntegrationResponseKey:
      output.integrationResponseKey !== undefined && output.integrationResponseKey !== null
        ? output.integrationResponseKey
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.responseParameters, context)
        : undefined,
    ResponseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.responseTemplates, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
  };
};
var deserializeAws_restJson1JWTConfiguration = function (output, context) {
  return {
    Audience:
      output.audience !== undefined && output.audience !== null
        ? deserializeAws_restJson1__listOf__string(output.audience, context)
        : undefined,
    Issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
  };
};
var deserializeAws_restJson1Model = function (output, context) {
  return {
    ContentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ModelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    Schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  };
};
var deserializeAws_restJson1MutualTlsAuthentication = function (output, context) {
  return {
    TruststoreUri:
      output.truststoreUri !== undefined && output.truststoreUri !== null ? output.truststoreUri : undefined,
    TruststoreVersion:
      output.truststoreVersion !== undefined && output.truststoreVersion !== null
        ? output.truststoreVersion
        : undefined,
    TruststoreWarnings:
      output.truststoreWarnings !== undefined && output.truststoreWarnings !== null
        ? deserializeAws_restJson1__listOf__string(output.truststoreWarnings, context)
        : undefined,
  };
};
var deserializeAws_restJson1ParameterConstraints = function (output, context) {
  return {
    Required: output.required !== undefined && output.required !== null ? output.required : undefined,
  };
};
var deserializeAws_restJson1ResponseParameters = function (output, context) {
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
      ((_b = {}), (_b[key] = deserializeAws_restJson1IntegrationParameters(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1Route = function (output, context) {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    AuthorizationScopes:
      output.authorizationScopes !== undefined && output.authorizationScopes !== null
        ? deserializeAws_restJson1AuthorizationScopes(output.authorizationScopes, context)
        : undefined,
    AuthorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    OperationName:
      output.operationName !== undefined && output.operationName !== null ? output.operationName : undefined,
    RequestModels:
      output.requestModels !== undefined && output.requestModels !== null
        ? deserializeAws_restJson1RouteModels(output.requestModels, context)
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.requestParameters, context)
        : undefined,
    RouteId: output.routeId !== undefined && output.routeId !== null ? output.routeId : undefined,
    RouteKey: output.routeKey !== undefined && output.routeKey !== null ? output.routeKey : undefined,
    RouteResponseSelectionExpression:
      output.routeResponseSelectionExpression !== undefined && output.routeResponseSelectionExpression !== null
        ? output.routeResponseSelectionExpression
        : undefined,
    Target: output.target !== undefined && output.target !== null ? output.target : undefined,
  };
};
var deserializeAws_restJson1RouteModels = function (output, context) {
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
var deserializeAws_restJson1RouteParameters = function (output, context) {
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
      ((_b = {}), (_b[key] = deserializeAws_restJson1ParameterConstraints(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1RouteResponse = function (output, context) {
  return {
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    ResponseModels:
      output.responseModels !== undefined && output.responseModels !== null
        ? deserializeAws_restJson1RouteModels(output.responseModels, context)
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.responseParameters, context)
        : undefined,
    RouteResponseId:
      output.routeResponseId !== undefined && output.routeResponseId !== null ? output.routeResponseId : undefined,
    RouteResponseKey:
      output.routeResponseKey !== undefined && output.routeResponseKey !== null ? output.routeResponseKey : undefined,
  };
};
var deserializeAws_restJson1RouteSettings = function (output, context) {
  return {
    DataTraceEnabled:
      output.dataTraceEnabled !== undefined && output.dataTraceEnabled !== null ? output.dataTraceEnabled : undefined,
    DetailedMetricsEnabled:
      output.detailedMetricsEnabled !== undefined && output.detailedMetricsEnabled !== null
        ? output.detailedMetricsEnabled
        : undefined,
    LoggingLevel: output.loggingLevel !== undefined && output.loggingLevel !== null ? output.loggingLevel : undefined,
    ThrottlingBurstLimit:
      output.throttlingBurstLimit !== undefined && output.throttlingBurstLimit !== null
        ? output.throttlingBurstLimit
        : undefined,
    ThrottlingRateLimit:
      output.throttlingRateLimit !== undefined && output.throttlingRateLimit !== null
        ? output.throttlingRateLimit
        : undefined,
  };
};
var deserializeAws_restJson1RouteSettingsMap = function (output, context) {
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
      ((_b = {}), (_b[key] = deserializeAws_restJson1RouteSettings(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1SecurityGroupIdList = function (output, context) {
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
var deserializeAws_restJson1Stage = function (output, context) {
  return {
    AccessLogSettings:
      output.accessLogSettings !== undefined && output.accessLogSettings !== null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    AutoDeploy: output.autoDeploy !== undefined && output.autoDeploy !== null ? output.autoDeploy : undefined,
    ClientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DefaultRouteSettings:
      output.defaultRouteSettings !== undefined && output.defaultRouteSettings !== null
        ? deserializeAws_restJson1RouteSettings(output.defaultRouteSettings, context)
        : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    LastDeploymentStatusMessage:
      output.lastDeploymentStatusMessage !== undefined && output.lastDeploymentStatusMessage !== null
        ? output.lastDeploymentStatusMessage
        : undefined,
    LastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(output.lastUpdatedDate)
        : undefined,
    RouteSettings:
      output.routeSettings !== undefined && output.routeSettings !== null
        ? deserializeAws_restJson1RouteSettingsMap(output.routeSettings, context)
        : undefined,
    StageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    StageVariables:
      output.stageVariables !== undefined && output.stageVariables !== null
        ? deserializeAws_restJson1StageVariablesMap(output.stageVariables, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  };
};
var deserializeAws_restJson1StageVariablesMap = function (output, context) {
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
var deserializeAws_restJson1SubnetIdList = function (output, context) {
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
var deserializeAws_restJson1Tags = function (output, context) {
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
var deserializeAws_restJson1TemplateMap = function (output, context) {
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
var deserializeAws_restJson1TlsConfig = function (output, context) {
  return {
    ServerNameToVerify:
      output.serverNameToVerify !== undefined && output.serverNameToVerify !== null
        ? output.serverNameToVerify
        : undefined,
  };
};
var deserializeAws_restJson1VpcLink = function (output, context) {
  return {
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    SecurityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    SubnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    VpcLinkId: output.vpcLinkId !== undefined && output.vpcLinkId !== null ? output.vpcLinkId : undefined,
    VpcLinkStatus:
      output.vpcLinkStatus !== undefined && output.vpcLinkStatus !== null ? output.vpcLinkStatus : undefined,
    VpcLinkStatusMessage:
      output.vpcLinkStatusMessage !== undefined && output.vpcLinkStatusMessage !== null
        ? output.vpcLinkStatusMessage
        : undefined,
    VpcLinkVersion:
      output.vpcLinkVersion !== undefined && output.vpcLinkVersion !== null ? output.vpcLinkVersion : undefined,
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
