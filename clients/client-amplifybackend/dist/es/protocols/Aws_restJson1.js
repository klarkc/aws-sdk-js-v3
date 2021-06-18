import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CloneBackendCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/environments/{BackendEnvironmentName}/clone";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.TargetEnvironmentName !== undefined &&
                input.TargetEnvironmentName !== null && { targetEnvironmentName: input.TargetEnvironmentName }
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
export var serializeAws_restJson1CreateBackendCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign({}, input.AppId !== undefined && input.AppId !== null && { appId: input.AppId }),
                    input.AppName !== undefined && input.AppName !== null && { appName: input.AppName }
                  ),
                  input.BackendEnvironmentName !== undefined &&
                    input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }
                ),
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1ResourceConfig(input.ResourceConfig, context),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1CreateBackendAPICommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.BackendEnvironmentName !== undefined &&
                    input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }
                ),
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1CreateBackendAuthCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/auth";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.BackendEnvironmentName !== undefined &&
                    input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }
                ),
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1CreateBackendAuthResourceConfig(
                      input.ResourceConfig,
                      context
                    ),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1CreateBackendConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/config";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.BackendManagerAppId !== undefined &&
                input.BackendManagerAppId !== null && { backendManagerAppId: input.BackendManagerAppId }
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
export var serializeAws_restJson1CreateTokenCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/challenge";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
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
export var serializeAws_restJson1DeleteBackendCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/environments/{BackendEnvironmentName}/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
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
export var serializeAws_restJson1DeleteBackendAPICommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1DeleteBackendAuthCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1DeleteTokenCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/challenge/{SessionId}/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.SessionId !== undefined) {
            labelValue = input.SessionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: SessionId.");
            }
            resolvedPath = resolvedPath.replace("{SessionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: SessionId.");
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
export var serializeAws_restJson1GenerateBackendAPIModelsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/generateModels";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1GetBackendCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/details";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.BackendEnvironmentName !== undefined &&
                input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }
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
export var serializeAws_restJson1GetBackendAPICommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/details";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1GetBackendAPIModelsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/getModels";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1GetBackendAuthCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}/details";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1GetBackendJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          if (input.JobId !== undefined) {
            labelValue = input.JobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: JobId.");
            }
            resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: JobId.");
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
export var serializeAws_restJson1GetTokenCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/challenge/{SessionId}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.SessionId !== undefined) {
            labelValue = input.SessionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: SessionId.");
            }
            resolvedPath = resolvedPath.replace("{SessionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: SessionId.");
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
export var serializeAws_restJson1ListBackendJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign({}, input.JobId !== undefined && input.JobId !== null && { jobId: input.JobId }),
                    input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }
                  ),
                  input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }
                ),
                input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }
              ),
              input.Status !== undefined && input.Status !== null && { status: input.Status }
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
export var serializeAws_restJson1RemoveAllBackendsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.CleanAmplifyApp !== undefined &&
                input.CleanAmplifyApp !== null && { cleanAmplifyApp: input.CleanAmplifyApp }
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
export var serializeAws_restJson1RemoveBackendConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backend/{AppId}/config/remove";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
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
export var serializeAws_restJson1UpdateBackendAPICommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1UpdateBackendAuthCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceConfig !== undefined &&
                  input.ResourceConfig !== null && {
                    resourceConfig: serializeAws_restJson1UpdateBackendAuthResourceConfig(
                      input.ResourceConfig,
                      context
                    ),
                  }
              ),
              input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }
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
export var serializeAws_restJson1UpdateBackendConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/config/update";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.LoginAuthConfig !== undefined &&
                input.LoginAuthConfig !== null && {
                  loginAuthConfig: serializeAws_restJson1LoginAuthConfigReqObj(input.LoginAuthConfig, context),
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
export var serializeAws_restJson1UpdateBackendJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
          if (input.AppId !== undefined) {
            labelValue = input.AppId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: AppId.");
            }
            resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: AppId.");
          }
          if (input.BackendEnvironmentName !== undefined) {
            labelValue = input.BackendEnvironmentName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
            }
            resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
          }
          if (input.JobId !== undefined) {
            labelValue = input.JobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: JobId.");
            }
            resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: JobId.");
          }
          body = JSON.stringify(
            __assign(
              __assign({}, input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }),
              input.Status !== undefined && input.Status !== null && { status: input.Status }
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
export var deserializeAws_restJson1CloneBackendCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CloneBackendCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CloneBackendCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBackendCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackendCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackendCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBackendAPICommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackendAPICommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackendAPICommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBackendAuthCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackendAuthCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackendAuthCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBackendConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackendConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            JobId: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackendConfigCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateTokenCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateTokenCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            ChallengeCode: undefined,
            SessionId: undefined,
            Ttl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.challengeCode !== undefined && data.challengeCode !== null) {
            contents.ChallengeCode = data.challengeCode;
          }
          if (data.sessionId !== undefined && data.sessionId !== null) {
            contents.SessionId = data.sessionId;
          }
          if (data.ttl !== undefined && data.ttl !== null) {
            contents.Ttl = data.ttl;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateTokenCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackendCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackendCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBackendCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackendAPICommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackendAPICommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBackendAPICommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackendAuthCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackendAuthCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBackendAuthCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteTokenCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteTokenCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            IsSuccess: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.isSuccess !== undefined && data.isSuccess !== null) {
            contents.IsSuccess = data.isSuccess;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteTokenCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GenerateBackendAPIModelsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GenerateBackendAPIModelsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GenerateBackendAPIModelsCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AmplifyMetaConfig: undefined,
            AppId: undefined,
            AppName: undefined,
            BackendEnvironmentList: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.amplifyMetaConfig !== undefined && data.amplifyMetaConfig !== null) {
            contents.AmplifyMetaConfig = data.amplifyMetaConfig;
          }
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.appName !== undefined && data.appName !== null) {
            contents.AppName = data.appName;
          }
          if (data.backendEnvironmentList !== undefined && data.backendEnvironmentList !== null) {
            contents.BackendEnvironmentList = deserializeAws_restJson1ListOf__string(
              data.backendEnvironmentList,
              context
            );
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendAPICommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendAPICommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            ResourceConfig: undefined,
            ResourceName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
            contents.ResourceConfig = deserializeAws_restJson1BackendAPIResourceConfig(data.resourceConfig, context);
          }
          if (data.resourceName !== undefined && data.resourceName !== null) {
            contents.ResourceName = data.resourceName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendAPICommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendAPIModelsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendAPIModelsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Models: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.models !== undefined && data.models !== null) {
            contents.Models = data.models;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendAPIModelsCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendAuthCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendAuthCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            ResourceConfig: undefined,
            ResourceName: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
            contents.ResourceConfig = deserializeAws_restJson1CreateBackendAuthResourceConfig(
              data.resourceConfig,
              context
            );
          }
          if (data.resourceName !== undefined && data.resourceName !== null) {
            contents.ResourceName = data.resourceName;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendAuthCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackendJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackendJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            CreateTime: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
            UpdateTime: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.createTime !== undefined && data.createTime !== null) {
            contents.CreateTime = data.createTime;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          if (data.updateTime !== undefined && data.updateTime !== null) {
            contents.UpdateTime = data.updateTime;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackendJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetTokenCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetTokenCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            ChallengeCode: undefined,
            SessionId: undefined,
            Ttl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.challengeCode !== undefined && data.challengeCode !== null) {
            contents.ChallengeCode = data.challengeCode;
          }
          if (data.sessionId !== undefined && data.sessionId !== null) {
            contents.SessionId = data.sessionId;
          }
          if (data.ttl !== undefined && data.ttl !== null) {
            contents.Ttl = data.ttl;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetTokenCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackendJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackendJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Jobs: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.jobs !== undefined && data.jobs !== null) {
            contents.Jobs = deserializeAws_restJson1ListOfBackendJobRespObj(data.jobs, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.NextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackendJobsCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveAllBackendsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RemoveAllBackendsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1RemoveAllBackendsCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveBackendConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RemoveBackendConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Error: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1RemoveBackendConfigCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBackendAPICommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBackendAPICommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBackendAPICommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBackendAuthCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBackendAuthCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBackendAuthCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBackendConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBackendConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendManagerAppId: undefined,
            Error: undefined,
            LoginAuthConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendManagerAppId !== undefined && data.backendManagerAppId !== null) {
            contents.BackendManagerAppId = data.backendManagerAppId;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.loginAuthConfig !== undefined && data.loginAuthConfig !== null) {
            contents.LoginAuthConfig = deserializeAws_restJson1LoginAuthConfigReqObj(data.loginAuthConfig, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBackendConfigCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBackendJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBackendJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppId: undefined,
            BackendEnvironmentName: undefined,
            CreateTime: undefined,
            Error: undefined,
            JobId: undefined,
            Operation: undefined,
            Status: undefined,
            UpdateTime: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.appId !== undefined && data.appId !== null) {
            contents.AppId = data.appId;
          }
          if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
            contents.BackendEnvironmentName = data.backendEnvironmentName;
          }
          if (data.createTime !== undefined && data.createTime !== null) {
            contents.CreateTime = data.createTime;
          }
          if (data.error !== undefined && data.error !== null) {
            contents.Error = data.error;
          }
          if (data.jobId !== undefined && data.jobId !== null) {
            contents.JobId = data.jobId;
          }
          if (data.operation !== undefined && data.operation !== null) {
            contents.Operation = data.operation;
          }
          if (data.status !== undefined && data.status !== null) {
            contents.Status = data.status;
          }
          if (data.updateTime !== undefined && data.updateTime !== null) {
            contents.UpdateTime = data.updateTime;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBackendJobCommandError = function (output, context) {
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
            case "com.amazonaws.amplifybackend#BadRequestException":
              return [3 /*break*/, 2];
            case "GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "com.amazonaws.amplifybackend#GatewayTimeoutException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.amplifybackend#NotFoundException":
              return [3 /*break*/, 6];
            case "TooManyRequestsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1GatewayTimeoutExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "GatewayTimeoutException",
        $fault: "server",
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
var serializeAws_restJson1BackendAPIAppSyncAuthSettings = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.CognitoUserPoolId !== undefined &&
                    input.CognitoUserPoolId !== null && { cognitoUserPoolId: input.CognitoUserPoolId }
                ),
                input.Description !== undefined && input.Description !== null && { description: input.Description }
              ),
              input.ExpirationTime !== undefined &&
                input.ExpirationTime !== null && { expirationTime: input.ExpirationTime }
            ),
            input.OpenIDAuthTTL !== undefined && input.OpenIDAuthTTL !== null && { openIDAuthTTL: input.OpenIDAuthTTL }
          ),
          input.OpenIDClientId !== undefined &&
            input.OpenIDClientId !== null && { openIDClientId: input.OpenIDClientId }
        ),
        input.OpenIDIatTTL !== undefined && input.OpenIDIatTTL !== null && { openIDIatTTL: input.OpenIDIatTTL }
      ),
      input.OpenIDIssueURL !== undefined && input.OpenIDIssueURL !== null && { openIDIssueURL: input.OpenIDIssueURL }
    ),
    input.OpenIDProviderName !== undefined &&
      input.OpenIDProviderName !== null && { openIDProviderName: input.OpenIDProviderName }
  );
};
var serializeAws_restJson1BackendAPIAuthType = function (input, context) {
  return __assign(
    __assign({}, input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
    input.Settings !== undefined &&
      input.Settings !== null && {
        settings: serializeAws_restJson1BackendAPIAppSyncAuthSettings(input.Settings, context),
      }
  );
};
var serializeAws_restJson1BackendAPIConflictResolution = function (input, context) {
  return __assign(
    {},
    input.ResolutionStrategy !== undefined &&
      input.ResolutionStrategy !== null && { resolutionStrategy: input.ResolutionStrategy }
  );
};
var serializeAws_restJson1BackendAPIResourceConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.AdditionalAuthTypes !== undefined &&
                input.AdditionalAuthTypes !== null && {
                  additionalAuthTypes: serializeAws_restJson1ListOfBackendAPIAuthType(
                    input.AdditionalAuthTypes,
                    context
                  ),
                }
            ),
            input.ApiName !== undefined && input.ApiName !== null && { apiName: input.ApiName }
          ),
          input.ConflictResolution !== undefined &&
            input.ConflictResolution !== null && {
              conflictResolution: serializeAws_restJson1BackendAPIConflictResolution(input.ConflictResolution, context),
            }
        ),
        input.DefaultAuthType !== undefined &&
          input.DefaultAuthType !== null && {
            defaultAuthType: serializeAws_restJson1BackendAPIAuthType(input.DefaultAuthType, context),
          }
      ),
      input.Service !== undefined && input.Service !== null && { service: input.Service }
    ),
    input.TransformSchema !== undefined && input.TransformSchema !== null && { transformSchema: input.TransformSchema }
  );
};
var serializeAws_restJson1BackendAuthSocialProviderConfig = function (input, context) {
  return __assign(
    __assign({}, input.ClientId !== undefined && input.ClientId !== null && { client_id: input.ClientId }),
    input.ClientSecret !== undefined && input.ClientSecret !== null && { client_secret: input.ClientSecret }
  );
};
var serializeAws_restJson1CreateBackendAuthForgotPasswordConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DeliveryMethod !== undefined && input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }
      ),
      input.EmailSettings !== undefined &&
        input.EmailSettings !== null && {
          emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
        }
    ),
    input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }
  );
};
var serializeAws_restJson1CreateBackendAuthIdentityPoolConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.IdentityPoolName !== undefined &&
        input.IdentityPoolName !== null && { identityPoolName: input.IdentityPoolName }
    ),
    input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }
  );
};
var serializeAws_restJson1CreateBackendAuthMFAConfig = function (input, context) {
  return __assign(
    __assign({}, input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }
  );
};
var serializeAws_restJson1CreateBackendAuthOAuthConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }
            ),
            input.OAuthGrantType !== undefined &&
              input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }
          ),
          input.OAuthScopes !== undefined &&
            input.OAuthScopes !== null && {
              oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
            }
        ),
        input.RedirectSignInURIs !== undefined &&
          input.RedirectSignInURIs !== null && {
            redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
          }
      ),
      input.RedirectSignOutURIs !== undefined &&
        input.RedirectSignOutURIs !== null && {
          redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
        }
    ),
    input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }
  );
};
var serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AdditionalConstraints !== undefined &&
        input.AdditionalConstraints !== null && {
          additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
            input.AdditionalConstraints,
            context
          ),
        }
    ),
    input.MinimumLength !== undefined && input.MinimumLength !== null && { minimumLength: input.MinimumLength }
  );
};
var serializeAws_restJson1CreateBackendAuthResourceConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }
        ),
        input.IdentityPoolConfigs !== undefined &&
          input.IdentityPoolConfigs !== null && {
            identityPoolConfigs: serializeAws_restJson1CreateBackendAuthIdentityPoolConfig(
              input.IdentityPoolConfigs,
              context
            ),
          }
      ),
      input.Service !== undefined && input.Service !== null && { service: input.Service }
    ),
    input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1CreateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }
  );
};
var serializeAws_restJson1CreateBackendAuthUserPoolConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.ForgotPassword !== undefined &&
                  input.ForgotPassword !== null && {
                    forgotPassword: serializeAws_restJson1CreateBackendAuthForgotPasswordConfig(
                      input.ForgotPassword,
                      context
                    ),
                  }
              ),
              input.Mfa !== undefined &&
                input.Mfa !== null && { mfa: serializeAws_restJson1CreateBackendAuthMFAConfig(input.Mfa, context) }
            ),
            input.OAuth !== undefined &&
              input.OAuth !== null && {
                oAuth: serializeAws_restJson1CreateBackendAuthOAuthConfig(input.OAuth, context),
              }
          ),
          input.PasswordPolicy !== undefined &&
            input.PasswordPolicy !== null && {
              passwordPolicy: serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(
                input.PasswordPolicy,
                context
              ),
            }
        ),
        input.RequiredSignUpAttributes !== undefined &&
          input.RequiredSignUpAttributes !== null && {
            requiredSignUpAttributes: serializeAws_restJson1ListOfRequiredSignUpAttributesElement(
              input.RequiredSignUpAttributes,
              context
            ),
          }
      ),
      input.SignInMethod !== undefined && input.SignInMethod !== null && { signInMethod: input.SignInMethod }
    ),
    input.UserPoolName !== undefined && input.UserPoolName !== null && { userPoolName: input.UserPoolName }
  );
};
var serializeAws_restJson1EmailSettings = function (input, context) {
  return __assign(
    __assign(
      {},
      input.EmailMessage !== undefined && input.EmailMessage !== null && { emailMessage: input.EmailMessage }
    ),
    input.EmailSubject !== undefined && input.EmailSubject !== null && { emailSubject: input.EmailSubject }
  );
};
var serializeAws_restJson1ListOf__string = function (input, context) {
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
var serializeAws_restJson1ListOfAdditionalConstraintsElement = function (input, context) {
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
var serializeAws_restJson1ListOfBackendAPIAuthType = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};
var serializeAws_restJson1ListOfMfaTypesElement = function (input, context) {
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
var serializeAws_restJson1ListOfOAuthScopesElement = function (input, context) {
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
var serializeAws_restJson1ListOfRequiredSignUpAttributesElement = function (input, context) {
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
var serializeAws_restJson1LoginAuthConfigReqObj = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AwsCognitoIdentityPoolId !== undefined &&
            input.AwsCognitoIdentityPoolId !== null && { aws_cognito_identity_pool_id: input.AwsCognitoIdentityPoolId }
        ),
        input.AwsCognitoRegion !== undefined &&
          input.AwsCognitoRegion !== null && { aws_cognito_region: input.AwsCognitoRegion }
      ),
      input.AwsUserPoolsId !== undefined && input.AwsUserPoolsId !== null && { aws_user_pools_id: input.AwsUserPoolsId }
    ),
    input.AwsUserPoolsWebClientId !== undefined &&
      input.AwsUserPoolsWebClientId !== null && { aws_user_pools_web_client_id: input.AwsUserPoolsWebClientId }
  );
};
var serializeAws_restJson1ResourceConfig = function (input, context) {
  return {};
};
var serializeAws_restJson1Settings = function (input, context) {
  return __assign(
    __assign(
      {},
      input.MfaTypes !== undefined &&
        input.MfaTypes !== null && { mfaTypes: serializeAws_restJson1ListOfMfaTypesElement(input.MfaTypes, context) }
    ),
    input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage }
  );
};
var serializeAws_restJson1SmsSettings = function (input, context) {
  return __assign({}, input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage });
};
var serializeAws_restJson1SocialProviderSettings = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.Facebook !== undefined &&
          input.Facebook !== null && {
            Facebook: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Facebook, context),
          }
      ),
      input.Google !== undefined &&
        input.Google !== null && {
          Google: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Google, context),
        }
    ),
    input.LoginWithAmazon !== undefined &&
      input.LoginWithAmazon !== null && {
        LoginWithAmazon: serializeAws_restJson1BackendAuthSocialProviderConfig(input.LoginWithAmazon, context),
      }
  );
};
var serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DeliveryMethod !== undefined && input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }
      ),
      input.EmailSettings !== undefined &&
        input.EmailSettings !== null && {
          emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
        }
    ),
    input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }
  );
};
var serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig = function (input, context) {
  return __assign(
    {},
    input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }
  );
};
var serializeAws_restJson1UpdateBackendAuthMFAConfig = function (input, context) {
  return __assign(
    __assign({}, input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }
  );
};
var serializeAws_restJson1UpdateBackendAuthOAuthConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }
            ),
            input.OAuthGrantType !== undefined &&
              input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }
          ),
          input.OAuthScopes !== undefined &&
            input.OAuthScopes !== null && {
              oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
            }
        ),
        input.RedirectSignInURIs !== undefined &&
          input.RedirectSignInURIs !== null && {
            redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
          }
      ),
      input.RedirectSignOutURIs !== undefined &&
        input.RedirectSignOutURIs !== null && {
          redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
        }
    ),
    input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }
  );
};
var serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AdditionalConstraints !== undefined &&
        input.AdditionalConstraints !== null && {
          additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
            input.AdditionalConstraints,
            context
          ),
        }
    ),
    input.MinimumLength !== undefined && input.MinimumLength !== null && { minimumLength: input.MinimumLength }
  );
};
var serializeAws_restJson1UpdateBackendAuthResourceConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }
        ),
        input.IdentityPoolConfigs !== undefined &&
          input.IdentityPoolConfigs !== null && {
            identityPoolConfigs: serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig(
              input.IdentityPoolConfigs,
              context
            ),
          }
      ),
      input.Service !== undefined && input.Service !== null && { service: input.Service }
    ),
    input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1UpdateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }
  );
};
var serializeAws_restJson1UpdateBackendAuthUserPoolConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.ForgotPassword !== undefined &&
            input.ForgotPassword !== null && {
              forgotPassword: serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig(
                input.ForgotPassword,
                context
              ),
            }
        ),
        input.Mfa !== undefined &&
          input.Mfa !== null && { mfa: serializeAws_restJson1UpdateBackendAuthMFAConfig(input.Mfa, context) }
      ),
      input.OAuth !== undefined &&
        input.OAuth !== null && { oAuth: serializeAws_restJson1UpdateBackendAuthOAuthConfig(input.OAuth, context) }
    ),
    input.PasswordPolicy !== undefined &&
      input.PasswordPolicy !== null && {
        passwordPolicy: serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
      }
  );
};
var deserializeAws_restJson1BackendAPIAppSyncAuthSettings = function (output, context) {
  return {
    CognitoUserPoolId:
      output.cognitoUserPoolId !== undefined && output.cognitoUserPoolId !== null
        ? output.cognitoUserPoolId
        : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ExpirationTime:
      output.expirationTime !== undefined && output.expirationTime !== null ? output.expirationTime : undefined,
    OpenIDAuthTTL:
      output.openIDAuthTTL !== undefined && output.openIDAuthTTL !== null ? output.openIDAuthTTL : undefined,
    OpenIDClientId:
      output.openIDClientId !== undefined && output.openIDClientId !== null ? output.openIDClientId : undefined,
    OpenIDIatTTL: output.openIDIatTTL !== undefined && output.openIDIatTTL !== null ? output.openIDIatTTL : undefined,
    OpenIDIssueURL:
      output.openIDIssueURL !== undefined && output.openIDIssueURL !== null ? output.openIDIssueURL : undefined,
    OpenIDProviderName:
      output.openIDProviderName !== undefined && output.openIDProviderName !== null
        ? output.openIDProviderName
        : undefined,
  };
};
var deserializeAws_restJson1BackendAPIAuthType = function (output, context) {
  return {
    Mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1BackendAPIAppSyncAuthSettings(output.settings, context)
        : undefined,
  };
};
var deserializeAws_restJson1BackendAPIConflictResolution = function (output, context) {
  return {
    ResolutionStrategy:
      output.resolutionStrategy !== undefined && output.resolutionStrategy !== null
        ? output.resolutionStrategy
        : undefined,
  };
};
var deserializeAws_restJson1BackendAPIResourceConfig = function (output, context) {
  return {
    AdditionalAuthTypes:
      output.additionalAuthTypes !== undefined && output.additionalAuthTypes !== null
        ? deserializeAws_restJson1ListOfBackendAPIAuthType(output.additionalAuthTypes, context)
        : undefined,
    ApiName: output.apiName !== undefined && output.apiName !== null ? output.apiName : undefined,
    ConflictResolution:
      output.conflictResolution !== undefined && output.conflictResolution !== null
        ? deserializeAws_restJson1BackendAPIConflictResolution(output.conflictResolution, context)
        : undefined,
    DefaultAuthType:
      output.defaultAuthType !== undefined && output.defaultAuthType !== null
        ? deserializeAws_restJson1BackendAPIAuthType(output.defaultAuthType, context)
        : undefined,
    Service: output.service !== undefined && output.service !== null ? output.service : undefined,
    TransformSchema:
      output.transformSchema !== undefined && output.transformSchema !== null ? output.transformSchema : undefined,
  };
};
var deserializeAws_restJson1BackendAuthSocialProviderConfig = function (output, context) {
  return {
    ClientId: output.client_id !== undefined && output.client_id !== null ? output.client_id : undefined,
    ClientSecret:
      output.client_secret !== undefined && output.client_secret !== null ? output.client_secret : undefined,
  };
};
var deserializeAws_restJson1BackendJobRespObj = function (output, context) {
  return {
    AppId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
    BackendEnvironmentName:
      output.backendEnvironmentName !== undefined && output.backendEnvironmentName !== null
        ? output.backendEnvironmentName
        : undefined,
    CreateTime: output.createTime !== undefined && output.createTime !== null ? output.createTime : undefined,
    Error: output.error !== undefined && output.error !== null ? output.error : undefined,
    JobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    Operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
    Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    UpdateTime: output.updateTime !== undefined && output.updateTime !== null ? output.updateTime : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig = function (output, context) {
  return {
    DeliveryMethod:
      output.deliveryMethod !== undefined && output.deliveryMethod !== null ? output.deliveryMethod : undefined,
    EmailSettings:
      output.emailSettings !== undefined && output.emailSettings !== null
        ? deserializeAws_restJson1EmailSettings(output.emailSettings, context)
        : undefined,
    SmsSettings:
      output.smsSettings !== undefined && output.smsSettings !== null
        ? deserializeAws_restJson1SmsSettings(output.smsSettings, context)
        : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig = function (output, context) {
  return {
    IdentityPoolName:
      output.identityPoolName !== undefined && output.identityPoolName !== null ? output.identityPoolName : undefined,
    UnauthenticatedLogin:
      output.unauthenticatedLogin !== undefined && output.unauthenticatedLogin !== null
        ? output.unauthenticatedLogin
        : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthMFAConfig = function (output, context) {
  return {
    MFAMode: output.MFAMode !== undefined && output.MFAMode !== null ? output.MFAMode : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1Settings(output.settings, context)
        : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthOAuthConfig = function (output, context) {
  return {
    DomainPrefix: output.domainPrefix !== undefined && output.domainPrefix !== null ? output.domainPrefix : undefined,
    OAuthGrantType:
      output.oAuthGrantType !== undefined && output.oAuthGrantType !== null ? output.oAuthGrantType : undefined,
    OAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1ListOfOAuthScopesElement(output.oAuthScopes, context)
        : undefined,
    RedirectSignInURIs:
      output.redirectSignInURIs !== undefined && output.redirectSignInURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignInURIs, context)
        : undefined,
    RedirectSignOutURIs:
      output.redirectSignOutURIs !== undefined && output.redirectSignOutURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignOutURIs, context)
        : undefined,
    SocialProviderSettings:
      output.socialProviderSettings !== undefined && output.socialProviderSettings !== null
        ? deserializeAws_restJson1SocialProviderSettings(output.socialProviderSettings, context)
        : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = function (output, context) {
  return {
    AdditionalConstraints:
      output.additionalConstraints !== undefined && output.additionalConstraints !== null
        ? deserializeAws_restJson1ListOfAdditionalConstraintsElement(output.additionalConstraints, context)
        : undefined,
    MinimumLength:
      output.minimumLength !== undefined && output.minimumLength !== null ? output.minimumLength : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthResourceConfig = function (output, context) {
  return {
    AuthResources:
      output.authResources !== undefined && output.authResources !== null ? output.authResources : undefined,
    IdentityPoolConfigs:
      output.identityPoolConfigs !== undefined && output.identityPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig(output.identityPoolConfigs, context)
        : undefined,
    Service: output.service !== undefined && output.service !== null ? output.service : undefined,
    UserPoolConfigs:
      output.userPoolConfigs !== undefined && output.userPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthUserPoolConfig(output.userPoolConfigs, context)
        : undefined,
  };
};
var deserializeAws_restJson1CreateBackendAuthUserPoolConfig = function (output, context) {
  return {
    ForgotPassword:
      output.forgotPassword !== undefined && output.forgotPassword !== null
        ? deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig(output.forgotPassword, context)
        : undefined,
    Mfa:
      output.mfa !== undefined && output.mfa !== null
        ? deserializeAws_restJson1CreateBackendAuthMFAConfig(output.mfa, context)
        : undefined,
    OAuth:
      output.oAuth !== undefined && output.oAuth !== null
        ? deserializeAws_restJson1CreateBackendAuthOAuthConfig(output.oAuth, context)
        : undefined,
    PasswordPolicy:
      output.passwordPolicy !== undefined && output.passwordPolicy !== null
        ? deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(output.passwordPolicy, context)
        : undefined,
    RequiredSignUpAttributes:
      output.requiredSignUpAttributes !== undefined && output.requiredSignUpAttributes !== null
        ? deserializeAws_restJson1ListOfRequiredSignUpAttributesElement(output.requiredSignUpAttributes, context)
        : undefined,
    SignInMethod: output.signInMethod !== undefined && output.signInMethod !== null ? output.signInMethod : undefined,
    UserPoolName: output.userPoolName !== undefined && output.userPoolName !== null ? output.userPoolName : undefined,
  };
};
var deserializeAws_restJson1EmailSettings = function (output, context) {
  return {
    EmailMessage: output.emailMessage !== undefined && output.emailMessage !== null ? output.emailMessage : undefined,
    EmailSubject: output.emailSubject !== undefined && output.emailSubject !== null ? output.emailSubject : undefined,
  };
};
var deserializeAws_restJson1ListOf__string = function (output, context) {
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
var deserializeAws_restJson1ListOfAdditionalConstraintsElement = function (output, context) {
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
var deserializeAws_restJson1ListOfBackendAPIAuthType = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};
var deserializeAws_restJson1ListOfBackendJobRespObj = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendJobRespObj(entry, context);
    });
};
var deserializeAws_restJson1ListOfMfaTypesElement = function (output, context) {
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
var deserializeAws_restJson1ListOfOAuthScopesElement = function (output, context) {
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
var deserializeAws_restJson1ListOfRequiredSignUpAttributesElement = function (output, context) {
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
var deserializeAws_restJson1LoginAuthConfigReqObj = function (output, context) {
  return {
    AwsCognitoIdentityPoolId:
      output.aws_cognito_identity_pool_id !== undefined && output.aws_cognito_identity_pool_id !== null
        ? output.aws_cognito_identity_pool_id
        : undefined,
    AwsCognitoRegion:
      output.aws_cognito_region !== undefined && output.aws_cognito_region !== null
        ? output.aws_cognito_region
        : undefined,
    AwsUserPoolsId:
      output.aws_user_pools_id !== undefined && output.aws_user_pools_id !== null
        ? output.aws_user_pools_id
        : undefined,
    AwsUserPoolsWebClientId:
      output.aws_user_pools_web_client_id !== undefined && output.aws_user_pools_web_client_id !== null
        ? output.aws_user_pools_web_client_id
        : undefined,
  };
};
var deserializeAws_restJson1Settings = function (output, context) {
  return {
    MfaTypes:
      output.mfaTypes !== undefined && output.mfaTypes !== null
        ? deserializeAws_restJson1ListOfMfaTypesElement(output.mfaTypes, context)
        : undefined,
    SmsMessage: output.smsMessage !== undefined && output.smsMessage !== null ? output.smsMessage : undefined,
  };
};
var deserializeAws_restJson1SmsSettings = function (output, context) {
  return {
    SmsMessage: output.smsMessage !== undefined && output.smsMessage !== null ? output.smsMessage : undefined,
  };
};
var deserializeAws_restJson1SocialProviderSettings = function (output, context) {
  return {
    Facebook:
      output.Facebook !== undefined && output.Facebook !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Facebook, context)
        : undefined,
    Google:
      output.Google !== undefined && output.Google !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Google, context)
        : undefined,
    LoginWithAmazon:
      output.LoginWithAmazon !== undefined && output.LoginWithAmazon !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.LoginWithAmazon, context)
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
