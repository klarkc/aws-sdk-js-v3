import { __assign, __awaiter, __generator } from "tslib";
import {
  AccessLog,
  Backend,
  ClientTlsCertificate,
  GrpcRouteMetadataMatchMethod,
  HeaderMatchMethod,
  ListenerTimeout,
  ListenerTlsCertificate,
  ListenerTlsValidationContextTrust,
  ServiceDiscovery,
  TlsValidationContextTrust,
  VirtualGatewayAccessLog,
  VirtualGatewayClientTlsCertificate,
  VirtualGatewayConnectionPool,
  VirtualGatewayListenerTlsCertificate,
  VirtualGatewayListenerTlsValidationContextTrust,
  VirtualGatewayTlsValidationContextTrust,
  VirtualNodeConnectionPool,
  VirtualServiceProvider,
} from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1CreateGatewayRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.gatewayRouteName !== undefined &&
                    input.gatewayRouteName !== null && { gatewayRouteName: input.gatewayRouteName }
                ),
                input.spec !== undefined &&
                  input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateMeshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.meshName !== undefined && input.meshName !== null && { meshName: input.meshName }
                ),
                input.spec !== undefined &&
                  input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.routeName !== undefined && input.routeName !== null && { routeName: input.routeName }
                ),
                input.spec !== undefined &&
                  input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateVirtualGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.spec !== undefined &&
                    input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
              ),
              input.virtualGatewayName !== undefined &&
                input.virtualGatewayName !== null && { virtualGatewayName: input.virtualGatewayName }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateVirtualNodeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.spec !== undefined &&
                    input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
              ),
              input.virtualNodeName !== undefined &&
                input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateVirtualRouterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.spec !== undefined &&
                    input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
              ),
              input.virtualRouterName !== undefined &&
                input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateVirtualServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
                  input.spec !== undefined &&
                    input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
              ),
              input.virtualServiceName !== undefined &&
                input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteGatewayRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
          if (input.gatewayRouteName !== undefined) {
            labelValue = input.gatewayRouteName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
            }
            resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: gatewayRouteName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteMeshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
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
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
          if (input.routeName !== undefined) {
            labelValue = input.routeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: routeName.");
            }
            resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: routeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteVirtualGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteVirtualNodeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
          if (input.virtualNodeName !== undefined) {
            labelValue = input.virtualNodeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
            }
            resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualNodeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteVirtualRouterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteVirtualServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
          if (input.virtualServiceName !== undefined) {
            labelValue = input.virtualServiceName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
            }
            resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualServiceName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeGatewayRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
          if (input.gatewayRouteName !== undefined) {
            labelValue = input.gatewayRouteName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
            }
            resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: gatewayRouteName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeMeshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
          if (input.routeName !== undefined) {
            labelValue = input.routeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: routeName.");
            }
            resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: routeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeVirtualGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeVirtualNodeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
          if (input.virtualNodeName !== undefined) {
            labelValue = input.virtualNodeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
            }
            resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualNodeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeVirtualRouterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DescribeVirtualServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
          if (input.virtualServiceName !== undefined) {
            labelValue = input.virtualServiceName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
            }
            resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualServiceName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1ListGatewayRoutesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
export var serializeAws_restJson1ListMeshesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
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
export var serializeAws_restJson1ListRoutesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/tags";
          query = __assign(
            __assign(
              __assign({}, input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
              input.nextToken !== undefined && { nextToken: input.nextToken }
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
export var serializeAws_restJson1ListVirtualGatewaysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
export var serializeAws_restJson1ListVirtualNodesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
export var serializeAws_restJson1ListVirtualRoutersCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
export var serializeAws_restJson1ListVirtualServicesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign(
            __assign(
              __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
              input.limit !== undefined && { limit: input.limit.toString() }
            ),
            input.meshOwner !== undefined && { meshOwner: input.meshOwner }
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/tag";
          query = __assign({}, input.resourceArn !== undefined && { resourceArn: input.resourceArn });
          body = JSON.stringify(
            __assign(
              {},
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/untag";
          query = __assign({}, input.resourceArn !== undefined && { resourceArn: input.resourceArn });
          body = JSON.stringify(
            __assign(
              {},
              input.tagKeys !== undefined &&
                input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }
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
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateGatewayRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath =
            "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
          if (input.gatewayRouteName !== undefined) {
            labelValue = input.gatewayRouteName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
            }
            resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: gatewayRouteName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateMeshCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}";
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateRouteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
          if (input.routeName !== undefined) {
            labelValue = input.routeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: routeName.");
            }
            resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: routeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateVirtualGatewayCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
          if (input.virtualGatewayName !== undefined) {
            labelValue = input.virtualGatewayName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
            }
            resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualGatewayName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateVirtualNodeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
          if (input.virtualNodeName !== undefined) {
            labelValue = input.virtualNodeName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
            }
            resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualNodeName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateVirtualRouterCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
          if (input.virtualRouterName !== undefined) {
            labelValue = input.virtualRouterName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
            }
            resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualRouterName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateVirtualServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
          if (input.virtualServiceName !== undefined) {
            labelValue = input.virtualServiceName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
            }
            resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: virtualServiceName.");
          }
          if (input.meshName !== undefined) {
            labelValue = input.meshName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: meshName.");
            }
            resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: meshName.");
          }
          query = __assign({}, input.meshOwner !== undefined && { meshOwner: input.meshOwner });
          body = JSON.stringify(
            __assign(
              { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() },
              input.spec !== undefined &&
                input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _d.sent()),
            (hostname = _a.hostname),
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
export var deserializeAws_restJson1CreateGatewayRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateGatewayRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            gatewayRoute: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateGatewayRouteCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateMeshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateMeshCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            mesh: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.mesh = deserializeAws_restJson1MeshData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateMeshCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
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
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            route: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.route = deserializeAws_restJson1RouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateRouteCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateVirtualGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVirtualGatewayCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualGateway: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVirtualGatewayCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateVirtualNodeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVirtualNodeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualNode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVirtualNodeCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateVirtualRouterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVirtualRouterCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualRouter: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVirtualRouterCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateVirtualServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateVirtualServiceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualService: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateVirtualServiceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteGatewayRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteGatewayRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            gatewayRoute: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteGatewayRouteCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteMeshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteMeshCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            mesh: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.mesh = deserializeAws_restJson1MeshData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteMeshCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            route: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.route = deserializeAws_restJson1RouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteRouteCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVirtualGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteVirtualGatewayCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualGateway: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteVirtualGatewayCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVirtualNodeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteVirtualNodeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualNode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteVirtualNodeCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVirtualRouterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteVirtualRouterCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualRouter: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteVirtualRouterCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVirtualServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteVirtualServiceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualService: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteVirtualServiceCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeGatewayRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeGatewayRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            gatewayRoute: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeGatewayRouteCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeMeshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeMeshCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            mesh: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.mesh = deserializeAws_restJson1MeshData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeMeshCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            route: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.route = deserializeAws_restJson1RouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeRouteCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVirtualGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeVirtualGatewayCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualGateway: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeVirtualGatewayCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVirtualNodeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeVirtualNodeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualNode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeVirtualNodeCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVirtualRouterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeVirtualRouterCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualRouter: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeVirtualRouterCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVirtualServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeVirtualServiceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualService: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeVirtualServiceCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListGatewayRoutesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListGatewayRoutesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            gatewayRoutes: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.gatewayRoutes !== undefined && data.gatewayRoutes !== null) {
            contents.gatewayRoutes = deserializeAws_restJson1GatewayRouteList(data.gatewayRoutes, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListGatewayRoutesCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListMeshesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListMeshesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            meshes: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.meshes !== undefined && data.meshes !== null) {
            contents.meshes = deserializeAws_restJson1MeshList(data.meshes, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListMeshesCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRoutesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListRoutesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            routes: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.routes !== undefined && data.routes !== null) {
            contents.routes = deserializeAws_restJson1RouteList(data.routes, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListRoutesCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            nextToken: undefined,
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1TagList(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVirtualGatewaysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListVirtualGatewaysCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            virtualGateways: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.virtualGateways !== undefined && data.virtualGateways !== null) {
            contents.virtualGateways = deserializeAws_restJson1VirtualGatewayList(data.virtualGateways, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListVirtualGatewaysCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVirtualNodesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListVirtualNodesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            virtualNodes: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
            contents.virtualNodes = deserializeAws_restJson1VirtualNodeList(data.virtualNodes, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListVirtualNodesCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVirtualRoutersCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListVirtualRoutersCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            virtualRouters: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
            contents.virtualRouters = deserializeAws_restJson1VirtualRouterList(data.virtualRouters, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListVirtualRoutersCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVirtualServicesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListVirtualServicesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            virtualServices: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.virtualServices !== undefined && data.virtualServices !== null) {
            contents.virtualServices = deserializeAws_restJson1VirtualServiceList(data.virtualServices, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListVirtualServicesCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 12];
            case "TooManyTagsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyTagsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ForbiddenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "TooManyRequestsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateGatewayRouteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateGatewayRouteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            gatewayRoute: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateGatewayRouteCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateMeshCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateMeshCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            mesh: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.mesh = deserializeAws_restJson1MeshData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateMeshCommandError = function (output, context) {
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
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#TooManyRequestsException":
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
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
            route: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.route = deserializeAws_restJson1RouteData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRouteCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateVirtualGatewayCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateVirtualGatewayCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualGateway: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVirtualGatewayCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateVirtualNodeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateVirtualNodeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualNode: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVirtualNodeCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateVirtualRouterCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateVirtualRouterCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualRouter: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVirtualRouterCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateVirtualServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateVirtualServiceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            virtualService: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateVirtualServiceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appmesh#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appmesh#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appmesh#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appmesh#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appmesh#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appmesh#NotFoundException":
              return [3 /*break*/, 12];
            case "ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appmesh#ServiceUnavailableException":
              return [3 /*break*/, 14];
            case "TooManyRequestsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.appmesh#TooManyRequestsException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
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
var deserializeAws_restJson1ForbiddenExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ForbiddenException",
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
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $retryable: {},
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
var deserializeAws_restJson1ResourceInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceInUseException",
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
        $retryable: {},
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
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $retryable: {
          throttling: true,
        },
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
var deserializeAws_restJson1TooManyTagsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyTagsException",
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
var serializeAws_restJson1AccessLog = function (input, context) {
  return AccessLog.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1FileAccessLog(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1AwsCloudMapInstanceAttribute = function (input, context) {
  return __assign(
    __assign({}, input.key !== undefined && input.key !== null && { key: input.key }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1AwsCloudMapInstanceAttributes = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};
var serializeAws_restJson1AwsCloudMapServiceDiscovery = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.attributes !== undefined &&
          input.attributes !== null && {
            attributes: serializeAws_restJson1AwsCloudMapInstanceAttributes(input.attributes, context),
          }
      ),
      input.namespaceName !== undefined && input.namespaceName !== null && { namespaceName: input.namespaceName }
    ),
    input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }
  );
};
var serializeAws_restJson1Backend = function (input, context) {
  return Backend.visit(input, {
    virtualService: function (value) {
      return { virtualService: serializeAws_restJson1VirtualServiceBackend(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1BackendDefaults = function (input, context) {
  return __assign(
    {},
    input.clientPolicy !== undefined &&
      input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }
  );
};
var serializeAws_restJson1Backends = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Backend(entry, context);
    });
};
var serializeAws_restJson1CertificateAuthorityArns = function (input, context) {
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
var serializeAws_restJson1ClientPolicy = function (input, context) {
  return __assign(
    {},
    input.tls !== undefined && input.tls !== null && { tls: serializeAws_restJson1ClientPolicyTls(input.tls, context) }
  );
};
var serializeAws_restJson1ClientPolicyTls = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.certificate !== undefined &&
            input.certificate !== null && {
              certificate: serializeAws_restJson1ClientTlsCertificate(input.certificate, context),
            }
        ),
        input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }
      ),
      input.ports !== undefined &&
        input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }
    ),
    input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1TlsValidationContext(input.validation, context),
      }
  );
};
var serializeAws_restJson1ClientTlsCertificate = function (input, context) {
  return ClientTlsCertificate.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1DnsServiceDiscovery = function (input, context) {
  return __assign({}, input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname });
};
var serializeAws_restJson1Duration = function (input, context) {
  return __assign(
    __assign({}, input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1EgressFilter = function (input, context) {
  return __assign({}, input.type !== undefined && input.type !== null && { type: input.type });
};
var serializeAws_restJson1FileAccessLog = function (input, context) {
  return __assign({}, input.path !== undefined && input.path !== null && { path: input.path });
};
var serializeAws_restJson1GatewayRouteSpec = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.grpcRoute !== undefined &&
          input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcGatewayRoute(input.grpcRoute, context) }
      ),
      input.http2Route !== undefined &&
        input.http2Route !== null && { http2Route: serializeAws_restJson1HttpGatewayRoute(input.http2Route, context) }
    ),
    input.httpRoute !== undefined &&
      input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpGatewayRoute(input.httpRoute, context) }
  );
};
var serializeAws_restJson1GatewayRouteTarget = function (input, context) {
  return __assign(
    {},
    input.virtualService !== undefined &&
      input.virtualService !== null && {
        virtualService: serializeAws_restJson1GatewayRouteVirtualService(input.virtualService, context),
      }
  );
};
var serializeAws_restJson1GatewayRouteVirtualService = function (input, context) {
  return __assign(
    {},
    input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }
  );
};
var serializeAws_restJson1GrpcGatewayRoute = function (input, context) {
  return __assign(
    __assign(
      {},
      input.action !== undefined &&
        input.action !== null && { action: serializeAws_restJson1GrpcGatewayRouteAction(input.action, context) }
    ),
    input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcGatewayRouteMatch(input.match, context) }
  );
};
var serializeAws_restJson1GrpcGatewayRouteAction = function (input, context) {
  return __assign(
    {},
    input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }
  );
};
var serializeAws_restJson1GrpcGatewayRouteMatch = function (input, context) {
  return __assign(
    {},
    input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }
  );
};
var serializeAws_restJson1GrpcRetryPolicy = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.grpcRetryEvents !== undefined &&
              input.grpcRetryEvents !== null && {
                grpcRetryEvents: serializeAws_restJson1GrpcRetryPolicyEvents(input.grpcRetryEvents, context),
              }
          ),
          input.httpRetryEvents !== undefined &&
            input.httpRetryEvents !== null && {
              httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
            }
        ),
        input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }
      ),
      input.perRetryTimeout !== undefined &&
        input.perRetryTimeout !== null && {
          perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
        }
    ),
    input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
        tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
      }
  );
};
var serializeAws_restJson1GrpcRetryPolicyEvents = function (input, context) {
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
var serializeAws_restJson1GrpcRoute = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.action !== undefined &&
            input.action !== null && { action: serializeAws_restJson1GrpcRouteAction(input.action, context) }
        ),
        input.match !== undefined &&
          input.match !== null && { match: serializeAws_restJson1GrpcRouteMatch(input.match, context) }
      ),
      input.retryPolicy !== undefined &&
        input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1GrpcRetryPolicy(input.retryPolicy, context) }
    ),
    input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1GrpcTimeout(input.timeout, context) }
  );
};
var serializeAws_restJson1GrpcRouteAction = function (input, context) {
  return __assign(
    {},
    input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }
  );
};
var serializeAws_restJson1GrpcRouteMatch = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.metadata !== undefined &&
          input.metadata !== null && { metadata: serializeAws_restJson1GrpcRouteMetadataList(input.metadata, context) }
      ),
      input.methodName !== undefined && input.methodName !== null && { methodName: input.methodName }
    ),
    input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }
  );
};
var serializeAws_restJson1GrpcRouteMetadata = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.invert !== undefined && input.invert !== null && { invert: input.invert }),
      input.match !== undefined &&
        input.match !== null && { match: serializeAws_restJson1GrpcRouteMetadataMatchMethod(input.match, context) }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1GrpcRouteMetadataList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};
var serializeAws_restJson1GrpcRouteMetadataMatchMethod = function (input, context) {
  return GrpcRouteMetadataMatchMethod.visit(input, {
    exact: function (value) {
      return { exact: value };
    },
    prefix: function (value) {
      return { prefix: value };
    },
    range: function (value) {
      return { range: serializeAws_restJson1MatchRange(value, context) };
    },
    regex: function (value) {
      return { regex: value };
    },
    suffix: function (value) {
      return { suffix: value };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1GrpcTimeout = function (input, context) {
  return __assign(
    __assign(
      {},
      input.idle !== undefined && input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }
    ),
    input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }
  );
};
var serializeAws_restJson1HeaderMatchMethod = function (input, context) {
  return HeaderMatchMethod.visit(input, {
    exact: function (value) {
      return { exact: value };
    },
    prefix: function (value) {
      return { prefix: value };
    },
    range: function (value) {
      return { range: serializeAws_restJson1MatchRange(value, context) };
    },
    regex: function (value) {
      return { regex: value };
    },
    suffix: function (value) {
      return { suffix: value };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1HealthCheckPolicy = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.healthyThreshold !== undefined &&
                  input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }
              ),
              input.intervalMillis !== undefined &&
                input.intervalMillis !== null && { intervalMillis: input.intervalMillis }
            ),
            input.path !== undefined && input.path !== null && { path: input.path }
          ),
          input.port !== undefined && input.port !== null && { port: input.port }
        ),
        input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }
      ),
      input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }
    ),
    input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }
  );
};
var serializeAws_restJson1HttpGatewayRoute = function (input, context) {
  return __assign(
    __assign(
      {},
      input.action !== undefined &&
        input.action !== null && { action: serializeAws_restJson1HttpGatewayRouteAction(input.action, context) }
    ),
    input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HttpGatewayRouteMatch(input.match, context) }
  );
};
var serializeAws_restJson1HttpGatewayRouteAction = function (input, context) {
  return __assign(
    {},
    input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }
  );
};
var serializeAws_restJson1HttpGatewayRouteMatch = function (input, context) {
  return __assign({}, input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix });
};
var serializeAws_restJson1HttpRetryPolicy = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.httpRetryEvents !== undefined &&
            input.httpRetryEvents !== null && {
              httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
            }
        ),
        input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }
      ),
      input.perRetryTimeout !== undefined &&
        input.perRetryTimeout !== null && {
          perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
        }
    ),
    input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
        tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
      }
  );
};
var serializeAws_restJson1HttpRetryPolicyEvents = function (input, context) {
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
var serializeAws_restJson1HttpRoute = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.action !== undefined &&
            input.action !== null && { action: serializeAws_restJson1HttpRouteAction(input.action, context) }
        ),
        input.match !== undefined &&
          input.match !== null && { match: serializeAws_restJson1HttpRouteMatch(input.match, context) }
      ),
      input.retryPolicy !== undefined &&
        input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1HttpRetryPolicy(input.retryPolicy, context) }
    ),
    input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1HttpTimeout(input.timeout, context) }
  );
};
var serializeAws_restJson1HttpRouteAction = function (input, context) {
  return __assign(
    {},
    input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }
  );
};
var serializeAws_restJson1HttpRouteHeader = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.invert !== undefined && input.invert !== null && { invert: input.invert }),
      input.match !== undefined &&
        input.match !== null && { match: serializeAws_restJson1HeaderMatchMethod(input.match, context) }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1HttpRouteHeaders = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1HttpRouteHeader(entry, context);
    });
};
var serializeAws_restJson1HttpRouteMatch = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.headers !== undefined &&
            input.headers !== null && { headers: serializeAws_restJson1HttpRouteHeaders(input.headers, context) }
        ),
        input.method !== undefined && input.method !== null && { method: input.method }
      ),
      input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }
    ),
    input.scheme !== undefined && input.scheme !== null && { scheme: input.scheme }
  );
};
var serializeAws_restJson1HttpTimeout = function (input, context) {
  return __assign(
    __assign(
      {},
      input.idle !== undefined && input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }
    ),
    input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }
  );
};
var serializeAws_restJson1Listener = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.connectionPool !== undefined &&
                input.connectionPool !== null && {
                  connectionPool: serializeAws_restJson1VirtualNodeConnectionPool(input.connectionPool, context),
                }
            ),
            input.healthCheck !== undefined &&
              input.healthCheck !== null && {
                healthCheck: serializeAws_restJson1HealthCheckPolicy(input.healthCheck, context),
              }
          ),
          input.outlierDetection !== undefined &&
            input.outlierDetection !== null && {
              outlierDetection: serializeAws_restJson1OutlierDetection(input.outlierDetection, context),
            }
        ),
        input.portMapping !== undefined &&
          input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }
      ),
      input.timeout !== undefined &&
        input.timeout !== null && { timeout: serializeAws_restJson1ListenerTimeout(input.timeout, context) }
    ),
    input.tls !== undefined && input.tls !== null && { tls: serializeAws_restJson1ListenerTls(input.tls, context) }
  );
};
var serializeAws_restJson1Listeners = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Listener(entry, context);
    });
};
var serializeAws_restJson1ListenerTimeout = function (input, context) {
  return ListenerTimeout.visit(input, {
    grpc: function (value) {
      return { grpc: serializeAws_restJson1GrpcTimeout(value, context) };
    },
    http: function (value) {
      return { http: serializeAws_restJson1HttpTimeout(value, context) };
    },
    http2: function (value) {
      return { http2: serializeAws_restJson1HttpTimeout(value, context) };
    },
    tcp: function (value) {
      return { tcp: serializeAws_restJson1TcpTimeout(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1ListenerTls = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.certificate !== undefined &&
          input.certificate !== null && {
            certificate: serializeAws_restJson1ListenerTlsCertificate(input.certificate, context),
          }
      ),
      input.mode !== undefined && input.mode !== null && { mode: input.mode }
    ),
    input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1ListenerTlsValidationContext(input.validation, context),
      }
  );
};
var serializeAws_restJson1ListenerTlsAcmCertificate = function (input, context) {
  return __assign(
    {},
    input.certificateArn !== undefined && input.certificateArn !== null && { certificateArn: input.certificateArn }
  );
};
var serializeAws_restJson1ListenerTlsCertificate = function (input, context) {
  return ListenerTlsCertificate.visit(input, {
    acm: function (value) {
      return { acm: serializeAws_restJson1ListenerTlsAcmCertificate(value, context) };
    },
    file: function (value) {
      return { file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1ListenerTlsFileCertificate = function (input, context) {
  return __assign(
    __assign(
      {},
      input.certificateChain !== undefined &&
        input.certificateChain !== null && { certificateChain: input.certificateChain }
    ),
    input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }
  );
};
var serializeAws_restJson1ListenerTlsSdsCertificate = function (input, context) {
  return __assign({}, input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName });
};
var serializeAws_restJson1ListenerTlsValidationContext = function (input, context) {
  return __assign(
    __assign(
      {},
      input.subjectAlternativeNames !== undefined &&
        input.subjectAlternativeNames !== null && {
          subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(
            input.subjectAlternativeNames,
            context
          ),
        }
    ),
    input.trust !== undefined &&
      input.trust !== null && { trust: serializeAws_restJson1ListenerTlsValidationContextTrust(input.trust, context) }
  );
};
var serializeAws_restJson1ListenerTlsValidationContextTrust = function (input, context) {
  return ListenerTlsValidationContextTrust.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1Logging = function (input, context) {
  return __assign(
    {},
    input.accessLog !== undefined &&
      input.accessLog !== null && { accessLog: serializeAws_restJson1AccessLog(input.accessLog, context) }
  );
};
var serializeAws_restJson1MatchRange = function (input, context) {
  return __assign(
    __assign({}, input.end !== undefined && input.end !== null && { end: input.end }),
    input.start !== undefined && input.start !== null && { start: input.start }
  );
};
var serializeAws_restJson1MeshSpec = function (input, context) {
  return __assign(
    {},
    input.egressFilter !== undefined &&
      input.egressFilter !== null && { egressFilter: serializeAws_restJson1EgressFilter(input.egressFilter, context) }
  );
};
var serializeAws_restJson1OutlierDetection = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.baseEjectionDuration !== undefined &&
            input.baseEjectionDuration !== null && {
              baseEjectionDuration: serializeAws_restJson1Duration(input.baseEjectionDuration, context),
            }
        ),
        input.interval !== undefined &&
          input.interval !== null && { interval: serializeAws_restJson1Duration(input.interval, context) }
      ),
      input.maxEjectionPercent !== undefined &&
        input.maxEjectionPercent !== null && { maxEjectionPercent: input.maxEjectionPercent }
    ),
    input.maxServerErrors !== undefined && input.maxServerErrors !== null && { maxServerErrors: input.maxServerErrors }
  );
};
var serializeAws_restJson1PortMapping = function (input, context) {
  return __assign(
    __assign({}, input.port !== undefined && input.port !== null && { port: input.port }),
    input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }
  );
};
var serializeAws_restJson1PortSet = function (input, context) {
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
var serializeAws_restJson1RouteSpec = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.grpcRoute !== undefined &&
              input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcRoute(input.grpcRoute, context) }
          ),
          input.http2Route !== undefined &&
            input.http2Route !== null && { http2Route: serializeAws_restJson1HttpRoute(input.http2Route, context) }
        ),
        input.httpRoute !== undefined &&
          input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpRoute(input.httpRoute, context) }
      ),
      input.priority !== undefined && input.priority !== null && { priority: input.priority }
    ),
    input.tcpRoute !== undefined &&
      input.tcpRoute !== null && { tcpRoute: serializeAws_restJson1TcpRoute(input.tcpRoute, context) }
  );
};
var serializeAws_restJson1ServiceDiscovery = function (input, context) {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: function (value) {
      return { awsCloudMap: serializeAws_restJson1AwsCloudMapServiceDiscovery(value, context) };
    },
    dns: function (value) {
      return { dns: serializeAws_restJson1DnsServiceDiscovery(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1SubjectAlternativeNameList = function (input, context) {
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
var serializeAws_restJson1SubjectAlternativeNameMatchers = function (input, context) {
  return __assign(
    {},
    input.exact !== undefined &&
      input.exact !== null && { exact: serializeAws_restJson1SubjectAlternativeNameList(input.exact, context) }
  );
};
var serializeAws_restJson1SubjectAlternativeNames = function (input, context) {
  return __assign(
    {},
    input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1SubjectAlternativeNameMatchers(input.match, context) }
  );
};
var serializeAws_restJson1TagKeyList = function (input, context) {
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
var serializeAws_restJson1TagList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TagRef(entry, context);
    });
};
var serializeAws_restJson1TagRef = function (input, context) {
  return __assign(
    __assign({}, input.key !== undefined && input.key !== null && { key: input.key }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_restJson1TcpRetryPolicyEvents = function (input, context) {
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
var serializeAws_restJson1TcpRoute = function (input, context) {
  return __assign(
    __assign(
      {},
      input.action !== undefined &&
        input.action !== null && { action: serializeAws_restJson1TcpRouteAction(input.action, context) }
    ),
    input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1TcpTimeout(input.timeout, context) }
  );
};
var serializeAws_restJson1TcpRouteAction = function (input, context) {
  return __assign(
    {},
    input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }
  );
};
var serializeAws_restJson1TcpTimeout = function (input, context) {
  return __assign(
    {},
    input.idle !== undefined && input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }
  );
};
var serializeAws_restJson1TlsValidationContext = function (input, context) {
  return __assign(
    __assign(
      {},
      input.subjectAlternativeNames !== undefined &&
        input.subjectAlternativeNames !== null && {
          subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(
            input.subjectAlternativeNames,
            context
          ),
        }
    ),
    input.trust !== undefined &&
      input.trust !== null && { trust: serializeAws_restJson1TlsValidationContextTrust(input.trust, context) }
  );
};
var serializeAws_restJson1TlsValidationContextAcmTrust = function (input, context) {
  return __assign(
    {},
    input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
        certificateAuthorityArns: serializeAws_restJson1CertificateAuthorityArns(
          input.certificateAuthorityArns,
          context
        ),
      }
  );
};
var serializeAws_restJson1TlsValidationContextFileTrust = function (input, context) {
  return __assign(
    {},
    input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }
  );
};
var serializeAws_restJson1TlsValidationContextSdsTrust = function (input, context) {
  return __assign({}, input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName });
};
var serializeAws_restJson1TlsValidationContextTrust = function (input, context) {
  return TlsValidationContextTrust.visit(input, {
    acm: function (value) {
      return { acm: serializeAws_restJson1TlsValidationContextAcmTrust(value, context) };
    },
    file: function (value) {
      return { file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayAccessLog = function (input, context) {
  return VirtualGatewayAccessLog.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1VirtualGatewayFileAccessLog(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayBackendDefaults = function (input, context) {
  return __assign(
    {},
    input.clientPolicy !== undefined &&
      input.clientPolicy !== null && {
        clientPolicy: serializeAws_restJson1VirtualGatewayClientPolicy(input.clientPolicy, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayCertificateAuthorityArns = function (input, context) {
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
var serializeAws_restJson1VirtualGatewayClientPolicy = function (input, context) {
  return __assign(
    {},
    input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayClientPolicyTls(input.tls, context) }
  );
};
var serializeAws_restJson1VirtualGatewayClientPolicyTls = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.certificate !== undefined &&
            input.certificate !== null && {
              certificate: serializeAws_restJson1VirtualGatewayClientTlsCertificate(input.certificate, context),
            }
        ),
        input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }
      ),
      input.ports !== undefined &&
        input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }
    ),
    input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1VirtualGatewayTlsValidationContext(input.validation, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayClientTlsCertificate = function (input, context) {
  return VirtualGatewayClientTlsCertificate.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayConnectionPool = function (input, context) {
  return VirtualGatewayConnectionPool.visit(input, {
    grpc: function (value) {
      return { grpc: serializeAws_restJson1VirtualGatewayGrpcConnectionPool(value, context) };
    },
    http: function (value) {
      return { http: serializeAws_restJson1VirtualGatewayHttpConnectionPool(value, context) };
    },
    http2: function (value) {
      return { http2: serializeAws_restJson1VirtualGatewayHttp2ConnectionPool(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayFileAccessLog = function (input, context) {
  return __assign({}, input.path !== undefined && input.path !== null && { path: input.path });
};
var serializeAws_restJson1VirtualGatewayGrpcConnectionPool = function (input, context) {
  return __assign(
    {},
    input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }
  );
};
var serializeAws_restJson1VirtualGatewayHealthCheckPolicy = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.healthyThreshold !== undefined &&
                  input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }
              ),
              input.intervalMillis !== undefined &&
                input.intervalMillis !== null && { intervalMillis: input.intervalMillis }
            ),
            input.path !== undefined && input.path !== null && { path: input.path }
          ),
          input.port !== undefined && input.port !== null && { port: input.port }
        ),
        input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }
      ),
      input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }
    ),
    input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }
  );
};
var serializeAws_restJson1VirtualGatewayHttp2ConnectionPool = function (input, context) {
  return __assign(
    {},
    input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }
  );
};
var serializeAws_restJson1VirtualGatewayHttpConnectionPool = function (input, context) {
  return __assign(
    __assign(
      {},
      input.maxConnections !== undefined && input.maxConnections !== null && { maxConnections: input.maxConnections }
    ),
    input.maxPendingRequests !== undefined &&
      input.maxPendingRequests !== null && { maxPendingRequests: input.maxPendingRequests }
  );
};
var serializeAws_restJson1VirtualGatewayListener = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.connectionPool !== undefined &&
            input.connectionPool !== null && {
              connectionPool: serializeAws_restJson1VirtualGatewayConnectionPool(input.connectionPool, context),
            }
        ),
        input.healthCheck !== undefined &&
          input.healthCheck !== null && {
            healthCheck: serializeAws_restJson1VirtualGatewayHealthCheckPolicy(input.healthCheck, context),
          }
      ),
      input.portMapping !== undefined &&
        input.portMapping !== null && {
          portMapping: serializeAws_restJson1VirtualGatewayPortMapping(input.portMapping, context),
        }
    ),
    input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayListenerTls(input.tls, context) }
  );
};
var serializeAws_restJson1VirtualGatewayListeners = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};
var serializeAws_restJson1VirtualGatewayListenerTls = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.certificate !== undefined &&
          input.certificate !== null && {
            certificate: serializeAws_restJson1VirtualGatewayListenerTlsCertificate(input.certificate, context),
          }
      ),
      input.mode !== undefined && input.mode !== null && { mode: input.mode }
    ),
    input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1VirtualGatewayListenerTlsValidationContext(input.validation, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = function (input, context) {
  return __assign(
    {},
    input.certificateArn !== undefined && input.certificateArn !== null && { certificateArn: input.certificateArn }
  );
};
var serializeAws_restJson1VirtualGatewayListenerTlsCertificate = function (input, context) {
  return VirtualGatewayListenerTlsCertificate.visit(input, {
    acm: function (value) {
      return { acm: serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(value, context) };
    },
    file: function (value) {
      return { file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = function (input, context) {
  return __assign(
    __assign(
      {},
      input.certificateChain !== undefined &&
        input.certificateChain !== null && { certificateChain: input.certificateChain }
    ),
    input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }
  );
};
var serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = function (input, context) {
  return __assign({}, input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName });
};
var serializeAws_restJson1VirtualGatewayListenerTlsValidationContext = function (input, context) {
  return __assign(
    __assign(
      {},
      input.subjectAlternativeNames !== undefined &&
        input.subjectAlternativeNames !== null && {
          subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(
            input.subjectAlternativeNames,
            context
          ),
        }
    ),
    input.trust !== undefined &&
      input.trust !== null && {
        trust: serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust(input.trust, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = function (input, context) {
  return VirtualGatewayListenerTlsValidationContextTrust.visit(input, {
    file: function (value) {
      return { file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualGatewayLogging = function (input, context) {
  return __assign(
    {},
    input.accessLog !== undefined &&
      input.accessLog !== null && {
        accessLog: serializeAws_restJson1VirtualGatewayAccessLog(input.accessLog, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayPortMapping = function (input, context) {
  return __assign(
    __assign({}, input.port !== undefined && input.port !== null && { port: input.port }),
    input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }
  );
};
var serializeAws_restJson1VirtualGatewaySpec = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.backendDefaults !== undefined &&
          input.backendDefaults !== null && {
            backendDefaults: serializeAws_restJson1VirtualGatewayBackendDefaults(input.backendDefaults, context),
          }
      ),
      input.listeners !== undefined &&
        input.listeners !== null && {
          listeners: serializeAws_restJson1VirtualGatewayListeners(input.listeners, context),
        }
    ),
    input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1VirtualGatewayLogging(input.logging, context) }
  );
};
var serializeAws_restJson1VirtualGatewayTlsValidationContext = function (input, context) {
  return __assign(
    __assign(
      {},
      input.subjectAlternativeNames !== undefined &&
        input.subjectAlternativeNames !== null && {
          subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(
            input.subjectAlternativeNames,
            context
          ),
        }
    ),
    input.trust !== undefined &&
      input.trust !== null && {
        trust: serializeAws_restJson1VirtualGatewayTlsValidationContextTrust(input.trust, context),
      }
  );
};
var serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = function (input, context) {
  return __assign(
    {},
    input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
        certificateAuthorityArns: serializeAws_restJson1VirtualGatewayCertificateAuthorityArns(
          input.certificateAuthorityArns,
          context
        ),
      }
  );
};
var serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = function (input, context) {
  return __assign(
    {},
    input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }
  );
};
var serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = function (input, context) {
  return __assign({}, input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName });
};
var serializeAws_restJson1VirtualGatewayTlsValidationContextTrust = function (input, context) {
  return VirtualGatewayTlsValidationContextTrust.visit(input, {
    acm: function (value) {
      return { acm: serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(value, context) };
    },
    file: function (value) {
      return { file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) };
    },
    sds: function (value) {
      return { sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualNodeConnectionPool = function (input, context) {
  return VirtualNodeConnectionPool.visit(input, {
    grpc: function (value) {
      return { grpc: serializeAws_restJson1VirtualNodeGrpcConnectionPool(value, context) };
    },
    http: function (value) {
      return { http: serializeAws_restJson1VirtualNodeHttpConnectionPool(value, context) };
    },
    http2: function (value) {
      return { http2: serializeAws_restJson1VirtualNodeHttp2ConnectionPool(value, context) };
    },
    tcp: function (value) {
      return { tcp: serializeAws_restJson1VirtualNodeTcpConnectionPool(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualNodeGrpcConnectionPool = function (input, context) {
  return __assign(
    {},
    input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }
  );
};
var serializeAws_restJson1VirtualNodeHttp2ConnectionPool = function (input, context) {
  return __assign(
    {},
    input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }
  );
};
var serializeAws_restJson1VirtualNodeHttpConnectionPool = function (input, context) {
  return __assign(
    __assign(
      {},
      input.maxConnections !== undefined && input.maxConnections !== null && { maxConnections: input.maxConnections }
    ),
    input.maxPendingRequests !== undefined &&
      input.maxPendingRequests !== null && { maxPendingRequests: input.maxPendingRequests }
  );
};
var serializeAws_restJson1VirtualNodeServiceProvider = function (input, context) {
  return __assign(
    {},
    input.virtualNodeName !== undefined && input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }
  );
};
var serializeAws_restJson1VirtualNodeSpec = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.backendDefaults !== undefined &&
              input.backendDefaults !== null && {
                backendDefaults: serializeAws_restJson1BackendDefaults(input.backendDefaults, context),
              }
          ),
          input.backends !== undefined &&
            input.backends !== null && { backends: serializeAws_restJson1Backends(input.backends, context) }
        ),
        input.listeners !== undefined &&
          input.listeners !== null && { listeners: serializeAws_restJson1Listeners(input.listeners, context) }
      ),
      input.logging !== undefined &&
        input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }
    ),
    input.serviceDiscovery !== undefined &&
      input.serviceDiscovery !== null && {
        serviceDiscovery: serializeAws_restJson1ServiceDiscovery(input.serviceDiscovery, context),
      }
  );
};
var serializeAws_restJson1VirtualNodeTcpConnectionPool = function (input, context) {
  return __assign(
    {},
    input.maxConnections !== undefined && input.maxConnections !== null && { maxConnections: input.maxConnections }
  );
};
var serializeAws_restJson1VirtualRouterListener = function (input, context) {
  return __assign(
    {},
    input.portMapping !== undefined &&
      input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }
  );
};
var serializeAws_restJson1VirtualRouterListeners = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1VirtualRouterListener(entry, context);
    });
};
var serializeAws_restJson1VirtualRouterServiceProvider = function (input, context) {
  return __assign(
    {},
    input.virtualRouterName !== undefined &&
      input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }
  );
};
var serializeAws_restJson1VirtualRouterSpec = function (input, context) {
  return __assign(
    {},
    input.listeners !== undefined &&
      input.listeners !== null && {
        listeners: serializeAws_restJson1VirtualRouterListeners(input.listeners, context),
      }
  );
};
var serializeAws_restJson1VirtualServiceBackend = function (input, context) {
  return __assign(
    __assign(
      {},
      input.clientPolicy !== undefined &&
        input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }
    ),
    input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }
  );
};
var serializeAws_restJson1VirtualServiceProvider = function (input, context) {
  return VirtualServiceProvider.visit(input, {
    virtualNode: function (value) {
      return { virtualNode: serializeAws_restJson1VirtualNodeServiceProvider(value, context) };
    },
    virtualRouter: function (value) {
      return { virtualRouter: serializeAws_restJson1VirtualRouterServiceProvider(value, context) };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1VirtualServiceSpec = function (input, context) {
  return __assign(
    {},
    input.provider !== undefined &&
      input.provider !== null && { provider: serializeAws_restJson1VirtualServiceProvider(input.provider, context) }
  );
};
var serializeAws_restJson1WeightedTarget = function (input, context) {
  return __assign(
    __assign({}, input.virtualNode !== undefined && input.virtualNode !== null && { virtualNode: input.virtualNode }),
    input.weight !== undefined && input.weight !== null && { weight: input.weight }
  );
};
var serializeAws_restJson1WeightedTargets = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1WeightedTarget(entry, context);
    });
};
var deserializeAws_restJson1AccessLog = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1FileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1AwsCloudMapInstanceAttribute = function (output, context) {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1AwsCloudMapInstanceAttributes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};
var deserializeAws_restJson1AwsCloudMapServiceDiscovery = function (output, context) {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1AwsCloudMapInstanceAttributes(output.attributes, context)
        : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
var deserializeAws_restJson1Backend = function (output, context) {
  if (output.virtualService !== undefined && output.virtualService !== null) {
    return {
      virtualService: deserializeAws_restJson1VirtualServiceBackend(output.virtualService, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1BackendDefaults = function (output, context) {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context)
        : undefined,
  };
};
var deserializeAws_restJson1Backends = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Backend(entry, context);
    });
};
var deserializeAws_restJson1CertificateAuthorityArns = function (output, context) {
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
var deserializeAws_restJson1ClientPolicy = function (output, context) {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1ClientPolicyTls(output.tls, context)
        : undefined,
  };
};
var deserializeAws_restJson1ClientPolicyTls = function (output, context) {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1ClientTlsCertificate(output.certificate, context)
        : undefined,
    enforce: output.enforce !== undefined && output.enforce !== null ? output.enforce : undefined,
    ports:
      output.ports !== undefined && output.ports !== null
        ? deserializeAws_restJson1PortSet(output.ports, context)
        : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1TlsValidationContext(output.validation, context)
        : undefined,
  };
};
var deserializeAws_restJson1ClientTlsCertificate = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1DnsServiceDiscovery = function (output, context) {
  return {
    hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
  };
};
var deserializeAws_restJson1Duration = function (output, context) {
  return {
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1EgressFilter = function (output, context) {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1FileAccessLog = function (output, context) {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteData = function (output, context) {
  return {
    gatewayRouteName:
      output.gatewayRouteName !== undefined && output.gatewayRouteName !== null ? output.gatewayRouteName : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1GatewayRouteSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1GatewayRouteStatus(output.status, context)
        : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GatewayRouteRef(entry, context);
    });
};
var deserializeAws_restJson1GatewayRouteRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    gatewayRouteName:
      output.gatewayRouteName !== undefined && output.gatewayRouteName !== null ? output.gatewayRouteName : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteSpec = function (output, context) {
  return {
    grpcRoute:
      output.grpcRoute !== undefined && output.grpcRoute !== null
        ? deserializeAws_restJson1GrpcGatewayRoute(output.grpcRoute, context)
        : undefined,
    http2Route:
      output.http2Route !== undefined && output.http2Route !== null
        ? deserializeAws_restJson1HttpGatewayRoute(output.http2Route, context)
        : undefined,
    httpRoute:
      output.httpRoute !== undefined && output.httpRoute !== null
        ? deserializeAws_restJson1HttpGatewayRoute(output.httpRoute, context)
        : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteTarget = function (output, context) {
  return {
    virtualService:
      output.virtualService !== undefined && output.virtualService !== null
        ? deserializeAws_restJson1GatewayRouteVirtualService(output.virtualService, context)
        : undefined,
  };
};
var deserializeAws_restJson1GatewayRouteVirtualService = function (output, context) {
  return {
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  };
};
var deserializeAws_restJson1GrpcGatewayRoute = function (output, context) {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1GrpcGatewayRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcGatewayRouteMatch(output.match, context)
        : undefined,
  };
};
var deserializeAws_restJson1GrpcGatewayRouteAction = function (output, context) {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  };
};
var deserializeAws_restJson1GrpcGatewayRouteMatch = function (output, context) {
  return {
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
var deserializeAws_restJson1GrpcRetryPolicy = function (output, context) {
  return {
    grpcRetryEvents:
      output.grpcRetryEvents !== undefined && output.grpcRetryEvents !== null
        ? deserializeAws_restJson1GrpcRetryPolicyEvents(output.grpcRetryEvents, context)
        : undefined,
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  };
};
var deserializeAws_restJson1GrpcRetryPolicyEvents = function (output, context) {
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
var deserializeAws_restJson1GrpcRoute = function (output, context) {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1GrpcRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1GrpcRetryPolicy(output.retryPolicy, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1GrpcTimeout(output.timeout, context)
        : undefined,
  };
};
var deserializeAws_restJson1GrpcRouteAction = function (output, context) {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
var deserializeAws_restJson1GrpcRouteMatch = function (output, context) {
  return {
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1GrpcRouteMetadataList(output.metadata, context)
        : undefined,
    methodName: output.methodName !== undefined && output.methodName !== null ? output.methodName : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
var deserializeAws_restJson1GrpcRouteMetadata = function (output, context) {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcRouteMetadataMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1GrpcRouteMetadataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};
var deserializeAws_restJson1GrpcRouteMetadataMatchMethod = function (output, context) {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact,
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix,
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex,
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1GrpcTimeout = function (output, context) {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
    perRequest:
      output.perRequest !== undefined && output.perRequest !== null
        ? deserializeAws_restJson1Duration(output.perRequest, context)
        : undefined,
  };
};
var deserializeAws_restJson1HeaderMatchMethod = function (output, context) {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact,
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix,
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex,
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1HealthCheckPolicy = function (output, context) {
  return {
    healthyThreshold:
      output.healthyThreshold !== undefined && output.healthyThreshold !== null ? output.healthyThreshold : undefined,
    intervalMillis:
      output.intervalMillis !== undefined && output.intervalMillis !== null ? output.intervalMillis : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    timeoutMillis:
      output.timeoutMillis !== undefined && output.timeoutMillis !== null ? output.timeoutMillis : undefined,
    unhealthyThreshold:
      output.unhealthyThreshold !== undefined && output.unhealthyThreshold !== null
        ? output.unhealthyThreshold
        : undefined,
  };
};
var deserializeAws_restJson1HttpGatewayRoute = function (output, context) {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1HttpGatewayRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HttpGatewayRouteMatch(output.match, context)
        : undefined,
  };
};
var deserializeAws_restJson1HttpGatewayRouteAction = function (output, context) {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  };
};
var deserializeAws_restJson1HttpGatewayRouteMatch = function (output, context) {
  return {
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  };
};
var deserializeAws_restJson1HttpRetryPolicy = function (output, context) {
  return {
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  };
};
var deserializeAws_restJson1HttpRetryPolicyEvents = function (output, context) {
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
var deserializeAws_restJson1HttpRoute = function (output, context) {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1HttpRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HttpRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1HttpRetryPolicy(output.retryPolicy, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1HttpTimeout(output.timeout, context)
        : undefined,
  };
};
var deserializeAws_restJson1HttpRouteAction = function (output, context) {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
var deserializeAws_restJson1HttpRouteHeader = function (output, context) {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HeaderMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1HttpRouteHeaders = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1HttpRouteHeader(entry, context);
    });
};
var deserializeAws_restJson1HttpRouteMatch = function (output, context) {
  return {
    headers:
      output.headers !== undefined && output.headers !== null
        ? deserializeAws_restJson1HttpRouteHeaders(output.headers, context)
        : undefined,
    method: output.method !== undefined && output.method !== null ? output.method : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    scheme: output.scheme !== undefined && output.scheme !== null ? output.scheme : undefined,
  };
};
var deserializeAws_restJson1HttpTimeout = function (output, context) {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
    perRequest:
      output.perRequest !== undefined && output.perRequest !== null
        ? deserializeAws_restJson1Duration(output.perRequest, context)
        : undefined,
  };
};
var deserializeAws_restJson1Listener = function (output, context) {
  return {
    connectionPool:
      output.connectionPool !== undefined && output.connectionPool !== null
        ? deserializeAws_restJson1VirtualNodeConnectionPool(output.connectionPool, context)
        : undefined,
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_restJson1HealthCheckPolicy(output.healthCheck, context)
        : undefined,
    outlierDetection:
      output.outlierDetection !== undefined && output.outlierDetection !== null
        ? deserializeAws_restJson1OutlierDetection(output.outlierDetection, context)
        : undefined,
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1PortMapping(output.portMapping, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1ListenerTimeout(output.timeout, context)
        : undefined,
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1ListenerTls(output.tls, context)
        : undefined,
  };
};
var deserializeAws_restJson1Listeners = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Listener(entry, context);
    });
};
var deserializeAws_restJson1ListenerTimeout = function (output, context) {
  if (output.grpc !== undefined && output.grpc !== null) {
    return {
      grpc: deserializeAws_restJson1GrpcTimeout(output.grpc, context),
    };
  }
  if (output.http !== undefined && output.http !== null) {
    return {
      http: deserializeAws_restJson1HttpTimeout(output.http, context),
    };
  }
  if (output.http2 !== undefined && output.http2 !== null) {
    return {
      http2: deserializeAws_restJson1HttpTimeout(output.http2, context),
    };
  }
  if (output.tcp !== undefined && output.tcp !== null) {
    return {
      tcp: deserializeAws_restJson1TcpTimeout(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ListenerTls = function (output, context) {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1ListenerTlsCertificate(output.certificate, context)
        : undefined,
    mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1ListenerTlsValidationContext(output.validation, context)
        : undefined,
  };
};
var deserializeAws_restJson1ListenerTlsAcmCertificate = function (output, context) {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  };
};
var deserializeAws_restJson1ListenerTlsCertificate = function (output, context) {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1ListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ListenerTlsFileCertificate = function (output, context) {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  };
};
var deserializeAws_restJson1ListenerTlsSdsCertificate = function (output, context) {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
var deserializeAws_restJson1ListenerTlsValidationContext = function (output, context) {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1ListenerTlsValidationContextTrust(output.trust, context)
        : undefined,
  };
};
var deserializeAws_restJson1ListenerTlsValidationContextTrust = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1Logging = function (output, context) {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1AccessLog(output.accessLog, context)
        : undefined,
  };
};
var deserializeAws_restJson1MatchRange = function (output, context) {
  return {
    end: output.end !== undefined && output.end !== null ? output.end : undefined,
    start: output.start !== undefined && output.start !== null ? output.start : undefined,
  };
};
var deserializeAws_restJson1MeshData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1MeshSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1MeshStatus(output.status, context)
        : undefined,
  };
};
var deserializeAws_restJson1MeshList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1MeshRef(entry, context);
    });
};
var deserializeAws_restJson1MeshRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
var deserializeAws_restJson1MeshSpec = function (output, context) {
  return {
    egressFilter:
      output.egressFilter !== undefined && output.egressFilter !== null
        ? deserializeAws_restJson1EgressFilter(output.egressFilter, context)
        : undefined,
  };
};
var deserializeAws_restJson1MeshStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1OutlierDetection = function (output, context) {
  return {
    baseEjectionDuration:
      output.baseEjectionDuration !== undefined && output.baseEjectionDuration !== null
        ? deserializeAws_restJson1Duration(output.baseEjectionDuration, context)
        : undefined,
    interval:
      output.interval !== undefined && output.interval !== null
        ? deserializeAws_restJson1Duration(output.interval, context)
        : undefined,
    maxEjectionPercent:
      output.maxEjectionPercent !== undefined && output.maxEjectionPercent !== null
        ? output.maxEjectionPercent
        : undefined,
    maxServerErrors:
      output.maxServerErrors !== undefined && output.maxServerErrors !== null ? output.maxServerErrors : undefined,
  };
};
var deserializeAws_restJson1PortMapping = function (output, context) {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  };
};
var deserializeAws_restJson1PortSet = function (output, context) {
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
var deserializeAws_restJson1ResourceMetadata = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    uid: output.uid !== undefined && output.uid !== null ? output.uid : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
var deserializeAws_restJson1RouteData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    routeName: output.routeName !== undefined && output.routeName !== null ? output.routeName : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1RouteSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1RouteStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
var deserializeAws_restJson1RouteList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RouteRef(entry, context);
    });
};
var deserializeAws_restJson1RouteRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    routeName: output.routeName !== undefined && output.routeName !== null ? output.routeName : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
var deserializeAws_restJson1RouteSpec = function (output, context) {
  return {
    grpcRoute:
      output.grpcRoute !== undefined && output.grpcRoute !== null
        ? deserializeAws_restJson1GrpcRoute(output.grpcRoute, context)
        : undefined,
    http2Route:
      output.http2Route !== undefined && output.http2Route !== null
        ? deserializeAws_restJson1HttpRoute(output.http2Route, context)
        : undefined,
    httpRoute:
      output.httpRoute !== undefined && output.httpRoute !== null
        ? deserializeAws_restJson1HttpRoute(output.httpRoute, context)
        : undefined,
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    tcpRoute:
      output.tcpRoute !== undefined && output.tcpRoute !== null
        ? deserializeAws_restJson1TcpRoute(output.tcpRoute, context)
        : undefined,
  };
};
var deserializeAws_restJson1RouteStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1ServiceDiscovery = function (output, context) {
  if (output.awsCloudMap !== undefined && output.awsCloudMap !== null) {
    return {
      awsCloudMap: deserializeAws_restJson1AwsCloudMapServiceDiscovery(output.awsCloudMap, context),
    };
  }
  if (output.dns !== undefined && output.dns !== null) {
    return {
      dns: deserializeAws_restJson1DnsServiceDiscovery(output.dns, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1SubjectAlternativeNameList = function (output, context) {
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
var deserializeAws_restJson1SubjectAlternativeNameMatchers = function (output, context) {
  return {
    exact:
      output.exact !== undefined && output.exact !== null
        ? deserializeAws_restJson1SubjectAlternativeNameList(output.exact, context)
        : undefined,
  };
};
var deserializeAws_restJson1SubjectAlternativeNames = function (output, context) {
  return {
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1SubjectAlternativeNameMatchers(output.match, context)
        : undefined,
  };
};
var deserializeAws_restJson1TagList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TagRef(entry, context);
    });
};
var deserializeAws_restJson1TagRef = function (output, context) {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1TcpRetryPolicyEvents = function (output, context) {
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
var deserializeAws_restJson1TcpRoute = function (output, context) {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1TcpRouteAction(output.action, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1TcpTimeout(output.timeout, context)
        : undefined,
  };
};
var deserializeAws_restJson1TcpRouteAction = function (output, context) {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
var deserializeAws_restJson1TcpTimeout = function (output, context) {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
  };
};
var deserializeAws_restJson1TlsValidationContext = function (output, context) {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1TlsValidationContextTrust(output.trust, context)
        : undefined,
  };
};
var deserializeAws_restJson1TlsValidationContextAcmTrust = function (output, context) {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1CertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  };
};
var deserializeAws_restJson1TlsValidationContextFileTrust = function (output, context) {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  };
};
var deserializeAws_restJson1TlsValidationContextSdsTrust = function (output, context) {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
var deserializeAws_restJson1TlsValidationContextTrust = function (output, context) {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1TlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayAccessLog = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayFileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayBackendDefaults = function (output, context) {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicy(output.clientPolicy, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns = function (output, context) {
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
var deserializeAws_restJson1VirtualGatewayClientPolicy = function (output, context) {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicyTls(output.tls, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayClientPolicyTls = function (output, context) {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1VirtualGatewayClientTlsCertificate(output.certificate, context)
        : undefined,
    enforce: output.enforce !== undefined && output.enforce !== null ? output.enforce : undefined,
    ports:
      output.ports !== undefined && output.ports !== null
        ? deserializeAws_restJson1PortSet(output.ports, context)
        : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContext(output.validation, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayClientTlsCertificate = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayConnectionPool = function (output, context) {
  if (output.grpc !== undefined && output.grpc !== null) {
    return {
      grpc: deserializeAws_restJson1VirtualGatewayGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http !== undefined && output.http !== null) {
    return {
      http: deserializeAws_restJson1VirtualGatewayHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 !== undefined && output.http2 !== null) {
    return {
      http2: deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool(output.http2, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualGatewaySpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualGatewayStatus(output.status, context)
        : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayFileAccessLog = function (output, context) {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayGrpcConnectionPool = function (output, context) {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayHealthCheckPolicy = function (output, context) {
  return {
    healthyThreshold:
      output.healthyThreshold !== undefined && output.healthyThreshold !== null ? output.healthyThreshold : undefined,
    intervalMillis:
      output.intervalMillis !== undefined && output.intervalMillis !== null ? output.intervalMillis : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    timeoutMillis:
      output.timeoutMillis !== undefined && output.timeoutMillis !== null ? output.timeoutMillis : undefined,
    unhealthyThreshold:
      output.unhealthyThreshold !== undefined && output.unhealthyThreshold !== null
        ? output.unhealthyThreshold
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool = function (output, context) {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayHttpConnectionPool = function (output, context) {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
    maxPendingRequests:
      output.maxPendingRequests !== undefined && output.maxPendingRequests !== null
        ? output.maxPendingRequests
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualGatewayRef(entry, context);
    });
};
var deserializeAws_restJson1VirtualGatewayListener = function (output, context) {
  return {
    connectionPool:
      output.connectionPool !== undefined && output.connectionPool !== null
        ? deserializeAws_restJson1VirtualGatewayConnectionPool(output.connectionPool, context)
        : undefined,
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_restJson1VirtualGatewayHealthCheckPolicy(output.healthCheck, context)
        : undefined,
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1VirtualGatewayPortMapping(output.portMapping, context)
        : undefined,
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTls(output.tls, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListeners = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};
var deserializeAws_restJson1VirtualGatewayListenerTls = function (output, context) {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsCertificate(output.certificate, context)
        : undefined,
    mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext(output.validation, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = function (output, context) {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsCertificate = function (output, context) {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = function (output, context) {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = function (output, context) {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext = function (output, context) {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust(output.trust, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = function (output, context) {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualGatewayLogging = function (output, context) {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1VirtualGatewayAccessLog(output.accessLog, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayPortMapping = function (output, context) {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewaySpec = function (output, context) {
  return {
    backendDefaults:
      output.backendDefaults !== undefined && output.backendDefaults !== null
        ? deserializeAws_restJson1VirtualGatewayBackendDefaults(output.backendDefaults, context)
        : undefined,
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1VirtualGatewayListeners(output.listeners, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1VirtualGatewayLogging(output.logging, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayTlsValidationContext = function (output, context) {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust(output.trust, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = function (output, context) {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = function (output, context) {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = function (output, context) {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
var deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust = function (output, context) {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds !== undefined && output.sds !== null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualNodeConnectionPool = function (output, context) {
  if (output.grpc !== undefined && output.grpc !== null) {
    return {
      grpc: deserializeAws_restJson1VirtualNodeGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http !== undefined && output.http !== null) {
    return {
      http: deserializeAws_restJson1VirtualNodeHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 !== undefined && output.http2 !== null) {
    return {
      http2: deserializeAws_restJson1VirtualNodeHttp2ConnectionPool(output.http2, context),
    };
  }
  if (output.tcp !== undefined && output.tcp !== null) {
    return {
      tcp: deserializeAws_restJson1VirtualNodeTcpConnectionPool(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualNodeData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualNodeSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualNodeStatus(output.status, context)
        : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeGrpcConnectionPool = function (output, context) {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeHttp2ConnectionPool = function (output, context) {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeHttpConnectionPool = function (output, context) {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
    maxPendingRequests:
      output.maxPendingRequests !== undefined && output.maxPendingRequests !== null
        ? output.maxPendingRequests
        : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualNodeRef(entry, context);
    });
};
var deserializeAws_restJson1VirtualNodeRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeServiceProvider = function (output, context) {
  return {
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeSpec = function (output, context) {
  return {
    backendDefaults:
      output.backendDefaults !== undefined && output.backendDefaults !== null
        ? deserializeAws_restJson1BackendDefaults(output.backendDefaults, context)
        : undefined,
    backends:
      output.backends !== undefined && output.backends !== null
        ? deserializeAws_restJson1Backends(output.backends, context)
        : undefined,
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1Listeners(output.listeners, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1Logging(output.logging, context)
        : undefined,
    serviceDiscovery:
      output.serviceDiscovery !== undefined && output.serviceDiscovery !== null
        ? deserializeAws_restJson1ServiceDiscovery(output.serviceDiscovery, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1VirtualNodeTcpConnectionPool = function (output, context) {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualRouterSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualRouterStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualRouterRef(entry, context);
    });
};
var deserializeAws_restJson1VirtualRouterListener = function (output, context) {
  return {
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1PortMapping(output.portMapping, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterListeners = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualRouterListener(entry, context);
    });
};
var deserializeAws_restJson1VirtualRouterRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterServiceProvider = function (output, context) {
  return {
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterSpec = function (output, context) {
  return {
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1VirtualRouterListeners(output.listeners, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualRouterStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1VirtualServiceBackend = function (output, context) {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context)
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualServiceData = function (output, context) {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualServiceSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualServiceStatus(output.status, context)
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualServiceList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualServiceRef(entry, context);
    });
};
var deserializeAws_restJson1VirtualServiceProvider = function (output, context) {
  if (output.virtualNode !== undefined && output.virtualNode !== null) {
    return {
      virtualNode: deserializeAws_restJson1VirtualNodeServiceProvider(output.virtualNode, context),
    };
  }
  if (output.virtualRouter !== undefined && output.virtualRouter !== null) {
    return {
      virtualRouter: deserializeAws_restJson1VirtualRouterServiceProvider(output.virtualRouter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1VirtualServiceRef = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  };
};
var deserializeAws_restJson1VirtualServiceSpec = function (output, context) {
  return {
    provider:
      output.provider !== undefined && output.provider !== null
        ? deserializeAws_restJson1VirtualServiceProvider(output.provider, context)
        : undefined,
  };
};
var deserializeAws_restJson1VirtualServiceStatus = function (output, context) {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1WeightedTarget = function (output, context) {
  return {
    virtualNode: output.virtualNode !== undefined && output.virtualNode !== null ? output.virtualNode : undefined,
    weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
  };
};
var deserializeAws_restJson1WeightedTargets = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1WeightedTarget(entry, context);
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
