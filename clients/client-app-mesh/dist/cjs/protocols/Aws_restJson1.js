"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DeleteVirtualNodeCommand =
  exports.deserializeAws_restJson1DeleteVirtualGatewayCommand =
  exports.deserializeAws_restJson1DeleteRouteCommand =
  exports.deserializeAws_restJson1DeleteMeshCommand =
  exports.deserializeAws_restJson1DeleteGatewayRouteCommand =
  exports.deserializeAws_restJson1CreateVirtualServiceCommand =
  exports.deserializeAws_restJson1CreateVirtualRouterCommand =
  exports.deserializeAws_restJson1CreateVirtualNodeCommand =
  exports.deserializeAws_restJson1CreateVirtualGatewayCommand =
  exports.deserializeAws_restJson1CreateRouteCommand =
  exports.deserializeAws_restJson1CreateMeshCommand =
  exports.deserializeAws_restJson1CreateGatewayRouteCommand =
  exports.serializeAws_restJson1UpdateVirtualServiceCommand =
  exports.serializeAws_restJson1UpdateVirtualRouterCommand =
  exports.serializeAws_restJson1UpdateVirtualNodeCommand =
  exports.serializeAws_restJson1UpdateVirtualGatewayCommand =
  exports.serializeAws_restJson1UpdateRouteCommand =
  exports.serializeAws_restJson1UpdateMeshCommand =
  exports.serializeAws_restJson1UpdateGatewayRouteCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1ListVirtualServicesCommand =
  exports.serializeAws_restJson1ListVirtualRoutersCommand =
  exports.serializeAws_restJson1ListVirtualNodesCommand =
  exports.serializeAws_restJson1ListVirtualGatewaysCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListRoutesCommand =
  exports.serializeAws_restJson1ListMeshesCommand =
  exports.serializeAws_restJson1ListGatewayRoutesCommand =
  exports.serializeAws_restJson1DescribeVirtualServiceCommand =
  exports.serializeAws_restJson1DescribeVirtualRouterCommand =
  exports.serializeAws_restJson1DescribeVirtualNodeCommand =
  exports.serializeAws_restJson1DescribeVirtualGatewayCommand =
  exports.serializeAws_restJson1DescribeRouteCommand =
  exports.serializeAws_restJson1DescribeMeshCommand =
  exports.serializeAws_restJson1DescribeGatewayRouteCommand =
  exports.serializeAws_restJson1DeleteVirtualServiceCommand =
  exports.serializeAws_restJson1DeleteVirtualRouterCommand =
  exports.serializeAws_restJson1DeleteVirtualNodeCommand =
  exports.serializeAws_restJson1DeleteVirtualGatewayCommand =
  exports.serializeAws_restJson1DeleteRouteCommand =
  exports.serializeAws_restJson1DeleteMeshCommand =
  exports.serializeAws_restJson1DeleteGatewayRouteCommand =
  exports.serializeAws_restJson1CreateVirtualServiceCommand =
  exports.serializeAws_restJson1CreateVirtualRouterCommand =
  exports.serializeAws_restJson1CreateVirtualNodeCommand =
  exports.serializeAws_restJson1CreateVirtualGatewayCommand =
  exports.serializeAws_restJson1CreateRouteCommand =
  exports.serializeAws_restJson1CreateMeshCommand =
  exports.serializeAws_restJson1CreateGatewayRouteCommand =
    void 0;
exports.deserializeAws_restJson1UpdateVirtualServiceCommand =
  exports.deserializeAws_restJson1UpdateVirtualRouterCommand =
  exports.deserializeAws_restJson1UpdateVirtualNodeCommand =
  exports.deserializeAws_restJson1UpdateVirtualGatewayCommand =
  exports.deserializeAws_restJson1UpdateRouteCommand =
  exports.deserializeAws_restJson1UpdateMeshCommand =
  exports.deserializeAws_restJson1UpdateGatewayRouteCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1ListVirtualServicesCommand =
  exports.deserializeAws_restJson1ListVirtualRoutersCommand =
  exports.deserializeAws_restJson1ListVirtualNodesCommand =
  exports.deserializeAws_restJson1ListVirtualGatewaysCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListRoutesCommand =
  exports.deserializeAws_restJson1ListMeshesCommand =
  exports.deserializeAws_restJson1ListGatewayRoutesCommand =
  exports.deserializeAws_restJson1DescribeVirtualServiceCommand =
  exports.deserializeAws_restJson1DescribeVirtualRouterCommand =
  exports.deserializeAws_restJson1DescribeVirtualNodeCommand =
  exports.deserializeAws_restJson1DescribeVirtualGatewayCommand =
  exports.deserializeAws_restJson1DescribeRouteCommand =
  exports.deserializeAws_restJson1DescribeMeshCommand =
  exports.deserializeAws_restJson1DescribeGatewayRouteCommand =
  exports.deserializeAws_restJson1DeleteVirtualServiceCommand =
  exports.deserializeAws_restJson1DeleteVirtualRouterCommand =
    void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateGatewayRouteCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.gatewayRouteName !== undefined &&
      input.gatewayRouteName !== null && { gatewayRouteName: input.gatewayRouteName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateGatewayRouteCommand = serializeAws_restJson1CreateGatewayRouteCommand;
const serializeAws_restJson1CreateMeshCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes";
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.meshName !== undefined && input.meshName !== null && { meshName: input.meshName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1CreateMeshCommand = serializeAws_restJson1CreateMeshCommand;
const serializeAws_restJson1CreateRouteCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.routeName !== undefined && input.routeName !== null && { routeName: input.routeName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateRouteCommand = serializeAws_restJson1CreateRouteCommand;
const serializeAws_restJson1CreateVirtualGatewayCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualGatewayName !== undefined &&
      input.virtualGatewayName !== null && { virtualGatewayName: input.virtualGatewayName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateVirtualGatewayCommand = serializeAws_restJson1CreateVirtualGatewayCommand;
const serializeAws_restJson1CreateVirtualNodeCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualNodeName !== undefined &&
      input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateVirtualNodeCommand = serializeAws_restJson1CreateVirtualNodeCommand;
const serializeAws_restJson1CreateVirtualRouterCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualRouterName !== undefined &&
      input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateVirtualRouterCommand = serializeAws_restJson1CreateVirtualRouterCommand;
const serializeAws_restJson1CreateVirtualServiceCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1CreateVirtualServiceCommand = serializeAws_restJson1CreateVirtualServiceCommand;
const serializeAws_restJson1DeleteGatewayRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteGatewayRouteCommand = serializeAws_restJson1DeleteGatewayRouteCommand;
const serializeAws_restJson1DeleteMeshCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteMeshCommand = serializeAws_restJson1DeleteMeshCommand;
const serializeAws_restJson1DeleteRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteRouteCommand = serializeAws_restJson1DeleteRouteCommand;
const serializeAws_restJson1DeleteVirtualGatewayCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteVirtualGatewayCommand = serializeAws_restJson1DeleteVirtualGatewayCommand;
const serializeAws_restJson1DeleteVirtualNodeCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteVirtualNodeCommand = serializeAws_restJson1DeleteVirtualNodeCommand;
const serializeAws_restJson1DeleteVirtualRouterCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteVirtualRouterCommand = serializeAws_restJson1DeleteVirtualRouterCommand;
const serializeAws_restJson1DeleteVirtualServiceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
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
exports.serializeAws_restJson1DeleteVirtualServiceCommand = serializeAws_restJson1DeleteVirtualServiceCommand;
const serializeAws_restJson1DescribeGatewayRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeGatewayRouteCommand = serializeAws_restJson1DescribeGatewayRouteCommand;
const serializeAws_restJson1DescribeMeshCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeMeshCommand = serializeAws_restJson1DescribeMeshCommand;
const serializeAws_restJson1DescribeRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeRouteCommand = serializeAws_restJson1DescribeRouteCommand;
const serializeAws_restJson1DescribeVirtualGatewayCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeVirtualGatewayCommand = serializeAws_restJson1DescribeVirtualGatewayCommand;
const serializeAws_restJson1DescribeVirtualNodeCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeVirtualNodeCommand = serializeAws_restJson1DescribeVirtualNodeCommand;
const serializeAws_restJson1DescribeVirtualRouterCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeVirtualRouterCommand = serializeAws_restJson1DescribeVirtualRouterCommand;
const serializeAws_restJson1DescribeVirtualServiceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1DescribeVirtualServiceCommand = serializeAws_restJson1DescribeVirtualServiceCommand;
const serializeAws_restJson1ListGatewayRoutesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListGatewayRoutesCommand = serializeAws_restJson1ListGatewayRoutesCommand;
const serializeAws_restJson1ListMeshesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListMeshesCommand = serializeAws_restJson1ListMeshesCommand;
const serializeAws_restJson1ListRoutesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListRoutesCommand = serializeAws_restJson1ListRoutesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/tags";
  const query = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListVirtualGatewaysCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListVirtualGatewaysCommand = serializeAws_restJson1ListVirtualGatewaysCommand;
const serializeAws_restJson1ListVirtualNodesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListVirtualNodesCommand = serializeAws_restJson1ListVirtualNodesCommand;
const serializeAws_restJson1ListVirtualRoutersCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListVirtualRoutersCommand = serializeAws_restJson1ListVirtualRoutersCommand;
const serializeAws_restJson1ListVirtualServicesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListVirtualServicesCommand = serializeAws_restJson1ListVirtualServicesCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/tag";
  const query = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body;
  body = JSON.stringify({
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/untag";
  const query = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body;
  body = JSON.stringify({
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateGatewayRouteCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateGatewayRouteCommand = serializeAws_restJson1UpdateGatewayRouteCommand;
const serializeAws_restJson1UpdateMeshCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UpdateMeshCommand = serializeAws_restJson1UpdateMeshCommand;
const serializeAws_restJson1UpdateRouteCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateRouteCommand = serializeAws_restJson1UpdateRouteCommand;
const serializeAws_restJson1UpdateVirtualGatewayCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateVirtualGatewayCommand = serializeAws_restJson1UpdateVirtualGatewayCommand;
const serializeAws_restJson1UpdateVirtualNodeCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateVirtualNodeCommand = serializeAws_restJson1UpdateVirtualNodeCommand;
const serializeAws_restJson1UpdateVirtualRouterCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateVirtualRouterCommand = serializeAws_restJson1UpdateVirtualRouterCommand;
const serializeAws_restJson1UpdateVirtualServiceCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UpdateVirtualServiceCommand = serializeAws_restJson1UpdateVirtualServiceCommand;
const deserializeAws_restJson1CreateGatewayRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGatewayRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGatewayRouteCommand = deserializeAws_restJson1CreateGatewayRouteCommand;
const deserializeAws_restJson1CreateGatewayRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMeshCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeshCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMeshCommand = deserializeAws_restJson1CreateMeshCommand;
const deserializeAws_restJson1CreateMeshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRouteCommand = deserializeAws_restJson1CreateRouteCommand;
const deserializeAws_restJson1CreateRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateVirtualGatewayCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualGatewayCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVirtualGatewayCommand = deserializeAws_restJson1CreateVirtualGatewayCommand;
const deserializeAws_restJson1CreateVirtualGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateVirtualNodeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualNodeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVirtualNodeCommand = deserializeAws_restJson1CreateVirtualNodeCommand;
const deserializeAws_restJson1CreateVirtualNodeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateVirtualRouterCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualRouterCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVirtualRouterCommand = deserializeAws_restJson1CreateVirtualRouterCommand;
const deserializeAws_restJson1CreateVirtualRouterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateVirtualServiceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualServiceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVirtualServiceCommand = deserializeAws_restJson1CreateVirtualServiceCommand;
const deserializeAws_restJson1CreateVirtualServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGatewayRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGatewayRouteCommand = deserializeAws_restJson1DeleteGatewayRouteCommand;
const deserializeAws_restJson1DeleteGatewayRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMeshCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMeshCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMeshCommand = deserializeAws_restJson1DeleteMeshCommand;
const deserializeAws_restJson1DeleteMeshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteCommand = deserializeAws_restJson1DeleteRouteCommand;
const deserializeAws_restJson1DeleteRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteVirtualGatewayCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualGatewayCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVirtualGatewayCommand = deserializeAws_restJson1DeleteVirtualGatewayCommand;
const deserializeAws_restJson1DeleteVirtualGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteVirtualNodeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualNodeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVirtualNodeCommand = deserializeAws_restJson1DeleteVirtualNodeCommand;
const deserializeAws_restJson1DeleteVirtualNodeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteVirtualRouterCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualRouterCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVirtualRouterCommand = deserializeAws_restJson1DeleteVirtualRouterCommand;
const deserializeAws_restJson1DeleteVirtualRouterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteVirtualServiceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualServiceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVirtualServiceCommand = deserializeAws_restJson1DeleteVirtualServiceCommand;
const deserializeAws_restJson1DeleteVirtualServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeGatewayRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGatewayRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGatewayRouteCommand = deserializeAws_restJson1DescribeGatewayRouteCommand;
const deserializeAws_restJson1DescribeGatewayRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeMeshCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMeshCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMeshCommand = deserializeAws_restJson1DescribeMeshCommand;
const deserializeAws_restJson1DescribeMeshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRouteCommand = deserializeAws_restJson1DescribeRouteCommand;
const deserializeAws_restJson1DescribeRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeVirtualGatewayCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualGatewayCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVirtualGatewayCommand = deserializeAws_restJson1DescribeVirtualGatewayCommand;
const deserializeAws_restJson1DescribeVirtualGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeVirtualNodeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualNodeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVirtualNodeCommand = deserializeAws_restJson1DescribeVirtualNodeCommand;
const deserializeAws_restJson1DescribeVirtualNodeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeVirtualRouterCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualRouterCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVirtualRouterCommand = deserializeAws_restJson1DescribeVirtualRouterCommand;
const deserializeAws_restJson1DescribeVirtualRouterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeVirtualServiceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualServiceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVirtualServiceCommand = deserializeAws_restJson1DescribeVirtualServiceCommand;
const deserializeAws_restJson1DescribeVirtualServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGatewayRoutesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGatewayRoutesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    gatewayRoutes: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.gatewayRoutes !== undefined && data.gatewayRoutes !== null) {
    contents.gatewayRoutes = deserializeAws_restJson1GatewayRouteList(data.gatewayRoutes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGatewayRoutesCommand = deserializeAws_restJson1ListGatewayRoutesCommand;
const deserializeAws_restJson1ListGatewayRoutesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListMeshesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMeshesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    meshes: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.meshes !== undefined && data.meshes !== null) {
    contents.meshes = deserializeAws_restJson1MeshList(data.meshes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMeshesCommand = deserializeAws_restJson1ListMeshesCommand;
const deserializeAws_restJson1ListMeshesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRoutesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoutesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    routes: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.routes !== undefined && data.routes !== null) {
    contents.routes = deserializeAws_restJson1RouteList(data.routes, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRoutesCommand = deserializeAws_restJson1ListRoutesCommand;
const deserializeAws_restJson1ListRoutesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    nextToken: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVirtualGatewaysCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualGatewaysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualGateways: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualGateways !== undefined && data.virtualGateways !== null) {
    contents.virtualGateways = deserializeAws_restJson1VirtualGatewayList(data.virtualGateways, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVirtualGatewaysCommand = deserializeAws_restJson1ListVirtualGatewaysCommand;
const deserializeAws_restJson1ListVirtualGatewaysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVirtualNodesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualNodesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualNodes: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
    contents.virtualNodes = deserializeAws_restJson1VirtualNodeList(data.virtualNodes, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVirtualNodesCommand = deserializeAws_restJson1ListVirtualNodesCommand;
const deserializeAws_restJson1ListVirtualNodesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVirtualRoutersCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualRoutersCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualRouters: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
    contents.virtualRouters = deserializeAws_restJson1VirtualRouterList(data.virtualRouters, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVirtualRoutersCommand = deserializeAws_restJson1ListVirtualRoutersCommand;
const deserializeAws_restJson1ListVirtualRoutersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVirtualServicesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualServicesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualServices: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualServices !== undefined && data.virtualServices !== null) {
    contents.virtualServices = deserializeAws_restJson1VirtualServiceList(data.virtualServices, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVirtualServicesCommand = deserializeAws_restJson1ListVirtualServicesCommand;
const deserializeAws_restJson1ListVirtualServicesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.appmesh#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGatewayRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGatewayRouteCommand = deserializeAws_restJson1UpdateGatewayRouteCommand;
const deserializeAws_restJson1UpdateGatewayRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMeshCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMeshCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMeshCommand = deserializeAws_restJson1UpdateMeshCommand;
const deserializeAws_restJson1UpdateMeshCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRouteCommand = deserializeAws_restJson1UpdateRouteCommand;
const deserializeAws_restJson1UpdateRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateVirtualGatewayCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualGatewayCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVirtualGatewayCommand = deserializeAws_restJson1UpdateVirtualGatewayCommand;
const deserializeAws_restJson1UpdateVirtualGatewayCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateVirtualNodeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualNodeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVirtualNodeCommand = deserializeAws_restJson1UpdateVirtualNodeCommand;
const deserializeAws_restJson1UpdateVirtualNodeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateVirtualRouterCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualRouterCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVirtualRouterCommand = deserializeAws_restJson1UpdateVirtualRouterCommand;
const deserializeAws_restJson1UpdateVirtualRouterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateVirtualServiceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualServiceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVirtualServiceCommand = deserializeAws_restJson1UpdateVirtualServiceCommand;
const deserializeAws_restJson1UpdateVirtualServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "BadRequestException",
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ConflictException",
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ForbiddenException",
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
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServerErrorException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "LimitExceededException",
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
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotFoundException",
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
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceInUseException",
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
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyRequestsException",
    $fault: "client",
    $retryable: {
      throttling: true,
    },
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyTagsException",
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
const serializeAws_restJson1AccessLog = (input, context) => {
  return models_0_1.AccessLog.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1FileAccessLog(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1AwsCloudMapInstanceAttribute = (input, context) => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1AwsCloudMapInstanceAttributes = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};
const serializeAws_restJson1AwsCloudMapServiceDiscovery = (input, context) => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && {
        attributes: serializeAws_restJson1AwsCloudMapInstanceAttributes(input.attributes, context),
      }),
    ...(input.namespaceName !== undefined && input.namespaceName !== null && { namespaceName: input.namespaceName }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};
const serializeAws_restJson1Backend = (input, context) => {
  return models_0_1.Backend.visit(input, {
    virtualService: (value) => ({ virtualService: serializeAws_restJson1VirtualServiceBackend(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1BackendDefaults = (input, context) => {
  return {
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }),
  };
};
const serializeAws_restJson1Backends = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Backend(entry, context);
    });
};
const serializeAws_restJson1CertificateAuthorityArns = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ClientPolicy = (input, context) => {
  return {
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1ClientPolicyTls(input.tls, context) }),
  };
};
const serializeAws_restJson1ClientPolicyTls = (input, context) => {
  return {
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1ClientTlsCertificate(input.certificate, context),
      }),
    ...(input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }),
    ...(input.ports !== undefined &&
      input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1TlsValidationContext(input.validation, context),
      }),
  };
};
const serializeAws_restJson1ClientTlsCertificate = (input, context) => {
  return models_0_1.ClientTlsCertificate.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1DnsServiceDiscovery = (input, context) => {
  return {
    ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
  };
};
const serializeAws_restJson1Duration = (input, context) => {
  return {
    ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1EgressFilter = (input, context) => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};
const serializeAws_restJson1FileAccessLog = (input, context) => {
  return {
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};
const serializeAws_restJson1GatewayRouteSpec = (input, context) => {
  return {
    ...(input.grpcRoute !== undefined &&
      input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcGatewayRoute(input.grpcRoute, context) }),
    ...(input.http2Route !== undefined &&
      input.http2Route !== null && { http2Route: serializeAws_restJson1HttpGatewayRoute(input.http2Route, context) }),
    ...(input.httpRoute !== undefined &&
      input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpGatewayRoute(input.httpRoute, context) }),
  };
};
const serializeAws_restJson1GatewayRouteTarget = (input, context) => {
  return {
    ...(input.virtualService !== undefined &&
      input.virtualService !== null && {
        virtualService: serializeAws_restJson1GatewayRouteVirtualService(input.virtualService, context),
      }),
  };
};
const serializeAws_restJson1GatewayRouteVirtualService = (input, context) => {
  return {
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
  };
};
const serializeAws_restJson1GrpcGatewayRoute = (input, context) => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1GrpcGatewayRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcGatewayRouteMatch(input.match, context) }),
  };
};
const serializeAws_restJson1GrpcGatewayRouteAction = (input, context) => {
  return {
    ...(input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};
const serializeAws_restJson1GrpcGatewayRouteMatch = (input, context) => {
  return {
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};
const serializeAws_restJson1GrpcRetryPolicy = (input, context) => {
  return {
    ...(input.grpcRetryEvents !== undefined &&
      input.grpcRetryEvents !== null && {
        grpcRetryEvents: serializeAws_restJson1GrpcRetryPolicyEvents(input.grpcRetryEvents, context),
      }),
    ...(input.httpRetryEvents !== undefined &&
      input.httpRetryEvents !== null && {
        httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
      }),
    ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined &&
      input.perRetryTimeout !== null && {
        perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
      }),
    ...(input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
        tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
      }),
  };
};
const serializeAws_restJson1GrpcRetryPolicyEvents = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1GrpcRoute = (input, context) => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1GrpcRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcRouteMatch(input.match, context) }),
    ...(input.retryPolicy !== undefined &&
      input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1GrpcRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1GrpcTimeout(input.timeout, context) }),
  };
};
const serializeAws_restJson1GrpcRouteAction = (input, context) => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};
const serializeAws_restJson1GrpcRouteMatch = (input, context) => {
  return {
    ...(input.metadata !== undefined &&
      input.metadata !== null && { metadata: serializeAws_restJson1GrpcRouteMetadataList(input.metadata, context) }),
    ...(input.methodName !== undefined && input.methodName !== null && { methodName: input.methodName }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};
const serializeAws_restJson1GrpcRouteMetadata = (input, context) => {
  return {
    ...(input.invert !== undefined && input.invert !== null && { invert: input.invert }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcRouteMetadataMatchMethod(input.match, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1GrpcRouteMetadataList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};
const serializeAws_restJson1GrpcRouteMetadataMatchMethod = (input, context) => {
  return models_0_1.GrpcRouteMetadataMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: serializeAws_restJson1MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1GrpcTimeout = (input, context) => {
  return {
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
  };
};
const serializeAws_restJson1HeaderMatchMethod = (input, context) => {
  return models_0_1.HeaderMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: serializeAws_restJson1MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1HealthCheckPolicy = (input, context) => {
  return {
    ...(input.healthyThreshold !== undefined &&
      input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis !== undefined &&
      input.intervalMillis !== null && { intervalMillis: input.intervalMillis }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    ...(input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};
const serializeAws_restJson1HttpGatewayRoute = (input, context) => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1HttpGatewayRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HttpGatewayRouteMatch(input.match, context) }),
  };
};
const serializeAws_restJson1HttpGatewayRouteAction = (input, context) => {
  return {
    ...(input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};
const serializeAws_restJson1HttpGatewayRouteMatch = (input, context) => {
  return {
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};
const serializeAws_restJson1HttpRetryPolicy = (input, context) => {
  return {
    ...(input.httpRetryEvents !== undefined &&
      input.httpRetryEvents !== null && {
        httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
      }),
    ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined &&
      input.perRetryTimeout !== null && {
        perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
      }),
    ...(input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
        tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
      }),
  };
};
const serializeAws_restJson1HttpRetryPolicyEvents = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1HttpRoute = (input, context) => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1HttpRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HttpRouteMatch(input.match, context) }),
    ...(input.retryPolicy !== undefined &&
      input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1HttpRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1HttpTimeout(input.timeout, context) }),
  };
};
const serializeAws_restJson1HttpRouteAction = (input, context) => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};
const serializeAws_restJson1HttpRouteHeader = (input, context) => {
  return {
    ...(input.invert !== undefined && input.invert !== null && { invert: input.invert }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HeaderMatchMethod(input.match, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1HttpRouteHeaders = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1HttpRouteHeader(entry, context);
    });
};
const serializeAws_restJson1HttpRouteMatch = (input, context) => {
  return {
    ...(input.headers !== undefined &&
      input.headers !== null && { headers: serializeAws_restJson1HttpRouteHeaders(input.headers, context) }),
    ...(input.method !== undefined && input.method !== null && { method: input.method }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    ...(input.scheme !== undefined && input.scheme !== null && { scheme: input.scheme }),
  };
};
const serializeAws_restJson1HttpTimeout = (input, context) => {
  return {
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
  };
};
const serializeAws_restJson1Listener = (input, context) => {
  return {
    ...(input.connectionPool !== undefined &&
      input.connectionPool !== null && {
        connectionPool: serializeAws_restJson1VirtualNodeConnectionPool(input.connectionPool, context),
      }),
    ...(input.healthCheck !== undefined &&
      input.healthCheck !== null && {
        healthCheck: serializeAws_restJson1HealthCheckPolicy(input.healthCheck, context),
      }),
    ...(input.outlierDetection !== undefined &&
      input.outlierDetection !== null && {
        outlierDetection: serializeAws_restJson1OutlierDetection(input.outlierDetection, context),
      }),
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1ListenerTimeout(input.timeout, context) }),
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1ListenerTls(input.tls, context) }),
  };
};
const serializeAws_restJson1Listeners = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Listener(entry, context);
    });
};
const serializeAws_restJson1ListenerTimeout = (input, context) => {
  return models_0_1.ListenerTimeout.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1GrpcTimeout(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1HttpTimeout(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1HttpTimeout(value, context) }),
    tcp: (value) => ({ tcp: serializeAws_restJson1TcpTimeout(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1ListenerTls = (input, context) => {
  return {
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1ListenerTlsCertificate(input.certificate, context),
      }),
    ...(input.mode !== undefined && input.mode !== null && { mode: input.mode }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1ListenerTlsValidationContext(input.validation, context),
      }),
  };
};
const serializeAws_restJson1ListenerTlsAcmCertificate = (input, context) => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
  };
};
const serializeAws_restJson1ListenerTlsCertificate = (input, context) => {
  return models_0_1.ListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1ListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1ListenerTlsFileCertificate = (input, context) => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
    ...(input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }),
  };
};
const serializeAws_restJson1ListenerTlsSdsCertificate = (input, context) => {
  return {
    ...(input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName }),
  };
};
const serializeAws_restJson1ListenerTlsValidationContext = (input, context) => {
  return {
    ...(input.subjectAlternativeNames !== undefined &&
      input.subjectAlternativeNames !== null && {
        subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
      }),
    ...(input.trust !== undefined &&
      input.trust !== null && { trust: serializeAws_restJson1ListenerTlsValidationContextTrust(input.trust, context) }),
  };
};
const serializeAws_restJson1ListenerTlsValidationContextTrust = (input, context) => {
  return models_0_1.ListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1Logging = (input, context) => {
  return {
    ...(input.accessLog !== undefined &&
      input.accessLog !== null && { accessLog: serializeAws_restJson1AccessLog(input.accessLog, context) }),
  };
};
const serializeAws_restJson1MatchRange = (input, context) => {
  return {
    ...(input.end !== undefined && input.end !== null && { end: input.end }),
    ...(input.start !== undefined && input.start !== null && { start: input.start }),
  };
};
const serializeAws_restJson1MeshSpec = (input, context) => {
  return {
    ...(input.egressFilter !== undefined &&
      input.egressFilter !== null && { egressFilter: serializeAws_restJson1EgressFilter(input.egressFilter, context) }),
  };
};
const serializeAws_restJson1OutlierDetection = (input, context) => {
  return {
    ...(input.baseEjectionDuration !== undefined &&
      input.baseEjectionDuration !== null && {
        baseEjectionDuration: serializeAws_restJson1Duration(input.baseEjectionDuration, context),
      }),
    ...(input.interval !== undefined &&
      input.interval !== null && { interval: serializeAws_restJson1Duration(input.interval, context) }),
    ...(input.maxEjectionPercent !== undefined &&
      input.maxEjectionPercent !== null && { maxEjectionPercent: input.maxEjectionPercent }),
    ...(input.maxServerErrors !== undefined &&
      input.maxServerErrors !== null && { maxServerErrors: input.maxServerErrors }),
  };
};
const serializeAws_restJson1PortMapping = (input, context) => {
  return {
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};
const serializeAws_restJson1PortSet = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1RouteSpec = (input, context) => {
  return {
    ...(input.grpcRoute !== undefined &&
      input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcRoute(input.grpcRoute, context) }),
    ...(input.http2Route !== undefined &&
      input.http2Route !== null && { http2Route: serializeAws_restJson1HttpRoute(input.http2Route, context) }),
    ...(input.httpRoute !== undefined &&
      input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpRoute(input.httpRoute, context) }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.tcpRoute !== undefined &&
      input.tcpRoute !== null && { tcpRoute: serializeAws_restJson1TcpRoute(input.tcpRoute, context) }),
  };
};
const serializeAws_restJson1ServiceDiscovery = (input, context) => {
  return models_0_1.ServiceDiscovery.visit(input, {
    awsCloudMap: (value) => ({ awsCloudMap: serializeAws_restJson1AwsCloudMapServiceDiscovery(value, context) }),
    dns: (value) => ({ dns: serializeAws_restJson1DnsServiceDiscovery(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1SubjectAlternativeNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1SubjectAlternativeNameMatchers = (input, context) => {
  return {
    ...(input.exact !== undefined &&
      input.exact !== null && { exact: serializeAws_restJson1SubjectAlternativeNameList(input.exact, context) }),
  };
};
const serializeAws_restJson1SubjectAlternativeNames = (input, context) => {
  return {
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1SubjectAlternativeNameMatchers(input.match, context) }),
  };
};
const serializeAws_restJson1TagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1TagList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TagRef(entry, context);
    });
};
const serializeAws_restJson1TagRef = (input, context) => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1TcpRetryPolicyEvents = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1TcpRoute = (input, context) => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1TcpRouteAction(input.action, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1TcpTimeout(input.timeout, context) }),
  };
};
const serializeAws_restJson1TcpRouteAction = (input, context) => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};
const serializeAws_restJson1TcpTimeout = (input, context) => {
  return {
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
  };
};
const serializeAws_restJson1TlsValidationContext = (input, context) => {
  return {
    ...(input.subjectAlternativeNames !== undefined &&
      input.subjectAlternativeNames !== null && {
        subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
      }),
    ...(input.trust !== undefined &&
      input.trust !== null && { trust: serializeAws_restJson1TlsValidationContextTrust(input.trust, context) }),
  };
};
const serializeAws_restJson1TlsValidationContextAcmTrust = (input, context) => {
  return {
    ...(input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
        certificateAuthorityArns: serializeAws_restJson1CertificateAuthorityArns(
          input.certificateAuthorityArns,
          context
        ),
      }),
  };
};
const serializeAws_restJson1TlsValidationContextFileTrust = (input, context) => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
  };
};
const serializeAws_restJson1TlsValidationContextSdsTrust = (input, context) => {
  return {
    ...(input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName }),
  };
};
const serializeAws_restJson1TlsValidationContextTrust = (input, context) => {
  return models_0_1.TlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1TlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayAccessLog = (input, context) => {
  return models_0_1.VirtualGatewayAccessLog.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayFileAccessLog(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayBackendDefaults = (input, context) => {
  return {
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && {
        clientPolicy: serializeAws_restJson1VirtualGatewayClientPolicy(input.clientPolicy, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayCertificateAuthorityArns = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1VirtualGatewayClientPolicy = (input, context) => {
  return {
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayClientPolicyTls(input.tls, context) }),
  };
};
const serializeAws_restJson1VirtualGatewayClientPolicyTls = (input, context) => {
  return {
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1VirtualGatewayClientTlsCertificate(input.certificate, context),
      }),
    ...(input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }),
    ...(input.ports !== undefined &&
      input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1VirtualGatewayTlsValidationContext(input.validation, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayClientTlsCertificate = (input, context) => {
  return models_0_1.VirtualGatewayClientTlsCertificate.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayConnectionPool = (input, context) => {
  return models_0_1.VirtualGatewayConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1VirtualGatewayGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1VirtualGatewayHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1VirtualGatewayHttp2ConnectionPool(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayFileAccessLog = (input, context) => {
  return {
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};
const serializeAws_restJson1VirtualGatewayGrpcConnectionPool = (input, context) => {
  return {
    ...(input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }),
  };
};
const serializeAws_restJson1VirtualGatewayHealthCheckPolicy = (input, context) => {
  return {
    ...(input.healthyThreshold !== undefined &&
      input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis !== undefined &&
      input.intervalMillis !== null && { intervalMillis: input.intervalMillis }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    ...(input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};
const serializeAws_restJson1VirtualGatewayHttp2ConnectionPool = (input, context) => {
  return {
    ...(input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }),
  };
};
const serializeAws_restJson1VirtualGatewayHttpConnectionPool = (input, context) => {
  return {
    ...(input.maxConnections !== undefined &&
      input.maxConnections !== null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests !== undefined &&
      input.maxPendingRequests !== null && { maxPendingRequests: input.maxPendingRequests }),
  };
};
const serializeAws_restJson1VirtualGatewayListener = (input, context) => {
  return {
    ...(input.connectionPool !== undefined &&
      input.connectionPool !== null && {
        connectionPool: serializeAws_restJson1VirtualGatewayConnectionPool(input.connectionPool, context),
      }),
    ...(input.healthCheck !== undefined &&
      input.healthCheck !== null && {
        healthCheck: serializeAws_restJson1VirtualGatewayHealthCheckPolicy(input.healthCheck, context),
      }),
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && {
        portMapping: serializeAws_restJson1VirtualGatewayPortMapping(input.portMapping, context),
      }),
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayListenerTls(input.tls, context) }),
  };
};
const serializeAws_restJson1VirtualGatewayListeners = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};
const serializeAws_restJson1VirtualGatewayListenerTls = (input, context) => {
  return {
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1VirtualGatewayListenerTlsCertificate(input.certificate, context),
      }),
    ...(input.mode !== undefined && input.mode !== null && { mode: input.mode }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1VirtualGatewayListenerTlsValidationContext(input.validation, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (input, context) => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
  };
};
const serializeAws_restJson1VirtualGatewayListenerTlsCertificate = (input, context) => {
  return models_0_1.VirtualGatewayListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (input, context) => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
    ...(input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }),
  };
};
const serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = (input, context) => {
  return {
    ...(input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName }),
  };
};
const serializeAws_restJson1VirtualGatewayListenerTlsValidationContext = (input, context) => {
  return {
    ...(input.subjectAlternativeNames !== undefined &&
      input.subjectAlternativeNames !== null && {
        subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
      }),
    ...(input.trust !== undefined &&
      input.trust !== null && {
        trust: serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust(input.trust, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = (input, context) => {
  return models_0_1.VirtualGatewayListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualGatewayLogging = (input, context) => {
  return {
    ...(input.accessLog !== undefined &&
      input.accessLog !== null && {
        accessLog: serializeAws_restJson1VirtualGatewayAccessLog(input.accessLog, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayPortMapping = (input, context) => {
  return {
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};
const serializeAws_restJson1VirtualGatewaySpec = (input, context) => {
  return {
    ...(input.backendDefaults !== undefined &&
      input.backendDefaults !== null && {
        backendDefaults: serializeAws_restJson1VirtualGatewayBackendDefaults(input.backendDefaults, context),
      }),
    ...(input.listeners !== undefined &&
      input.listeners !== null && {
        listeners: serializeAws_restJson1VirtualGatewayListeners(input.listeners, context),
      }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1VirtualGatewayLogging(input.logging, context) }),
  };
};
const serializeAws_restJson1VirtualGatewayTlsValidationContext = (input, context) => {
  return {
    ...(input.subjectAlternativeNames !== undefined &&
      input.subjectAlternativeNames !== null && {
        subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
      }),
    ...(input.trust !== undefined &&
      input.trust !== null && {
        trust: serializeAws_restJson1VirtualGatewayTlsValidationContextTrust(input.trust, context),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (input, context) => {
  return {
    ...(input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
        certificateAuthorityArns: serializeAws_restJson1VirtualGatewayCertificateAuthorityArns(
          input.certificateAuthorityArns,
          context
        ),
      }),
  };
};
const serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = (input, context) => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
  };
};
const serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = (input, context) => {
  return {
    ...(input.secretName !== undefined && input.secretName !== null && { secretName: input.secretName }),
  };
};
const serializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (input, context) => {
  return models_0_1.VirtualGatewayTlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualNodeConnectionPool = (input, context) => {
  return models_0_1.VirtualNodeConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1VirtualNodeGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1VirtualNodeHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1VirtualNodeHttp2ConnectionPool(value, context) }),
    tcp: (value) => ({ tcp: serializeAws_restJson1VirtualNodeTcpConnectionPool(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualNodeGrpcConnectionPool = (input, context) => {
  return {
    ...(input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }),
  };
};
const serializeAws_restJson1VirtualNodeHttp2ConnectionPool = (input, context) => {
  return {
    ...(input.maxRequests !== undefined && input.maxRequests !== null && { maxRequests: input.maxRequests }),
  };
};
const serializeAws_restJson1VirtualNodeHttpConnectionPool = (input, context) => {
  return {
    ...(input.maxConnections !== undefined &&
      input.maxConnections !== null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests !== undefined &&
      input.maxPendingRequests !== null && { maxPendingRequests: input.maxPendingRequests }),
  };
};
const serializeAws_restJson1VirtualNodeServiceProvider = (input, context) => {
  return {
    ...(input.virtualNodeName !== undefined &&
      input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }),
  };
};
const serializeAws_restJson1VirtualNodeSpec = (input, context) => {
  return {
    ...(input.backendDefaults !== undefined &&
      input.backendDefaults !== null && {
        backendDefaults: serializeAws_restJson1BackendDefaults(input.backendDefaults, context),
      }),
    ...(input.backends !== undefined &&
      input.backends !== null && { backends: serializeAws_restJson1Backends(input.backends, context) }),
    ...(input.listeners !== undefined &&
      input.listeners !== null && { listeners: serializeAws_restJson1Listeners(input.listeners, context) }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.serviceDiscovery !== undefined &&
      input.serviceDiscovery !== null && {
        serviceDiscovery: serializeAws_restJson1ServiceDiscovery(input.serviceDiscovery, context),
      }),
  };
};
const serializeAws_restJson1VirtualNodeTcpConnectionPool = (input, context) => {
  return {
    ...(input.maxConnections !== undefined &&
      input.maxConnections !== null && { maxConnections: input.maxConnections }),
  };
};
const serializeAws_restJson1VirtualRouterListener = (input, context) => {
  return {
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
  };
};
const serializeAws_restJson1VirtualRouterListeners = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1VirtualRouterListener(entry, context);
    });
};
const serializeAws_restJson1VirtualRouterServiceProvider = (input, context) => {
  return {
    ...(input.virtualRouterName !== undefined &&
      input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }),
  };
};
const serializeAws_restJson1VirtualRouterSpec = (input, context) => {
  return {
    ...(input.listeners !== undefined &&
      input.listeners !== null && {
        listeners: serializeAws_restJson1VirtualRouterListeners(input.listeners, context),
      }),
  };
};
const serializeAws_restJson1VirtualServiceBackend = (input, context) => {
  return {
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }),
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
  };
};
const serializeAws_restJson1VirtualServiceProvider = (input, context) => {
  return models_0_1.VirtualServiceProvider.visit(input, {
    virtualNode: (value) => ({ virtualNode: serializeAws_restJson1VirtualNodeServiceProvider(value, context) }),
    virtualRouter: (value) => ({ virtualRouter: serializeAws_restJson1VirtualRouterServiceProvider(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1VirtualServiceSpec = (input, context) => {
  return {
    ...(input.provider !== undefined &&
      input.provider !== null && { provider: serializeAws_restJson1VirtualServiceProvider(input.provider, context) }),
  };
};
const serializeAws_restJson1WeightedTarget = (input, context) => {
  return {
    ...(input.virtualNode !== undefined && input.virtualNode !== null && { virtualNode: input.virtualNode }),
    ...(input.weight !== undefined && input.weight !== null && { weight: input.weight }),
  };
};
const serializeAws_restJson1WeightedTargets = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1WeightedTarget(entry, context);
    });
};
const deserializeAws_restJson1AccessLog = (output, context) => {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1FileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1AwsCloudMapInstanceAttribute = (output, context) => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1AwsCloudMapInstanceAttributes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};
const deserializeAws_restJson1AwsCloudMapServiceDiscovery = (output, context) => {
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
const deserializeAws_restJson1Backend = (output, context) => {
  if (output.virtualService !== undefined && output.virtualService !== null) {
    return {
      virtualService: deserializeAws_restJson1VirtualServiceBackend(output.virtualService, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1BackendDefaults = (output, context) => {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context)
        : undefined,
  };
};
const deserializeAws_restJson1Backends = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Backend(entry, context);
    });
};
const deserializeAws_restJson1CertificateAuthorityArns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ClientPolicy = (output, context) => {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1ClientPolicyTls(output.tls, context)
        : undefined,
  };
};
const deserializeAws_restJson1ClientPolicyTls = (output, context) => {
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
const deserializeAws_restJson1ClientTlsCertificate = (output, context) => {
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
const deserializeAws_restJson1DnsServiceDiscovery = (output, context) => {
  return {
    hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
  };
};
const deserializeAws_restJson1Duration = (output, context) => {
  return {
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1EgressFilter = (output, context) => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1FileAccessLog = (output, context) => {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  };
};
const deserializeAws_restJson1GatewayRouteData = (output, context) => {
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
const deserializeAws_restJson1GatewayRouteList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GatewayRouteRef(entry, context);
    });
};
const deserializeAws_restJson1GatewayRouteRef = (output, context) => {
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
const deserializeAws_restJson1GatewayRouteSpec = (output, context) => {
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
const deserializeAws_restJson1GatewayRouteStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1GatewayRouteTarget = (output, context) => {
  return {
    virtualService:
      output.virtualService !== undefined && output.virtualService !== null
        ? deserializeAws_restJson1GatewayRouteVirtualService(output.virtualService, context)
        : undefined,
  };
};
const deserializeAws_restJson1GatewayRouteVirtualService = (output, context) => {
  return {
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  };
};
const deserializeAws_restJson1GrpcGatewayRoute = (output, context) => {
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
const deserializeAws_restJson1GrpcGatewayRouteAction = (output, context) => {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  };
};
const deserializeAws_restJson1GrpcGatewayRouteMatch = (output, context) => {
  return {
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
const deserializeAws_restJson1GrpcRetryPolicy = (output, context) => {
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
const deserializeAws_restJson1GrpcRetryPolicyEvents = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1GrpcRoute = (output, context) => {
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
const deserializeAws_restJson1GrpcRouteAction = (output, context) => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
const deserializeAws_restJson1GrpcRouteMatch = (output, context) => {
  return {
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1GrpcRouteMetadataList(output.metadata, context)
        : undefined,
    methodName: output.methodName !== undefined && output.methodName !== null ? output.methodName : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
const deserializeAws_restJson1GrpcRouteMetadata = (output, context) => {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcRouteMetadataMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1GrpcRouteMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};
const deserializeAws_restJson1GrpcRouteMetadataMatchMethod = (output, context) => {
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
const deserializeAws_restJson1GrpcTimeout = (output, context) => {
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
const deserializeAws_restJson1HeaderMatchMethod = (output, context) => {
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
const deserializeAws_restJson1HealthCheckPolicy = (output, context) => {
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
const deserializeAws_restJson1HttpGatewayRoute = (output, context) => {
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
const deserializeAws_restJson1HttpGatewayRouteAction = (output, context) => {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  };
};
const deserializeAws_restJson1HttpGatewayRouteMatch = (output, context) => {
  return {
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  };
};
const deserializeAws_restJson1HttpRetryPolicy = (output, context) => {
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
const deserializeAws_restJson1HttpRetryPolicyEvents = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1HttpRoute = (output, context) => {
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
const deserializeAws_restJson1HttpRouteAction = (output, context) => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
const deserializeAws_restJson1HttpRouteHeader = (output, context) => {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HeaderMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1HttpRouteHeaders = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1HttpRouteHeader(entry, context);
    });
};
const deserializeAws_restJson1HttpRouteMatch = (output, context) => {
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
const deserializeAws_restJson1HttpTimeout = (output, context) => {
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
const deserializeAws_restJson1Listener = (output, context) => {
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
const deserializeAws_restJson1Listeners = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Listener(entry, context);
    });
};
const deserializeAws_restJson1ListenerTimeout = (output, context) => {
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
const deserializeAws_restJson1ListenerTls = (output, context) => {
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
const deserializeAws_restJson1ListenerTlsAcmCertificate = (output, context) => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  };
};
const deserializeAws_restJson1ListenerTlsCertificate = (output, context) => {
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
const deserializeAws_restJson1ListenerTlsFileCertificate = (output, context) => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  };
};
const deserializeAws_restJson1ListenerTlsSdsCertificate = (output, context) => {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
const deserializeAws_restJson1ListenerTlsValidationContext = (output, context) => {
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
const deserializeAws_restJson1ListenerTlsValidationContextTrust = (output, context) => {
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
const deserializeAws_restJson1Logging = (output, context) => {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1AccessLog(output.accessLog, context)
        : undefined,
  };
};
const deserializeAws_restJson1MatchRange = (output, context) => {
  return {
    end: output.end !== undefined && output.end !== null ? output.end : undefined,
    start: output.start !== undefined && output.start !== null ? output.start : undefined,
  };
};
const deserializeAws_restJson1MeshData = (output, context) => {
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
const deserializeAws_restJson1MeshList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1MeshRef(entry, context);
    });
};
const deserializeAws_restJson1MeshRef = (output, context) => {
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
const deserializeAws_restJson1MeshSpec = (output, context) => {
  return {
    egressFilter:
      output.egressFilter !== undefined && output.egressFilter !== null
        ? deserializeAws_restJson1EgressFilter(output.egressFilter, context)
        : undefined,
  };
};
const deserializeAws_restJson1MeshStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1OutlierDetection = (output, context) => {
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
const deserializeAws_restJson1PortMapping = (output, context) => {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  };
};
const deserializeAws_restJson1PortSet = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ResourceMetadata = (output, context) => {
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
const deserializeAws_restJson1RouteData = (output, context) => {
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
const deserializeAws_restJson1RouteList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RouteRef(entry, context);
    });
};
const deserializeAws_restJson1RouteRef = (output, context) => {
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
const deserializeAws_restJson1RouteSpec = (output, context) => {
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
const deserializeAws_restJson1RouteStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1ServiceDiscovery = (output, context) => {
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
const deserializeAws_restJson1SubjectAlternativeNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1SubjectAlternativeNameMatchers = (output, context) => {
  return {
    exact:
      output.exact !== undefined && output.exact !== null
        ? deserializeAws_restJson1SubjectAlternativeNameList(output.exact, context)
        : undefined,
  };
};
const deserializeAws_restJson1SubjectAlternativeNames = (output, context) => {
  return {
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1SubjectAlternativeNameMatchers(output.match, context)
        : undefined,
  };
};
const deserializeAws_restJson1TagList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TagRef(entry, context);
    });
};
const deserializeAws_restJson1TagRef = (output, context) => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1TcpRetryPolicyEvents = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1TcpRoute = (output, context) => {
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
const deserializeAws_restJson1TcpRouteAction = (output, context) => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  };
};
const deserializeAws_restJson1TcpTimeout = (output, context) => {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
  };
};
const deserializeAws_restJson1TlsValidationContext = (output, context) => {
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
const deserializeAws_restJson1TlsValidationContextAcmTrust = (output, context) => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1CertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  };
};
const deserializeAws_restJson1TlsValidationContextFileTrust = (output, context) => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  };
};
const deserializeAws_restJson1TlsValidationContextSdsTrust = (output, context) => {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
const deserializeAws_restJson1TlsValidationContextTrust = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayAccessLog = (output, context) => {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayFileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1VirtualGatewayBackendDefaults = (output, context) => {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicy(output.clientPolicy, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1VirtualGatewayClientPolicy = (output, context) => {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicyTls(output.tls, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayClientPolicyTls = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayClientTlsCertificate = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayConnectionPool = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayData = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayFileAccessLog = (output, context) => {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayGrpcConnectionPool = (output, context) => {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayHealthCheckPolicy = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool = (output, context) => {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayHttpConnectionPool = (output, context) => {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
    maxPendingRequests:
      output.maxPendingRequests !== undefined && output.maxPendingRequests !== null
        ? output.maxPendingRequests
        : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualGatewayRef(entry, context);
    });
};
const deserializeAws_restJson1VirtualGatewayListener = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayListeners = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};
const deserializeAws_restJson1VirtualGatewayListenerTls = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (output, context) => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayListenerTlsCertificate = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (output, context) => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = (output, context) => {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayLogging = (output, context) => {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1VirtualGatewayAccessLog(output.accessLog, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayPortMapping = (output, context) => {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayRef = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewaySpec = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayTlsValidationContext = (output, context) => {
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
const deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (output, context) => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = (output, context) => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = (output, context) => {
  return {
    secretName: output.secretName !== undefined && output.secretName !== null ? output.secretName : undefined,
  };
};
const deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (output, context) => {
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
const deserializeAws_restJson1VirtualNodeConnectionPool = (output, context) => {
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
const deserializeAws_restJson1VirtualNodeData = (output, context) => {
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
const deserializeAws_restJson1VirtualNodeGrpcConnectionPool = (output, context) => {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
const deserializeAws_restJson1VirtualNodeHttp2ConnectionPool = (output, context) => {
  return {
    maxRequests: output.maxRequests !== undefined && output.maxRequests !== null ? output.maxRequests : undefined,
  };
};
const deserializeAws_restJson1VirtualNodeHttpConnectionPool = (output, context) => {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
    maxPendingRequests:
      output.maxPendingRequests !== undefined && output.maxPendingRequests !== null
        ? output.maxPendingRequests
        : undefined,
  };
};
const deserializeAws_restJson1VirtualNodeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualNodeRef(entry, context);
    });
};
const deserializeAws_restJson1VirtualNodeRef = (output, context) => {
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
const deserializeAws_restJson1VirtualNodeServiceProvider = (output, context) => {
  return {
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  };
};
const deserializeAws_restJson1VirtualNodeSpec = (output, context) => {
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
const deserializeAws_restJson1VirtualNodeStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1VirtualNodeTcpConnectionPool = (output, context) => {
  return {
    maxConnections:
      output.maxConnections !== undefined && output.maxConnections !== null ? output.maxConnections : undefined,
  };
};
const deserializeAws_restJson1VirtualRouterData = (output, context) => {
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
const deserializeAws_restJson1VirtualRouterList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualRouterRef(entry, context);
    });
};
const deserializeAws_restJson1VirtualRouterListener = (output, context) => {
  return {
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1PortMapping(output.portMapping, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualRouterListeners = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualRouterListener(entry, context);
    });
};
const deserializeAws_restJson1VirtualRouterRef = (output, context) => {
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
const deserializeAws_restJson1VirtualRouterServiceProvider = (output, context) => {
  return {
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  };
};
const deserializeAws_restJson1VirtualRouterSpec = (output, context) => {
  return {
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1VirtualRouterListeners(output.listeners, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualRouterStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1VirtualServiceBackend = (output, context) => {
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
const deserializeAws_restJson1VirtualServiceData = (output, context) => {
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
const deserializeAws_restJson1VirtualServiceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VirtualServiceRef(entry, context);
    });
};
const deserializeAws_restJson1VirtualServiceProvider = (output, context) => {
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
const deserializeAws_restJson1VirtualServiceRef = (output, context) => {
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
const deserializeAws_restJson1VirtualServiceSpec = (output, context) => {
  return {
    provider:
      output.provider !== undefined && output.provider !== null
        ? deserializeAws_restJson1VirtualServiceProvider(output.provider, context)
        : undefined,
  };
};
const deserializeAws_restJson1VirtualServiceStatus = (output, context) => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1WeightedTarget = (output, context) => {
  return {
    virtualNode: output.virtualNode !== undefined && output.virtualNode !== null ? output.virtualNode : undefined,
    weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
  };
};
const deserializeAws_restJson1WeightedTargets = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1WeightedTarget(entry, context);
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
