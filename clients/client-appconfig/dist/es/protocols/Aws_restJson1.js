import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.Description !== undefined && input.Description !== null && { Description: input.Description }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
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
export var serializeAws_restJson1CreateConfigurationProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.Description !== undefined &&
                          input.Description !== null && { Description: input.Description }
                      ),
                      input.LocationUri !== undefined &&
                        input.LocationUri !== null && { LocationUri: input.LocationUri }
                    ),
                    input.Name !== undefined && input.Name !== null && { Name: input.Name }
                  ),
                  input.RetrievalRoleArn !== undefined &&
                    input.RetrievalRoleArn !== null && { RetrievalRoleArn: input.RetrievalRoleArn }
                ),
                input.Tags !== undefined &&
                  input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
              ),
              input.Validators !== undefined &&
                input.Validators !== null && {
                  Validators: serializeAws_restJson1ValidatorList(input.Validators, context),
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
export var serializeAws_restJson1CreateDeploymentStrategyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/deploymentstrategies";
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
                            input.DeploymentDurationInMinutes !== undefined &&
                              input.DeploymentDurationInMinutes !== null && {
                                DeploymentDurationInMinutes: input.DeploymentDurationInMinutes,
                              }
                          ),
                          input.Description !== undefined &&
                            input.Description !== null && { Description: input.Description }
                        ),
                        input.FinalBakeTimeInMinutes !== undefined &&
                          input.FinalBakeTimeInMinutes !== null && {
                            FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes,
                          }
                      ),
                      input.GrowthFactor !== undefined &&
                        input.GrowthFactor !== null && { GrowthFactor: input.GrowthFactor }
                    ),
                    input.GrowthType !== undefined && input.GrowthType !== null && { GrowthType: input.GrowthType }
                  ),
                  input.Name !== undefined && input.Name !== null && { Name: input.Name }
                ),
                input.ReplicateTo !== undefined && input.ReplicateTo !== null && { ReplicateTo: input.ReplicateTo }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
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
export var serializeAws_restJson1CreateEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}/environments";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.Description !== undefined && input.Description !== null && { Description: input.Description }
                  ),
                  input.Monitors !== undefined &&
                    input.Monitors !== null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
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
export var serializeAws_restJson1CreateHostedConfigurationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              __assign(
                { "content-type": "application/octet-stream" },
                isSerializableHeaderValue(input.Description) && { description: input.Description }
              ),
              isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }
            ),
            isSerializableHeaderValue(input.LatestVersionNumber) && {
              "latest-version-number": input.LatestVersionNumber.toString(),
            }
          );
          resolvedPath =
            "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          if (input.Content !== undefined) {
            body = input.Content;
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
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
export var serializeAws_restJson1DeleteConfigurationProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
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
export var serializeAws_restJson1DeleteDeploymentStrategyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/deployementstrategies/{DeploymentStrategyId}";
          if (input.DeploymentStrategyId !== undefined) {
            labelValue = input.DeploymentStrategyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
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
export var serializeAws_restJson1DeleteEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
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
export var serializeAws_restJson1DeleteHostedConfigurationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          if (input.VersionNumber !== undefined) {
            labelValue = input.VersionNumber.toString();
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: VersionNumber.");
            }
            resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: VersionNumber.");
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
export var serializeAws_restJson1GetApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
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
export var serializeAws_restJson1GetConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{Application}/environments/{Environment}/configurations/{Configuration}";
          if (input.Application !== undefined) {
            labelValue = input.Application;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Application.");
            }
            resolvedPath = resolvedPath.replace("{Application}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Application.");
          }
          if (input.Environment !== undefined) {
            labelValue = input.Environment;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Environment.");
            }
            resolvedPath = resolvedPath.replace("{Environment}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Environment.");
          }
          if (input.Configuration !== undefined) {
            labelValue = input.Configuration;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Configuration.");
            }
            resolvedPath = resolvedPath.replace("{Configuration}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Configuration.");
          }
          query = __assign(
            __assign({}, input.ClientId !== undefined && { client_id: input.ClientId }),
            input.ClientConfigurationVersion !== undefined && {
              client_configuration_version: input.ClientConfigurationVersion,
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
export var serializeAws_restJson1GetConfigurationProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
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
export var serializeAws_restJson1GetDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
          }
          if (input.DeploymentNumber !== undefined) {
            labelValue = input.DeploymentNumber.toString();
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentNumber.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentNumber}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentNumber.");
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
export var serializeAws_restJson1GetDeploymentStrategyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/deploymentstrategies/{DeploymentStrategyId}";
          if (input.DeploymentStrategyId !== undefined) {
            labelValue = input.DeploymentStrategyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
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
export var serializeAws_restJson1GetEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
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
export var serializeAws_restJson1GetHostedConfigurationVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          if (input.VersionNumber !== undefined) {
            labelValue = input.VersionNumber.toString();
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: VersionNumber.");
            }
            resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: VersionNumber.");
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
export var serializeAws_restJson1ListApplicationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications";
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
export var serializeAws_restJson1ListConfigurationProfilesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
export var serializeAws_restJson1ListDeploymentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
export var serializeAws_restJson1ListDeploymentStrategiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/deploymentstrategies";
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
export var serializeAws_restJson1ListEnvironmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
export var serializeAws_restJson1ListHostedConfigurationVersionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          query = __assign(
            __assign({}, input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
            input.NextToken !== undefined && { next_token: input.NextToken }
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
          resolvedPath = "/tags/{ResourceArn}";
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
export var serializeAws_restJson1StartDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.ConfigurationProfileId !== undefined &&
                        input.ConfigurationProfileId !== null && {
                          ConfigurationProfileId: input.ConfigurationProfileId,
                        }
                    ),
                    input.ConfigurationVersion !== undefined &&
                      input.ConfigurationVersion !== null && { ConfigurationVersion: input.ConfigurationVersion }
                  ),
                  input.DeploymentStrategyId !== undefined &&
                    input.DeploymentStrategyId !== null && { DeploymentStrategyId: input.DeploymentStrategyId }
                ),
                input.Description !== undefined && input.Description !== null && { Description: input.Description }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
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
export var serializeAws_restJson1StopDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
          }
          if (input.DeploymentNumber !== undefined) {
            labelValue = input.DeploymentNumber.toString();
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentNumber.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentNumber}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentNumber.");
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
          resolvedPath = "/tags/{ResourceArn}";
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
                input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }
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
          resolvedPath = "/tags/{ResourceArn}";
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
export var serializeAws_restJson1UpdateApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.Description !== undefined && input.Description !== null && { Description: input.Description }
              ),
              input.Name !== undefined && input.Name !== null && { Name: input.Name }
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
export var serializeAws_restJson1UpdateConfigurationProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.Description !== undefined && input.Description !== null && { Description: input.Description }
                  ),
                  input.Name !== undefined && input.Name !== null && { Name: input.Name }
                ),
                input.RetrievalRoleArn !== undefined &&
                  input.RetrievalRoleArn !== null && { RetrievalRoleArn: input.RetrievalRoleArn }
              ),
              input.Validators !== undefined &&
                input.Validators !== null && {
                  Validators: serializeAws_restJson1ValidatorList(input.Validators, context),
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
export var serializeAws_restJson1UpdateDeploymentStrategyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/deploymentstrategies/{DeploymentStrategyId}";
          if (input.DeploymentStrategyId !== undefined) {
            labelValue = input.DeploymentStrategyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DeploymentStrategyId.");
            }
            resolvedPath = resolvedPath.replace("{DeploymentStrategyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DeploymentStrategyId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.DeploymentDurationInMinutes !== undefined &&
                        input.DeploymentDurationInMinutes !== null && {
                          DeploymentDurationInMinutes: input.DeploymentDurationInMinutes,
                        }
                    ),
                    input.Description !== undefined && input.Description !== null && { Description: input.Description }
                  ),
                  input.FinalBakeTimeInMinutes !== undefined &&
                    input.FinalBakeTimeInMinutes !== null && { FinalBakeTimeInMinutes: input.FinalBakeTimeInMinutes }
                ),
                input.GrowthFactor !== undefined && input.GrowthFactor !== null && { GrowthFactor: input.GrowthFactor }
              ),
              input.GrowthType !== undefined && input.GrowthType !== null && { GrowthType: input.GrowthType }
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
export var serializeAws_restJson1UpdateEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/applications/{ApplicationId}/environments/{EnvironmentId}";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.EnvironmentId !== undefined) {
            labelValue = input.EnvironmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: EnvironmentId.");
            }
            resolvedPath = resolvedPath.replace("{EnvironmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: EnvironmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.Description !== undefined && input.Description !== null && { Description: input.Description }
                ),
                input.Monitors !== undefined &&
                  input.Monitors !== null && { Monitors: serializeAws_restJson1MonitorList(input.Monitors, context) }
              ),
              input.Name !== undefined && input.Name !== null && { Name: input.Name }
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
export var serializeAws_restJson1ValidateConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators";
          if (input.ApplicationId !== undefined) {
            labelValue = input.ApplicationId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ApplicationId.");
            }
            resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ApplicationId.");
          }
          if (input.ConfigurationProfileId !== undefined) {
            labelValue = input.ConfigurationProfileId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ConfigurationProfileId.");
            }
            resolvedPath = resolvedPath.replace("{ConfigurationProfileId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ConfigurationProfileId.");
          }
          query = __assign(
            {},
            input.ConfigurationVersion !== undefined && { configuration_version: input.ConfigurationVersion }
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restJson1CreateApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateApplicationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Description: undefined,
            Id: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateApplicationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateConfigurationProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateConfigurationProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            LocationUri: undefined,
            Name: undefined,
            RetrievalRoleArn: undefined,
            Validators: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.LocationUri !== undefined && data.LocationUri !== null) {
            contents.LocationUri = data.LocationUri;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
            contents.RetrievalRoleArn = data.RetrievalRoleArn;
          }
          if (data.Validators !== undefined && data.Validators !== null) {
            contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateConfigurationProfileCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDeploymentStrategyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDeploymentStrategyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DeploymentDurationInMinutes: undefined,
            Description: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            Id: undefined,
            Name: undefined,
            ReplicateTo: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
            contents.ReplicateTo = data.ReplicateTo;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDeploymentStrategyCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            Monitors: undefined,
            Name: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Monitors !== undefined && data.Monitors !== null) {
            contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateHostedConfigurationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1CreateHostedConfigurationVersionCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            ConfigurationProfileId: undefined,
            Content: undefined,
            ContentType: undefined,
            Description: undefined,
            VersionNumber: undefined,
          };
          if (output.headers["application-id"] !== undefined) {
            contents.ApplicationId = output.headers["application-id"];
          }
          if (output.headers["configuration-profile-id"] !== undefined) {
            contents.ConfigurationProfileId = output.headers["configuration-profile-id"];
          }
          if (output.headers["version-number"] !== undefined) {
            contents.VersionNumber = parseInt(output.headers["version-number"], 10);
          }
          if (output.headers["description"] !== undefined) {
            contents.Description = output.headers["description"];
          }
          if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Content = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateHostedConfigurationVersionCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#ConflictException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 6];
            case "PayloadTooLargeException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appconfig#PayloadTooLargeException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appconfig#ServiceQuotaExceededException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteApplicationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteApplicationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteConfigurationProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteConfigurationProfileCommandError(output, context)];
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
var deserializeAws_restJson1DeleteConfigurationProfileCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#ConflictException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDeploymentStrategyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDeploymentStrategyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDeploymentStrategyCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteEnvironmentCommandError(output, context)];
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
var deserializeAws_restJson1DeleteEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#ConflictException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteHostedConfigurationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1DeleteHostedConfigurationVersionCommandError(output, context),
            ];
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
var deserializeAws_restJson1DeleteHostedConfigurationVersionCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetApplicationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Description: undefined,
            Id: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetApplicationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetConfigurationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ConfigurationVersion: undefined,
            Content: undefined,
            ContentType: undefined,
          };
          if (output.headers["configuration-version"] !== undefined) {
            contents.ConfigurationVersion = output.headers["configuration-version"];
          }
          if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Content = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetConfigurationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetConfigurationProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetConfigurationProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            LocationUri: undefined,
            Name: undefined,
            RetrievalRoleArn: undefined,
            Validators: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.LocationUri !== undefined && data.LocationUri !== null) {
            contents.LocationUri = data.LocationUri;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
            contents.RetrievalRoleArn = data.RetrievalRoleArn;
          }
          if (data.Validators !== undefined && data.Validators !== null) {
            contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetConfigurationProfileCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
            ApplicationId: undefined,
            CompletedAt: undefined,
            ConfigurationLocationUri: undefined,
            ConfigurationName: undefined,
            ConfigurationProfileId: undefined,
            ConfigurationVersion: undefined,
            DeploymentDurationInMinutes: undefined,
            DeploymentNumber: undefined,
            DeploymentStrategyId: undefined,
            Description: undefined,
            EnvironmentId: undefined,
            EventLog: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            PercentageComplete: undefined,
            StartedAt: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
            contents.CompletedAt = new Date(data.CompletedAt);
          }
          if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
            contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
          }
          if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
            contents.ConfigurationName = data.ConfigurationName;
          }
          if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
            contents.ConfigurationProfileId = data.ConfigurationProfileId;
          }
          if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
            contents.ConfigurationVersion = data.ConfigurationVersion;
          }
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
            contents.DeploymentNumber = data.DeploymentNumber;
          }
          if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
            contents.DeploymentStrategyId = data.DeploymentStrategyId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
            contents.EnvironmentId = data.EnvironmentId;
          }
          if (data.EventLog !== undefined && data.EventLog !== null) {
            contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
            contents.PercentageComplete = data.PercentageComplete;
          }
          if (data.StartedAt !== undefined && data.StartedAt !== null) {
            contents.StartedAt = new Date(data.StartedAt);
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDeploymentStrategyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDeploymentStrategyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DeploymentDurationInMinutes: undefined,
            Description: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            Id: undefined,
            Name: undefined,
            ReplicateTo: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
            contents.ReplicateTo = data.ReplicateTo;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDeploymentStrategyCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            Monitors: undefined,
            Name: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Monitors !== undefined && data.Monitors !== null) {
            contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetHostedConfigurationVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetHostedConfigurationVersionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            ConfigurationProfileId: undefined,
            Content: undefined,
            ContentType: undefined,
            Description: undefined,
            VersionNumber: undefined,
          };
          if (output.headers["application-id"] !== undefined) {
            contents.ApplicationId = output.headers["application-id"];
          }
          if (output.headers["configuration-profile-id"] !== undefined) {
            contents.ConfigurationProfileId = output.headers["configuration-profile-id"];
          }
          if (output.headers["version-number"] !== undefined) {
            contents.VersionNumber = parseInt(output.headers["version-number"], 10);
          }
          if (output.headers["description"] !== undefined) {
            contents.Description = output.headers["description"];
          }
          if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Content = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetHostedConfigurationVersionCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListApplicationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListApplicationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1ApplicationList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListApplicationsCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListConfigurationProfilesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListConfigurationProfilesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1ConfigurationProfileSummaryList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListConfigurationProfilesCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDeploymentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListDeploymentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1DeploymentList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListDeploymentsCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDeploymentStrategiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListDeploymentStrategiesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1DeploymentStrategyList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListDeploymentStrategiesCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListEnvironmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListEnvironmentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1EnvironmentList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListEnvironmentsCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListHostedConfigurationVersionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListHostedConfigurationVersionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Items: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Items !== undefined && data.Items !== null) {
            contents.Items = deserializeAws_restJson1HostedConfigurationVersionSummaryList(data.Items, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListHostedConfigurationVersionsCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Tags !== undefined && data.Tags !== null) {
            contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            CompletedAt: undefined,
            ConfigurationLocationUri: undefined,
            ConfigurationName: undefined,
            ConfigurationProfileId: undefined,
            ConfigurationVersion: undefined,
            DeploymentDurationInMinutes: undefined,
            DeploymentNumber: undefined,
            DeploymentStrategyId: undefined,
            Description: undefined,
            EnvironmentId: undefined,
            EventLog: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            PercentageComplete: undefined,
            StartedAt: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
            contents.CompletedAt = new Date(data.CompletedAt);
          }
          if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
            contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
          }
          if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
            contents.ConfigurationName = data.ConfigurationName;
          }
          if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
            contents.ConfigurationProfileId = data.ConfigurationProfileId;
          }
          if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
            contents.ConfigurationVersion = data.ConfigurationVersion;
          }
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
            contents.DeploymentNumber = data.DeploymentNumber;
          }
          if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
            contents.DeploymentStrategyId = data.DeploymentStrategyId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
            contents.EnvironmentId = data.EnvironmentId;
          }
          if (data.EventLog !== undefined && data.EventLog !== null) {
            contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
            contents.PercentageComplete = data.PercentageComplete;
          }
          if (data.StartedAt !== undefined && data.StartedAt !== null) {
            contents.StartedAt = new Date(data.StartedAt);
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#ConflictException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 202 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StopDeploymentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            CompletedAt: undefined,
            ConfigurationLocationUri: undefined,
            ConfigurationName: undefined,
            ConfigurationProfileId: undefined,
            ConfigurationVersion: undefined,
            DeploymentDurationInMinutes: undefined,
            DeploymentNumber: undefined,
            DeploymentStrategyId: undefined,
            Description: undefined,
            EnvironmentId: undefined,
            EventLog: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            PercentageComplete: undefined,
            StartedAt: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
            contents.CompletedAt = new Date(data.CompletedAt);
          }
          if (data.ConfigurationLocationUri !== undefined && data.ConfigurationLocationUri !== null) {
            contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
          }
          if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
            contents.ConfigurationName = data.ConfigurationName;
          }
          if (data.ConfigurationProfileId !== undefined && data.ConfigurationProfileId !== null) {
            contents.ConfigurationProfileId = data.ConfigurationProfileId;
          }
          if (data.ConfigurationVersion !== undefined && data.ConfigurationVersion !== null) {
            contents.ConfigurationVersion = data.ConfigurationVersion;
          }
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
            contents.DeploymentNumber = data.DeploymentNumber;
          }
          if (data.DeploymentStrategyId !== undefined && data.DeploymentStrategyId !== null) {
            contents.DeploymentStrategyId = data.DeploymentStrategyId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
            contents.EnvironmentId = data.EnvironmentId;
          }
          if (data.EventLog !== undefined && data.EventLog !== null) {
            contents.EventLog = deserializeAws_restJson1DeploymentEvents(data.EventLog, context);
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.PercentageComplete !== undefined && data.PercentageComplete !== null) {
            contents.PercentageComplete = data.PercentageComplete;
          }
          if (data.StartedAt !== undefined && data.StartedAt !== null) {
            contents.StartedAt = new Date(data.StartedAt);
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StopDeploymentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateApplicationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Description: undefined,
            Id: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateApplicationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateConfigurationProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateConfigurationProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            LocationUri: undefined,
            Name: undefined,
            RetrievalRoleArn: undefined,
            Validators: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.LocationUri !== undefined && data.LocationUri !== null) {
            contents.LocationUri = data.LocationUri;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
            contents.RetrievalRoleArn = data.RetrievalRoleArn;
          }
          if (data.Validators !== undefined && data.Validators !== null) {
            contents.Validators = deserializeAws_restJson1ValidatorList(data.Validators, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateConfigurationProfileCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateDeploymentStrategyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateDeploymentStrategyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DeploymentDurationInMinutes: undefined,
            Description: undefined,
            FinalBakeTimeInMinutes: undefined,
            GrowthFactor: undefined,
            GrowthType: undefined,
            Id: undefined,
            Name: undefined,
            ReplicateTo: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DeploymentDurationInMinutes !== undefined && data.DeploymentDurationInMinutes !== null) {
            contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.FinalBakeTimeInMinutes !== undefined && data.FinalBakeTimeInMinutes !== null) {
            contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
          }
          if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
            contents.GrowthFactor = data.GrowthFactor;
          }
          if (data.GrowthType !== undefined && data.GrowthType !== null) {
            contents.GrowthType = data.GrowthType;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
            contents.ReplicateTo = data.ReplicateTo;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateDeploymentStrategyCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateEnvironmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ApplicationId: undefined,
            Description: undefined,
            Id: undefined,
            Monitors: undefined,
            Name: undefined,
            State: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
            contents.ApplicationId = data.ApplicationId;
          }
          if (data.Description !== undefined && data.Description !== null) {
            contents.Description = data.Description;
          }
          if (data.Id !== undefined && data.Id !== null) {
            contents.Id = data.Id;
          }
          if (data.Monitors !== undefined && data.Monitors !== null) {
            contents.Monitors = deserializeAws_restJson1MonitorList(data.Monitors, context);
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateEnvironmentCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ValidateConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ValidateConfigurationCommandError(output, context)];
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
var deserializeAws_restJson1ValidateConfigurationCommandError = function (output, context) {
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
            case "com.amazonaws.appconfig#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appconfig#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appconfig#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
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
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1PayloadTooLargeExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "PayloadTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Limit: undefined,
        Measure: undefined,
        Message: undefined,
        Size: undefined,
      };
      data = parsedOutput.body;
      if (data.Limit !== undefined && data.Limit !== null) {
        contents.Limit = data.Limit;
      }
      if (data.Measure !== undefined && data.Measure !== null) {
        contents.Measure = data.Measure;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Size !== undefined && data.Size !== null) {
        contents.Size = data.Size;
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
        Message: undefined,
        ResourceName: undefined,
      };
      data = parsedOutput.body;
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body;
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1Monitor = function (input, context) {
  return __assign(
    __assign({}, input.AlarmArn !== undefined && input.AlarmArn !== null && { AlarmArn: input.AlarmArn }),
    input.AlarmRoleArn !== undefined && input.AlarmRoleArn !== null && { AlarmRoleArn: input.AlarmRoleArn }
  );
};
var serializeAws_restJson1MonitorList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Monitor(entry, context);
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
var serializeAws_restJson1Validator = function (input, context) {
  return __assign(
    __assign({}, input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_restJson1ValidatorList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Validator(entry, context);
    });
};
var deserializeAws_restJson1Application = function (output, context) {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_restJson1ApplicationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Application(entry, context);
    });
};
var deserializeAws_restJson1ConfigurationProfileSummary = function (output, context) {
  return {
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LocationUri: output.LocationUri !== undefined && output.LocationUri !== null ? output.LocationUri : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ValidatorTypes:
      output.ValidatorTypes !== undefined && output.ValidatorTypes !== null
        ? deserializeAws_restJson1ValidatorTypeList(output.ValidatorTypes, context)
        : undefined,
  };
};
var deserializeAws_restJson1ConfigurationProfileSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConfigurationProfileSummary(entry, context);
    });
};
var deserializeAws_restJson1DeploymentEvent = function (output, context) {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
    OccurredAt: output.OccurredAt !== undefined && output.OccurredAt !== null ? new Date(output.OccurredAt) : undefined,
    TriggeredBy: output.TriggeredBy !== undefined && output.TriggeredBy !== null ? output.TriggeredBy : undefined,
  };
};
var deserializeAws_restJson1DeploymentEvents = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DeploymentEvent(entry, context);
    });
};
var deserializeAws_restJson1DeploymentList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DeploymentSummary(entry, context);
    });
};
var deserializeAws_restJson1DeploymentStrategy = function (output, context) {
  return {
    DeploymentDurationInMinutes:
      output.DeploymentDurationInMinutes !== undefined && output.DeploymentDurationInMinutes !== null
        ? output.DeploymentDurationInMinutes
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    FinalBakeTimeInMinutes:
      output.FinalBakeTimeInMinutes !== undefined && output.FinalBakeTimeInMinutes !== null
        ? output.FinalBakeTimeInMinutes
        : undefined,
    GrowthFactor: output.GrowthFactor !== undefined && output.GrowthFactor !== null ? output.GrowthFactor : undefined,
    GrowthType: output.GrowthType !== undefined && output.GrowthType !== null ? output.GrowthType : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ReplicateTo: output.ReplicateTo !== undefined && output.ReplicateTo !== null ? output.ReplicateTo : undefined,
  };
};
var deserializeAws_restJson1DeploymentStrategyList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DeploymentStrategy(entry, context);
    });
};
var deserializeAws_restJson1DeploymentSummary = function (output, context) {
  return {
    CompletedAt:
      output.CompletedAt !== undefined && output.CompletedAt !== null ? new Date(output.CompletedAt) : undefined,
    ConfigurationName:
      output.ConfigurationName !== undefined && output.ConfigurationName !== null
        ? output.ConfigurationName
        : undefined,
    ConfigurationVersion:
      output.ConfigurationVersion !== undefined && output.ConfigurationVersion !== null
        ? output.ConfigurationVersion
        : undefined,
    DeploymentDurationInMinutes:
      output.DeploymentDurationInMinutes !== undefined && output.DeploymentDurationInMinutes !== null
        ? output.DeploymentDurationInMinutes
        : undefined,
    DeploymentNumber:
      output.DeploymentNumber !== undefined && output.DeploymentNumber !== null ? output.DeploymentNumber : undefined,
    FinalBakeTimeInMinutes:
      output.FinalBakeTimeInMinutes !== undefined && output.FinalBakeTimeInMinutes !== null
        ? output.FinalBakeTimeInMinutes
        : undefined,
    GrowthFactor: output.GrowthFactor !== undefined && output.GrowthFactor !== null ? output.GrowthFactor : undefined,
    GrowthType: output.GrowthType !== undefined && output.GrowthType !== null ? output.GrowthType : undefined,
    PercentageComplete:
      output.PercentageComplete !== undefined && output.PercentageComplete !== null
        ? output.PercentageComplete
        : undefined,
    StartedAt: output.StartedAt !== undefined && output.StartedAt !== null ? new Date(output.StartedAt) : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
var deserializeAws_restJson1Environment = function (output, context) {
  return {
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Monitors:
      output.Monitors !== undefined && output.Monitors !== null
        ? deserializeAws_restJson1MonitorList(output.Monitors, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
var deserializeAws_restJson1EnvironmentList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Environment(entry, context);
    });
};
var deserializeAws_restJson1HostedConfigurationVersionSummary = function (output, context) {
  return {
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    ConfigurationProfileId:
      output.ConfigurationProfileId !== undefined && output.ConfigurationProfileId !== null
        ? output.ConfigurationProfileId
        : undefined,
    ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  };
};
var deserializeAws_restJson1HostedConfigurationVersionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1HostedConfigurationVersionSummary(entry, context);
    });
};
var deserializeAws_restJson1Monitor = function (output, context) {
  return {
    AlarmArn: output.AlarmArn !== undefined && output.AlarmArn !== null ? output.AlarmArn : undefined,
    AlarmRoleArn: output.AlarmRoleArn !== undefined && output.AlarmRoleArn !== null ? output.AlarmRoleArn : undefined,
  };
};
var deserializeAws_restJson1MonitorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Monitor(entry, context);
    });
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
var deserializeAws_restJson1Validator = function (output, context) {
  return {
    Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_restJson1ValidatorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Validator(entry, context);
    });
};
var deserializeAws_restJson1ValidatorTypeList = function (output, context) {
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
