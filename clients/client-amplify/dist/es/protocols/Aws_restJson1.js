import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateAppCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps";
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
                                              __assign(
                                                __assign(
                                                  {},
                                                  input.accessToken !== undefined &&
                                                    input.accessToken !== null && { accessToken: input.accessToken }
                                                ),
                                                input.autoBranchCreationConfig !== undefined &&
                                                  input.autoBranchCreationConfig !== null && {
                                                    autoBranchCreationConfig:
                                                      serializeAws_restJson1AutoBranchCreationConfig(
                                                        input.autoBranchCreationConfig,
                                                        context
                                                      ),
                                                  }
                                              ),
                                              input.autoBranchCreationPatterns !== undefined &&
                                                input.autoBranchCreationPatterns !== null && {
                                                  autoBranchCreationPatterns:
                                                    serializeAws_restJson1AutoBranchCreationPatterns(
                                                      input.autoBranchCreationPatterns,
                                                      context
                                                    ),
                                                }
                                            ),
                                            input.basicAuthCredentials !== undefined &&
                                              input.basicAuthCredentials !== null && {
                                                basicAuthCredentials: input.basicAuthCredentials,
                                              }
                                          ),
                                          input.buildSpec !== undefined &&
                                            input.buildSpec !== null && { buildSpec: input.buildSpec }
                                        ),
                                        input.customHeaders !== undefined &&
                                          input.customHeaders !== null && { customHeaders: input.customHeaders }
                                      ),
                                      input.customRules !== undefined &&
                                        input.customRules !== null && {
                                          customRules: serializeAws_restJson1CustomRules(input.customRules, context),
                                        }
                                    ),
                                    input.description !== undefined &&
                                      input.description !== null && { description: input.description }
                                  ),
                                  input.enableAutoBranchCreation !== undefined &&
                                    input.enableAutoBranchCreation !== null && {
                                      enableAutoBranchCreation: input.enableAutoBranchCreation,
                                    }
                                ),
                                input.enableBasicAuth !== undefined &&
                                  input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }
                              ),
                              input.enableBranchAutoBuild !== undefined &&
                                input.enableBranchAutoBuild !== null && {
                                  enableBranchAutoBuild: input.enableBranchAutoBuild,
                                }
                            ),
                            input.enableBranchAutoDeletion !== undefined &&
                              input.enableBranchAutoDeletion !== null && {
                                enableBranchAutoDeletion: input.enableBranchAutoDeletion,
                              }
                          ),
                          input.environmentVariables !== undefined &&
                            input.environmentVariables !== null && {
                              environmentVariables: serializeAws_restJson1EnvironmentVariables(
                                input.environmentVariables,
                                context
                              ),
                            }
                        ),
                        input.iamServiceRoleArn !== undefined &&
                          input.iamServiceRoleArn !== null && { iamServiceRoleArn: input.iamServiceRoleArn }
                      ),
                      input.name !== undefined && input.name !== null && { name: input.name }
                    ),
                    input.oauthToken !== undefined && input.oauthToken !== null && { oauthToken: input.oauthToken }
                  ),
                  input.platform !== undefined && input.platform !== null && { platform: input.platform }
                ),
                input.repository !== undefined && input.repository !== null && { repository: input.repository }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
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
export var serializeAws_restJson1CreateBackendEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/backendenvironments";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.deploymentArtifacts !== undefined &&
                    input.deploymentArtifacts !== null && { deploymentArtifacts: input.deploymentArtifacts }
                ),
                input.environmentName !== undefined &&
                  input.environmentName !== null && { environmentName: input.environmentName }
              ),
              input.stackName !== undefined && input.stackName !== null && { stackName: input.stackName }
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
export var serializeAws_restJson1CreateBranchCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/branches";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
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
                                              input.backendEnvironmentArn !== undefined &&
                                                input.backendEnvironmentArn !== null && {
                                                  backendEnvironmentArn: input.backendEnvironmentArn,
                                                }
                                            ),
                                            input.basicAuthCredentials !== undefined &&
                                              input.basicAuthCredentials !== null && {
                                                basicAuthCredentials: input.basicAuthCredentials,
                                              }
                                          ),
                                          input.branchName !== undefined &&
                                            input.branchName !== null && { branchName: input.branchName }
                                        ),
                                        input.buildSpec !== undefined &&
                                          input.buildSpec !== null && { buildSpec: input.buildSpec }
                                      ),
                                      input.description !== undefined &&
                                        input.description !== null && { description: input.description }
                                    ),
                                    input.displayName !== undefined &&
                                      input.displayName !== null && { displayName: input.displayName }
                                  ),
                                  input.enableAutoBuild !== undefined &&
                                    input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }
                                ),
                                input.enableBasicAuth !== undefined &&
                                  input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }
                              ),
                              input.enableNotification !== undefined &&
                                input.enableNotification !== null && { enableNotification: input.enableNotification }
                            ),
                            input.enablePerformanceMode !== undefined &&
                              input.enablePerformanceMode !== null && {
                                enablePerformanceMode: input.enablePerformanceMode,
                              }
                          ),
                          input.enablePullRequestPreview !== undefined &&
                            input.enablePullRequestPreview !== null && {
                              enablePullRequestPreview: input.enablePullRequestPreview,
                            }
                        ),
                        input.environmentVariables !== undefined &&
                          input.environmentVariables !== null && {
                            environmentVariables: serializeAws_restJson1EnvironmentVariables(
                              input.environmentVariables,
                              context
                            ),
                          }
                      ),
                      input.framework !== undefined && input.framework !== null && { framework: input.framework }
                    ),
                    input.pullRequestEnvironmentName !== undefined &&
                      input.pullRequestEnvironmentName !== null && {
                        pullRequestEnvironmentName: input.pullRequestEnvironmentName,
                      }
                  ),
                  input.stage !== undefined && input.stage !== null && { stage: input.stage }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
              ),
              input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }
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
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/branches/{branchName}/deployments";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.fileMap !== undefined &&
                input.fileMap !== null && { fileMap: serializeAws_restJson1FileMap(input.fileMap, context) }
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
export var serializeAws_restJson1CreateDomainAssociationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/domains";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.autoSubDomainCreationPatterns !== undefined &&
                        input.autoSubDomainCreationPatterns !== null && {
                          autoSubDomainCreationPatterns: serializeAws_restJson1AutoSubDomainCreationPatterns(
                            input.autoSubDomainCreationPatterns,
                            context
                          ),
                        }
                    ),
                    input.autoSubDomainIAMRole !== undefined &&
                      input.autoSubDomainIAMRole !== null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }
                  ),
                  input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }
                ),
                input.enableAutoSubDomain !== undefined &&
                  input.enableAutoSubDomain !== null && { enableAutoSubDomain: input.enableAutoSubDomain }
              ),
              input.subDomainSettings !== undefined &&
                input.subDomainSettings !== null && {
                  subDomainSettings: serializeAws_restJson1SubDomainSettings(input.subDomainSettings, context),
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
export var serializeAws_restJson1CreateWebhookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/webhooks";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }
              ),
              input.description !== undefined && input.description !== null && { description: input.description }
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
export var serializeAws_restJson1DeleteAppCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
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
export var serializeAws_restJson1DeleteBackendEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.environmentName !== undefined) {
            labelValue = input.environmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: environmentName.");
            }
            resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: environmentName.");
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
export var serializeAws_restJson1DeleteBranchCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
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
export var serializeAws_restJson1DeleteDomainAssociationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/domains/{domainName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
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
export var serializeAws_restJson1DeleteJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          if (input.jobId !== undefined) {
            labelValue = input.jobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: jobId.");
            }
            resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: jobId.");
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
export var serializeAws_restJson1DeleteWebhookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/webhooks/{webhookId}";
          if (input.webhookId !== undefined) {
            labelValue = input.webhookId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: webhookId.");
            }
            resolvedPath = resolvedPath.replace("{webhookId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: webhookId.");
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
export var serializeAws_restJson1GenerateAccessLogsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/accesslogs";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }
                ),
                input.endTime !== undefined &&
                  input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }
              ),
              input.startTime !== undefined &&
                input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }
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
export var serializeAws_restJson1GetAppCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
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
export var serializeAws_restJson1GetArtifactUrlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/artifacts/{artifactId}";
          if (input.artifactId !== undefined) {
            labelValue = input.artifactId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: artifactId.");
            }
            resolvedPath = resolvedPath.replace("{artifactId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: artifactId.");
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
export var serializeAws_restJson1GetBackendEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.environmentName !== undefined) {
            labelValue = input.environmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: environmentName.");
            }
            resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: environmentName.");
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
export var serializeAws_restJson1GetBranchCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
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
export var serializeAws_restJson1GetDomainAssociationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/domains/{domainName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
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
export var serializeAws_restJson1GetJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          if (input.jobId !== undefined) {
            labelValue = input.jobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: jobId.");
            }
            resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: jobId.");
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
export var serializeAws_restJson1GetWebhookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/webhooks/{webhookId}";
          if (input.webhookId !== undefined) {
            labelValue = input.webhookId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: webhookId.");
            }
            resolvedPath = resolvedPath.replace("{webhookId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: webhookId.");
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
export var serializeAws_restJson1ListAppsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListArtifactsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          if (input.jobId !== undefined) {
            labelValue = input.jobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: jobId.");
            }
            resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: jobId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListBackendEnvironmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/backendenvironments";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          query = __assign(
            __assign(
              __assign({}, input.environmentName !== undefined && { environmentName: input.environmentName }),
              input.nextToken !== undefined && { nextToken: input.nextToken }
            ),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListBranchesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListDomainAssociationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/domains";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
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
export var serializeAws_restJson1ListWebhooksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/webhooks";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
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
export var serializeAws_restJson1StartDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/branches/{branchName}/deployments/start";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          body = JSON.stringify(
            __assign(
              __assign({}, input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
              input.sourceUrl !== undefined && input.sourceUrl !== null && { sourceUrl: input.sourceUrl }
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
export var serializeAws_restJson1StartJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }
                      ),
                      input.commitMessage !== undefined &&
                        input.commitMessage !== null && { commitMessage: input.commitMessage }
                    ),
                    input.commitTime !== undefined &&
                      input.commitTime !== null && { commitTime: Math.round(input.commitTime.getTime() / 1000) }
                  ),
                  input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }
                ),
                input.jobReason !== undefined && input.jobReason !== null && { jobReason: input.jobReason }
              ),
              input.jobType !== undefined && input.jobType !== null && { jobType: input.jobType }
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
export var serializeAws_restJson1StopJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
          }
          if (input.jobId !== undefined) {
            labelValue = input.jobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: jobId.");
            }
            resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: jobId.");
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
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
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
export var serializeAws_restJson1UpdateAppCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
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
                                              __assign(
                                                {},
                                                input.accessToken !== undefined &&
                                                  input.accessToken !== null && { accessToken: input.accessToken }
                                              ),
                                              input.autoBranchCreationConfig !== undefined &&
                                                input.autoBranchCreationConfig !== null && {
                                                  autoBranchCreationConfig:
                                                    serializeAws_restJson1AutoBranchCreationConfig(
                                                      input.autoBranchCreationConfig,
                                                      context
                                                    ),
                                                }
                                            ),
                                            input.autoBranchCreationPatterns !== undefined &&
                                              input.autoBranchCreationPatterns !== null && {
                                                autoBranchCreationPatterns:
                                                  serializeAws_restJson1AutoBranchCreationPatterns(
                                                    input.autoBranchCreationPatterns,
                                                    context
                                                  ),
                                              }
                                          ),
                                          input.basicAuthCredentials !== undefined &&
                                            input.basicAuthCredentials !== null && {
                                              basicAuthCredentials: input.basicAuthCredentials,
                                            }
                                        ),
                                        input.buildSpec !== undefined &&
                                          input.buildSpec !== null && { buildSpec: input.buildSpec }
                                      ),
                                      input.customHeaders !== undefined &&
                                        input.customHeaders !== null && { customHeaders: input.customHeaders }
                                    ),
                                    input.customRules !== undefined &&
                                      input.customRules !== null && {
                                        customRules: serializeAws_restJson1CustomRules(input.customRules, context),
                                      }
                                  ),
                                  input.description !== undefined &&
                                    input.description !== null && { description: input.description }
                                ),
                                input.enableAutoBranchCreation !== undefined &&
                                  input.enableAutoBranchCreation !== null && {
                                    enableAutoBranchCreation: input.enableAutoBranchCreation,
                                  }
                              ),
                              input.enableBasicAuth !== undefined &&
                                input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }
                            ),
                            input.enableBranchAutoBuild !== undefined &&
                              input.enableBranchAutoBuild !== null && {
                                enableBranchAutoBuild: input.enableBranchAutoBuild,
                              }
                          ),
                          input.enableBranchAutoDeletion !== undefined &&
                            input.enableBranchAutoDeletion !== null && {
                              enableBranchAutoDeletion: input.enableBranchAutoDeletion,
                            }
                        ),
                        input.environmentVariables !== undefined &&
                          input.environmentVariables !== null && {
                            environmentVariables: serializeAws_restJson1EnvironmentVariables(
                              input.environmentVariables,
                              context
                            ),
                          }
                      ),
                      input.iamServiceRoleArn !== undefined &&
                        input.iamServiceRoleArn !== null && { iamServiceRoleArn: input.iamServiceRoleArn }
                    ),
                    input.name !== undefined && input.name !== null && { name: input.name }
                  ),
                  input.oauthToken !== undefined && input.oauthToken !== null && { oauthToken: input.oauthToken }
                ),
                input.platform !== undefined && input.platform !== null && { platform: input.platform }
              ),
              input.repository !== undefined && input.repository !== null && { repository: input.repository }
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
export var serializeAws_restJson1UpdateBranchCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/branches/{branchName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
          if (input.branchName !== undefined) {
            labelValue = input.branchName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: branchName.");
            }
            resolvedPath = resolvedPath.replace("{branchName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: branchName.");
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
                                          {},
                                          input.backendEnvironmentArn !== undefined &&
                                            input.backendEnvironmentArn !== null && {
                                              backendEnvironmentArn: input.backendEnvironmentArn,
                                            }
                                        ),
                                        input.basicAuthCredentials !== undefined &&
                                          input.basicAuthCredentials !== null && {
                                            basicAuthCredentials: input.basicAuthCredentials,
                                          }
                                      ),
                                      input.buildSpec !== undefined &&
                                        input.buildSpec !== null && { buildSpec: input.buildSpec }
                                    ),
                                    input.description !== undefined &&
                                      input.description !== null && { description: input.description }
                                  ),
                                  input.displayName !== undefined &&
                                    input.displayName !== null && { displayName: input.displayName }
                                ),
                                input.enableAutoBuild !== undefined &&
                                  input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }
                              ),
                              input.enableBasicAuth !== undefined &&
                                input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }
                            ),
                            input.enableNotification !== undefined &&
                              input.enableNotification !== null && { enableNotification: input.enableNotification }
                          ),
                          input.enablePerformanceMode !== undefined &&
                            input.enablePerformanceMode !== null && {
                              enablePerformanceMode: input.enablePerformanceMode,
                            }
                        ),
                        input.enablePullRequestPreview !== undefined &&
                          input.enablePullRequestPreview !== null && {
                            enablePullRequestPreview: input.enablePullRequestPreview,
                          }
                      ),
                      input.environmentVariables !== undefined &&
                        input.environmentVariables !== null && {
                          environmentVariables: serializeAws_restJson1EnvironmentVariables(
                            input.environmentVariables,
                            context
                          ),
                        }
                    ),
                    input.framework !== undefined && input.framework !== null && { framework: input.framework }
                  ),
                  input.pullRequestEnvironmentName !== undefined &&
                    input.pullRequestEnvironmentName !== null && {
                      pullRequestEnvironmentName: input.pullRequestEnvironmentName,
                    }
                ),
                input.stage !== undefined && input.stage !== null && { stage: input.stage }
              ),
              input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }
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
export var serializeAws_restJson1UpdateDomainAssociationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/apps/{appId}/domains/{domainName}";
          if (input.appId !== undefined) {
            labelValue = input.appId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: appId.");
            }
            resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: appId.");
          }
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
                __assign(
                  __assign(
                    {},
                    input.autoSubDomainCreationPatterns !== undefined &&
                      input.autoSubDomainCreationPatterns !== null && {
                        autoSubDomainCreationPatterns: serializeAws_restJson1AutoSubDomainCreationPatterns(
                          input.autoSubDomainCreationPatterns,
                          context
                        ),
                      }
                  ),
                  input.autoSubDomainIAMRole !== undefined &&
                    input.autoSubDomainIAMRole !== null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }
                ),
                input.enableAutoSubDomain !== undefined &&
                  input.enableAutoSubDomain !== null && { enableAutoSubDomain: input.enableAutoSubDomain }
              ),
              input.subDomainSettings !== undefined &&
                input.subDomainSettings !== null && {
                  subDomainSettings: serializeAws_restJson1SubDomainSettings(input.subDomainSettings, context),
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
export var serializeAws_restJson1UpdateWebhookCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/webhooks/{webhookId}";
          if (input.webhookId !== undefined) {
            labelValue = input.webhookId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: webhookId.");
            }
            resolvedPath = resolvedPath.replace("{webhookId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: webhookId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }
              ),
              input.description !== undefined && input.description !== null && { description: input.description }
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
export var deserializeAws_restJson1CreateAppCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateAppCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            app: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.app !== undefined && data.app !== null) {
            contents.app = deserializeAws_restJson1App(data.app, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAppCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBackendEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackendEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            backendEnvironment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
            contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackendEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBranchCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBranchCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            branch: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.branch !== undefined && data.branch !== null) {
            contents.branch = deserializeAws_restJson1Branch(data.branch, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBranchCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            fileUploadUrls: undefined,
            jobId: undefined,
            zipUploadUrl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.fileUploadUrls !== undefined && data.fileUploadUrls !== null) {
            contents.fileUploadUrls = deserializeAws_restJson1FileUploadUrls(data.fileUploadUrls, context);
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.jobId = data.jobId;
          }
          if (data.zipUploadUrl !== undefined && data.zipUploadUrl !== null) {
            contents.zipUploadUrl = data.zipUploadUrl;
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDomainAssociationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDomainAssociationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            domainAssociation: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
            contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDomainAssociationCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateWebhookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateWebhookCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            webhook: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.webhook !== undefined && data.webhook !== null) {
            contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateWebhookCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 10];
            case "UnauthorizedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteAppCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAppCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            app: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.app !== undefined && data.app !== null) {
            contents.app = deserializeAws_restJson1App(data.app, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteAppCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackendEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackendEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            backendEnvironment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
            contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBackendEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBranchCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBranchCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            branch: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.branch !== undefined && data.branch !== null) {
            contents.branch = deserializeAws_restJson1Branch(data.branch, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBranchCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDomainAssociationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDomainAssociationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            domainAssociation: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
            contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteDomainAssociationCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobSummary: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummary !== undefined && data.jobSummary !== null) {
            contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteWebhookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteWebhookCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            webhook: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.webhook !== undefined && data.webhook !== null) {
            contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteWebhookCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GenerateAccessLogsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GenerateAccessLogsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            logUrl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.logUrl !== undefined && data.logUrl !== null) {
            contents.logUrl = data.logUrl;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GenerateAccessLogsCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetAppCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAppCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            app: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.app !== undefined && data.app !== null) {
            contents.app = deserializeAws_restJson1App(data.app, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAppCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetArtifactUrlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetArtifactUrlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            artifactId: undefined,
            artifactUrl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.artifactId !== undefined && data.artifactId !== null) {
            contents.artifactId = data.artifactId;
          }
          if (data.artifactUrl !== undefined && data.artifactUrl !== null) {
            contents.artifactUrl = data.artifactUrl;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetArtifactUrlCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            backendEnvironment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
            contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBranchCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBranchCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            branch: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.branch !== undefined && data.branch !== null) {
            contents.branch = deserializeAws_restJson1Branch(data.branch, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBranchCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDomainAssociationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDomainAssociationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            domainAssociation: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
            contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDomainAssociationCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            job: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.job !== undefined && data.job !== null) {
            contents.job = deserializeAws_restJson1Job(data.job, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetWebhookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetWebhookCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            webhook: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.webhook !== undefined && data.webhook !== null) {
            contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetWebhookCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListAppsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAppsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            apps: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.apps !== undefined && data.apps !== null) {
            contents.apps = deserializeAws_restJson1Apps(data.apps, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAppsCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListArtifactsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListArtifactsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            artifacts: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.artifacts !== undefined && data.artifacts !== null) {
            contents.artifacts = deserializeAws_restJson1Artifacts(data.artifacts, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListArtifactsCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackendEnvironmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackendEnvironmentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            backendEnvironments: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.backendEnvironments !== undefined && data.backendEnvironments !== null) {
            contents.backendEnvironments = deserializeAws_restJson1BackendEnvironments(
              data.backendEnvironments,
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
var deserializeAws_restJson1ListBackendEnvironmentsCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBranchesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBranchesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            branches: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.branches !== undefined && data.branches !== null) {
            contents.branches = deserializeAws_restJson1Branches(data.branches, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBranchesCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDomainAssociationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListDomainAssociationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            domainAssociations: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.domainAssociations !== undefined && data.domainAssociations !== null) {
            contents.domainAssociations = deserializeAws_restJson1DomainAssociations(data.domainAssociations, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListDomainAssociationsCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "UnauthorizedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
            jobSummaries: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummaries !== undefined && data.jobSummaries !== null) {
            contents.jobSummaries = deserializeAws_restJson1JobSummaries(data.jobSummaries, context);
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
            contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListWebhooksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListWebhooksCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            webhooks: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.webhooks !== undefined && data.webhooks !== null) {
            contents.webhooks = deserializeAws_restJson1Webhooks(data.webhooks, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListWebhooksCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobSummary: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummary !== undefined && data.jobSummary !== null) {
            contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobSummary: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummary !== undefined && data.jobSummary !== null) {
            contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StopJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            jobSummary: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobSummary !== undefined && data.jobSummary !== null) {
            contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StopJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#LimitExceededException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateAppCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAppCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            app: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.app !== undefined && data.app !== null) {
            contents.app = deserializeAws_restJson1App(data.app, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAppCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 6];
            case "UnauthorizedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBranchCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBranchCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            branch: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.branch !== undefined && data.branch !== null) {
            contents.branch = deserializeAws_restJson1Branch(data.branch, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBranchCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateDomainAssociationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDomainAssociationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            domainAssociation: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
            contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDomainAssociationCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateWebhookCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateWebhookCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            webhook: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.webhook !== undefined && data.webhook !== null) {
            contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateWebhookCommandError = function (output, context) {
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
            case "com.amazonaws.amplify#BadRequestException":
              return [3 /*break*/, 2];
            case "DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplify#DependentServiceFailureException":
              return [3 /*break*/, 4];
            case "InternalFailureException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplify#InternalFailureException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplify#NotFoundException":
              return [3 /*break*/, 8];
            case "UnauthorizedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.amplify#UnauthorizedException":
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
          return [4 /*yield*/, deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1DependentServiceFailureExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DependentServiceFailureException",
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
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalFailureException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "LimitExceededException",
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
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
      }
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
var serializeAws_restJson1AutoBranchCreationConfig = function (input, context) {
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
                      {},
                      input.basicAuthCredentials !== undefined &&
                        input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }
                    ),
                    input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }
                  ),
                  input.enableAutoBuild !== undefined &&
                    input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }
                ),
                input.enableBasicAuth !== undefined &&
                  input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }
              ),
              input.enablePerformanceMode !== undefined &&
                input.enablePerformanceMode !== null && { enablePerformanceMode: input.enablePerformanceMode }
            ),
            input.enablePullRequestPreview !== undefined &&
              input.enablePullRequestPreview !== null && { enablePullRequestPreview: input.enablePullRequestPreview }
          ),
          input.environmentVariables !== undefined &&
            input.environmentVariables !== null && {
              environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
            }
        ),
        input.framework !== undefined && input.framework !== null && { framework: input.framework }
      ),
      input.pullRequestEnvironmentName !== undefined &&
        input.pullRequestEnvironmentName !== null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }
    ),
    input.stage !== undefined && input.stage !== null && { stage: input.stage }
  );
};
var serializeAws_restJson1AutoBranchCreationPatterns = function (input, context) {
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
var serializeAws_restJson1AutoSubDomainCreationPatterns = function (input, context) {
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
var serializeAws_restJson1CustomRule = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.condition !== undefined && input.condition !== null && { condition: input.condition }),
        input.source !== undefined && input.source !== null && { source: input.source }
      ),
      input.status !== undefined && input.status !== null && { status: input.status }
    ),
    input.target !== undefined && input.target !== null && { target: input.target }
  );
};
var serializeAws_restJson1CustomRules = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CustomRule(entry, context);
    });
};
var serializeAws_restJson1EnvironmentVariables = function (input, context) {
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
var serializeAws_restJson1FileMap = function (input, context) {
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
var serializeAws_restJson1SubDomainSetting = function (input, context) {
  return __assign(
    __assign({}, input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }
  );
};
var serializeAws_restJson1SubDomainSettings = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SubDomainSetting(entry, context);
    });
};
var serializeAws_restJson1TagMap = function (input, context) {
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
var deserializeAws_restJson1App = function (output, context) {
  return {
    appArn: output.appArn !== undefined && output.appArn !== null ? output.appArn : undefined,
    appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
    autoBranchCreationConfig:
      output.autoBranchCreationConfig !== undefined && output.autoBranchCreationConfig !== null
        ? deserializeAws_restJson1AutoBranchCreationConfig(output.autoBranchCreationConfig, context)
        : undefined,
    autoBranchCreationPatterns:
      output.autoBranchCreationPatterns !== undefined && output.autoBranchCreationPatterns !== null
        ? deserializeAws_restJson1AutoBranchCreationPatterns(output.autoBranchCreationPatterns, context)
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customHeaders:
      output.customHeaders !== undefined && output.customHeaders !== null ? output.customHeaders : undefined,
    customRules:
      output.customRules !== undefined && output.customRules !== null
        ? deserializeAws_restJson1CustomRules(output.customRules, context)
        : undefined,
    defaultDomain:
      output.defaultDomain !== undefined && output.defaultDomain !== null ? output.defaultDomain : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    enableAutoBranchCreation:
      output.enableAutoBranchCreation !== undefined && output.enableAutoBranchCreation !== null
        ? output.enableAutoBranchCreation
        : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enableBranchAutoBuild:
      output.enableBranchAutoBuild !== undefined && output.enableBranchAutoBuild !== null
        ? output.enableBranchAutoBuild
        : undefined,
    enableBranchAutoDeletion:
      output.enableBranchAutoDeletion !== undefined && output.enableBranchAutoDeletion !== null
        ? output.enableBranchAutoDeletion
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    iamServiceRoleArn:
      output.iamServiceRoleArn !== undefined && output.iamServiceRoleArn !== null
        ? output.iamServiceRoleArn
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
    productionBranch:
      output.productionBranch !== undefined && output.productionBranch !== null
        ? deserializeAws_restJson1ProductionBranch(output.productionBranch, context)
        : undefined,
    repository: output.repository !== undefined && output.repository !== null ? output.repository : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1Apps = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1App(entry, context);
    });
};
var deserializeAws_restJson1Artifact = function (output, context) {
  return {
    artifactFileName:
      output.artifactFileName !== undefined && output.artifactFileName !== null ? output.artifactFileName : undefined,
    artifactId: output.artifactId !== undefined && output.artifactId !== null ? output.artifactId : undefined,
  };
};
var deserializeAws_restJson1Artifacts = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Artifact(entry, context);
    });
};
var deserializeAws_restJson1AssociatedResources = function (output, context) {
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
var deserializeAws_restJson1AutoBranchCreationConfig = function (output, context) {
  return {
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null ? output.enableAutoBuild : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enablePerformanceMode:
      output.enablePerformanceMode !== undefined && output.enablePerformanceMode !== null
        ? output.enablePerformanceMode
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined && output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    framework: output.framework !== undefined && output.framework !== null ? output.framework : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined && output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
var deserializeAws_restJson1AutoBranchCreationPatterns = function (output, context) {
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
var deserializeAws_restJson1AutoSubDomainCreationPatterns = function (output, context) {
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
var deserializeAws_restJson1BackendEnvironment = function (output, context) {
  return {
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined && output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    deploymentArtifacts:
      output.deploymentArtifacts !== undefined && output.deploymentArtifacts !== null
        ? output.deploymentArtifacts
        : undefined,
    environmentName:
      output.environmentName !== undefined && output.environmentName !== null ? output.environmentName : undefined,
    stackName: output.stackName !== undefined && output.stackName !== null ? output.stackName : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1BackendEnvironments = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendEnvironment(entry, context);
    });
};
var deserializeAws_restJson1Branch = function (output, context) {
  return {
    activeJobId: output.activeJobId !== undefined && output.activeJobId !== null ? output.activeJobId : undefined,
    associatedResources:
      output.associatedResources !== undefined && output.associatedResources !== null
        ? deserializeAws_restJson1AssociatedResources(output.associatedResources, context)
        : undefined,
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined && output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    branchArn: output.branchArn !== undefined && output.branchArn !== null ? output.branchArn : undefined,
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customDomains:
      output.customDomains !== undefined && output.customDomains !== null
        ? deserializeAws_restJson1CustomDomains(output.customDomains, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationBranch:
      output.destinationBranch !== undefined && output.destinationBranch !== null
        ? output.destinationBranch
        : undefined,
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null ? output.enableAutoBuild : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enableNotification:
      output.enableNotification !== undefined && output.enableNotification !== null
        ? output.enableNotification
        : undefined,
    enablePerformanceMode:
      output.enablePerformanceMode !== undefined && output.enablePerformanceMode !== null
        ? output.enablePerformanceMode
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined && output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    framework: output.framework !== undefined && output.framework !== null ? output.framework : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined && output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    sourceBranch: output.sourceBranch !== undefined && output.sourceBranch !== null ? output.sourceBranch : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    thumbnailUrl: output.thumbnailUrl !== undefined && output.thumbnailUrl !== null ? output.thumbnailUrl : undefined,
    totalNumberOfJobs:
      output.totalNumberOfJobs !== undefined && output.totalNumberOfJobs !== null
        ? output.totalNumberOfJobs
        : undefined,
    ttl: output.ttl !== undefined && output.ttl !== null ? output.ttl : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1Branches = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Branch(entry, context);
    });
};
var deserializeAws_restJson1CustomDomains = function (output, context) {
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
var deserializeAws_restJson1CustomRule = function (output, context) {
  return {
    condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
    source: output.source !== undefined && output.source !== null ? output.source : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    target: output.target !== undefined && output.target !== null ? output.target : undefined,
  };
};
var deserializeAws_restJson1CustomRules = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CustomRule(entry, context);
    });
};
var deserializeAws_restJson1DomainAssociation = function (output, context) {
  return {
    autoSubDomainCreationPatterns:
      output.autoSubDomainCreationPatterns !== undefined && output.autoSubDomainCreationPatterns !== null
        ? deserializeAws_restJson1AutoSubDomainCreationPatterns(output.autoSubDomainCreationPatterns, context)
        : undefined,
    autoSubDomainIAMRole:
      output.autoSubDomainIAMRole !== undefined && output.autoSubDomainIAMRole !== null
        ? output.autoSubDomainIAMRole
        : undefined,
    certificateVerificationDNSRecord:
      output.certificateVerificationDNSRecord !== undefined && output.certificateVerificationDNSRecord !== null
        ? output.certificateVerificationDNSRecord
        : undefined,
    domainAssociationArn:
      output.domainAssociationArn !== undefined && output.domainAssociationArn !== null
        ? output.domainAssociationArn
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainStatus: output.domainStatus !== undefined && output.domainStatus !== null ? output.domainStatus : undefined,
    enableAutoSubDomain:
      output.enableAutoSubDomain !== undefined && output.enableAutoSubDomain !== null
        ? output.enableAutoSubDomain
        : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    subDomains:
      output.subDomains !== undefined && output.subDomains !== null
        ? deserializeAws_restJson1SubDomains(output.subDomains, context)
        : undefined,
  };
};
var deserializeAws_restJson1DomainAssociations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainAssociation(entry, context);
    });
};
var deserializeAws_restJson1EnvironmentVariables = function (output, context) {
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
var deserializeAws_restJson1FileUploadUrls = function (output, context) {
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
var deserializeAws_restJson1Job = function (output, context) {
  return {
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1Steps(output.steps, context)
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_restJson1JobSummary(output.summary, context)
        : undefined,
  };
};
var deserializeAws_restJson1JobSummaries = function (output, context) {
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
var deserializeAws_restJson1JobSummary = function (output, context) {
  return {
    commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
    commitMessage:
      output.commitMessage !== undefined && output.commitMessage !== null ? output.commitMessage : undefined,
    commitTime:
      output.commitTime !== undefined && output.commitTime !== null
        ? new Date(Math.round(output.commitTime * 1000))
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobType: output.jobType !== undefined && output.jobType !== null ? output.jobType : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1ProductionBranch = function (output, context) {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    lastDeployTime:
      output.lastDeployTime !== undefined && output.lastDeployTime !== null
        ? new Date(Math.round(output.lastDeployTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    thumbnailUrl: output.thumbnailUrl !== undefined && output.thumbnailUrl !== null ? output.thumbnailUrl : undefined,
  };
};
var deserializeAws_restJson1Screenshots = function (output, context) {
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
var deserializeAws_restJson1Step = function (output, context) {
  return {
    artifactsUrl: output.artifactsUrl !== undefined && output.artifactsUrl !== null ? output.artifactsUrl : undefined,
    context: output.context !== undefined && output.context !== null ? output.context : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    logUrl: output.logUrl !== undefined && output.logUrl !== null ? output.logUrl : undefined,
    screenshots:
      output.screenshots !== undefined && output.screenshots !== null
        ? deserializeAws_restJson1Screenshots(output.screenshots, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stepName: output.stepName !== undefined && output.stepName !== null ? output.stepName : undefined,
    testArtifactsUrl:
      output.testArtifactsUrl !== undefined && output.testArtifactsUrl !== null ? output.testArtifactsUrl : undefined,
    testConfigUrl:
      output.testConfigUrl !== undefined && output.testConfigUrl !== null ? output.testConfigUrl : undefined,
  };
};
var deserializeAws_restJson1Steps = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Step(entry, context);
    });
};
var deserializeAws_restJson1SubDomain = function (output, context) {
  return {
    dnsRecord: output.dnsRecord !== undefined && output.dnsRecord !== null ? output.dnsRecord : undefined,
    subDomainSetting:
      output.subDomainSetting !== undefined && output.subDomainSetting !== null
        ? deserializeAws_restJson1SubDomainSetting(output.subDomainSetting, context)
        : undefined,
    verified: output.verified !== undefined && output.verified !== null ? output.verified : undefined,
  };
};
var deserializeAws_restJson1SubDomains = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SubDomain(entry, context);
    });
};
var deserializeAws_restJson1SubDomainSetting = function (output, context) {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  };
};
var deserializeAws_restJson1TagMap = function (output, context) {
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
var deserializeAws_restJson1Webhook = function (output, context) {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
    webhookArn: output.webhookArn !== undefined && output.webhookArn !== null ? output.webhookArn : undefined,
    webhookId: output.webhookId !== undefined && output.webhookId !== null ? output.webhookId : undefined,
    webhookUrl: output.webhookUrl !== undefined && output.webhookUrl !== null ? output.webhookUrl : undefined,
  };
};
var deserializeAws_restJson1Webhooks = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Webhook(entry, context);
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
