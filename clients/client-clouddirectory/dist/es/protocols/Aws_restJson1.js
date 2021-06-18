import { __assign, __awaiter, __generator, __read } from "tslib";
import { TypedAttributeValue } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1AddFacetToObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.ObjectAttributeList !== undefined &&
                    input.ObjectAttributeList !== null && {
                      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
                        input.ObjectAttributeList,
                        context
                      ),
                    }
                ),
                input.ObjectReference !== undefined &&
                  input.ObjectReference !== null && {
                    ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
                  }
              ),
              input.SchemaFacet !== undefined &&
                input.SchemaFacet !== null && {
                  SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context),
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
export var serializeAws_restJson1ApplySchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/apply";
          body = JSON.stringify(
            __assign(
              {},
              input.PublishedSchemaArn !== undefined &&
                input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }
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
export var serializeAws_restJson1AttachObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/attach";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.ChildReference !== undefined &&
                    input.ChildReference !== null && {
                      ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
                    }
                ),
                input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
              ),
              input.ParentReference !== undefined &&
                input.ParentReference !== null && {
                  ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
export var serializeAws_restJson1AttachPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attach";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ObjectReference !== undefined &&
                  input.ObjectReference !== null && {
                    ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
                  }
              ),
              input.PolicyReference !== undefined &&
                input.PolicyReference !== null && {
                  PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
export var serializeAws_restJson1AttachToIndexCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/index/attach";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.IndexReference !== undefined &&
                  input.IndexReference !== null && {
                    IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
                  }
              ),
              input.TargetReference !== undefined &&
                input.TargetReference !== null && {
                  TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
export var serializeAws_restJson1AttachTypedLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attach";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.Attributes !== undefined &&
                      input.Attributes !== null && {
                        Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
                      }
                  ),
                  input.SourceObjectReference !== undefined &&
                    input.SourceObjectReference !== null && {
                      SourceObjectReference: serializeAws_restJson1ObjectReference(
                        input.SourceObjectReference,
                        context
                      ),
                    }
                ),
                input.TargetObjectReference !== undefined &&
                  input.TargetObjectReference !== null && {
                    TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
                  }
              ),
              input.TypedLinkFacet !== undefined &&
                input.TypedLinkFacet !== null && {
                  TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
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
export var serializeAws_restJson1BatchReadCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/batchread";
          body = JSON.stringify(
            __assign(
              {},
              input.Operations !== undefined &&
                input.Operations !== null && {
                  Operations: serializeAws_restJson1BatchReadOperationList(input.Operations, context),
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
export var serializeAws_restJson1BatchWriteCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/batchwrite";
          body = JSON.stringify(
            __assign(
              {},
              input.Operations !== undefined &&
                input.Operations !== null && {
                  Operations: serializeAws_restJson1BatchWriteOperationList(input.Operations, context),
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
export var serializeAws_restJson1CreateDirectoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory/create";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet/create";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.Attributes !== undefined &&
                      input.Attributes !== null && {
                        Attributes: serializeAws_restJson1FacetAttributeList(input.Attributes, context),
                      }
                  ),
                  input.FacetStyle !== undefined && input.FacetStyle !== null && { FacetStyle: input.FacetStyle }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.ObjectType !== undefined && input.ObjectType !== null && { ObjectType: input.ObjectType }
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
export var serializeAws_restJson1CreateIndexCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/index";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.IsUnique !== undefined && input.IsUnique !== null && { IsUnique: input.IsUnique }),
                  input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
                ),
                input.OrderedIndexedAttributeList !== undefined &&
                  input.OrderedIndexedAttributeList !== null && {
                    OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(
                      input.OrderedIndexedAttributeList,
                      context
                    ),
                  }
              ),
              input.ParentReference !== undefined &&
                input.ParentReference !== null && {
                  ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
export var serializeAws_restJson1CreateObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
                  input.ObjectAttributeList !== undefined &&
                    input.ObjectAttributeList !== null && {
                      ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(
                        input.ObjectAttributeList,
                        context
                      ),
                    }
                ),
                input.ParentReference !== undefined &&
                  input.ParentReference !== null && {
                    ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
                  }
              ),
              input.SchemaFacets !== undefined &&
                input.SchemaFacets !== null && {
                  SchemaFacets: serializeAws_restJson1SchemaFacetList(input.SchemaFacets, context),
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
export var serializeAws_restJson1CreateSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/create";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1CreateTypedLinkFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/create";
          body = JSON.stringify(
            __assign(
              {},
              input.Facet !== undefined &&
                input.Facet !== null && { Facet: serializeAws_restJson1TypedLinkFacet(input.Facet, context) }
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
export var serializeAws_restJson1DeleteDirectoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet/delete";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/delete";
          body = JSON.stringify(
            __assign(
              {},
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1DeleteSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DeleteTypedLinkFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/delete";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1DetachFromIndexCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/index/detach";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.IndexReference !== undefined &&
                  input.IndexReference !== null && {
                    IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
                  }
              ),
              input.TargetReference !== undefined &&
                input.TargetReference !== null && {
                  TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
export var serializeAws_restJson1DetachObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/detach";
          body = JSON.stringify(
            __assign(
              __assign({}, input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
              input.ParentReference !== undefined &&
                input.ParentReference !== null && {
                  ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
export var serializeAws_restJson1DetachPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/policy/detach";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ObjectReference !== undefined &&
                  input.ObjectReference !== null && {
                    ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
                  }
              ),
              input.PolicyReference !== undefined &&
                input.PolicyReference !== null && {
                  PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
export var serializeAws_restJson1DetachTypedLinkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/detach";
          body = JSON.stringify(
            __assign(
              {},
              input.TypedLinkSpecifier !== undefined &&
                input.TypedLinkSpecifier !== null && {
                  TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
export var serializeAws_restJson1DisableDirectoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory/disable";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1EnableDirectoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory/enable";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1GetAppliedSchemaVersionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
          body = JSON.stringify(
            __assign({}, input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn })
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
export var serializeAws_restJson1GetDirectoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory/get";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1GetFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1GetLinkAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attributes/get";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.AttributeNames !== undefined &&
                    input.AttributeNames !== null && {
                      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
                    }
                ),
                input.ConsistencyLevel !== undefined &&
                  input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }
              ),
              input.TypedLinkSpecifier !== undefined &&
                input.TypedLinkSpecifier !== null && {
                  TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
export var serializeAws_restJson1GetObjectAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes/get";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.AttributeNames !== undefined &&
                    input.AttributeNames !== null && {
                      AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
                    }
                ),
                input.ObjectReference !== undefined &&
                  input.ObjectReference !== null && {
                    ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
                  }
              ),
              input.SchemaFacet !== undefined &&
                input.SchemaFacet !== null && {
                  SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context),
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
export var serializeAws_restJson1GetObjectInformationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/information";
          body = JSON.stringify(
            __assign(
              {},
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1GetSchemaAsJsonCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            {},
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1GetTypedLinkFacetInformationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/get";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1ListAppliedSchemaArnsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/applied";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.DirectoryArn !== undefined &&
                      input.DirectoryArn !== null && { DirectoryArn: input.DirectoryArn }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }
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
export var serializeAws_restJson1ListAttachedIndicesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/indices";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.TargetReference !== undefined &&
                input.TargetReference !== null && {
                  TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
export var serializeAws_restJson1ListDevelopmentSchemaArnsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/development";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
              ),
              input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1ListDirectoriesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/directory/list";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1ListFacetAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet/attributes";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1ListFacetNamesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet/list";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
              ),
              input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1ListIncomingTypedLinksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/incoming";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.ConsistencyLevel !== undefined &&
                          input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }
                      ),
                      input.FilterAttributeRanges !== undefined &&
                        input.FilterAttributeRanges !== null && {
                          FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
                            input.FilterAttributeRanges,
                            context
                          ),
                        }
                    ),
                    input.FilterTypedLink !== undefined &&
                      input.FilterTypedLink !== null && {
                        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
                          input.FilterTypedLink,
                          context
                        ),
                      }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListIndexCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/index/targets";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.IndexReference !== undefined &&
                      input.IndexReference !== null && {
                        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
                      }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.RangesOnIndexedValues !== undefined &&
                input.RangesOnIndexedValues !== null && {
                  RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(
                    input.RangesOnIndexedValues,
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
export var serializeAws_restJson1ListManagedSchemaArnsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/managed";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }
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
export var serializeAws_restJson1ListObjectAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.FacetFilter !== undefined &&
                      input.FacetFilter !== null && {
                        FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context),
                      }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListObjectChildrenCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/children";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListObjectParentPathsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/parentpaths";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListObjectParentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/parent";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.IncludeAllLinksToEachParent !== undefined &&
                      input.IncludeAllLinksToEachParent !== null && {
                        IncludeAllLinksToEachParent: input.IncludeAllLinksToEachParent,
                      }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListObjectPoliciesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/policy";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListOutgoingTypedLinksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/outgoing";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.ConsistencyLevel !== undefined &&
                          input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }
                      ),
                      input.FilterAttributeRanges !== undefined &&
                        input.FilterAttributeRanges !== null && {
                          FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
                            input.FilterAttributeRanges,
                            context
                          ),
                        }
                    ),
                    input.FilterTypedLink !== undefined &&
                      input.FilterTypedLink !== null && {
                        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(
                          input.FilterTypedLink,
                          context
                        ),
                      }
                  ),
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1ListPolicyAttachmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            __assign(
              { "content-type": "application/json" },
              isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
            ),
            isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attachment";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.PolicyReference !== undefined &&
                input.PolicyReference !== null && {
                  PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
export var serializeAws_restJson1ListPublishedSchemaArnsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/published";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }
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
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/tags";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
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
export var serializeAws_restJson1ListTypedLinkFacetAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1ListTypedLinkFacetNamesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/list";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
              ),
              input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
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
export var serializeAws_restJson1LookupPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/policy/lookup";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
                ),
                input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1PublishSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DevelopmentSchemaArn) && {
              "x-amz-data-partition": input.DevelopmentSchemaArn,
            }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/publish";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.MinorVersion !== undefined &&
                    input.MinorVersion !== null && { MinorVersion: input.MinorVersion }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.Version !== undefined && input.Version !== null && { Version: input.Version }
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
export var serializeAws_restJson1PutSchemaFromJsonCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
          body = JSON.stringify(
            __assign({}, input.Document !== undefined && input.Document !== null && { Document: input.Document })
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
export var serializeAws_restJson1RemoveFacetFromObjectCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets/delete";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ObjectReference !== undefined &&
                  input.ObjectReference !== null && {
                    ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
                  }
              ),
              input.SchemaFacet !== undefined &&
                input.SchemaFacet !== null && {
                  SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context),
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/tags/add";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
              ),
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }
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
export var serializeAws_restJson1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/tags/remove";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
              ),
              input.TagKeys !== undefined &&
                input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }
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
export var serializeAws_restJson1UpdateFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.AttributeUpdates !== undefined &&
                    input.AttributeUpdates !== null && {
                      AttributeUpdates: serializeAws_restJson1FacetAttributeUpdateList(input.AttributeUpdates, context),
                    }
                ),
                input.Name !== undefined && input.Name !== null && { Name: input.Name }
              ),
              input.ObjectType !== undefined && input.ObjectType !== null && { ObjectType: input.ObjectType }
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
export var serializeAws_restJson1UpdateLinkAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attributes/update";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.AttributeUpdates !== undefined &&
                  input.AttributeUpdates !== null && {
                    AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
                  }
              ),
              input.TypedLinkSpecifier !== undefined &&
                input.TypedLinkSpecifier !== null && {
                  TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
export var serializeAws_restJson1UpdateObjectAttributesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/object/update";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.AttributeUpdates !== undefined &&
                  input.AttributeUpdates !== null && {
                    AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
                  }
              ),
              input.ObjectReference !== undefined &&
                input.ObjectReference !== null && {
                  ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
export var serializeAws_restJson1UpdateSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/update";
          body = JSON.stringify(__assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }));
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restJson1UpdateTypedLinkFacetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/json" },
            isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }
          );
          resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.AttributeUpdates !== undefined &&
                    input.AttributeUpdates !== null && {
                      AttributeUpdates: serializeAws_restJson1TypedLinkFacetAttributeUpdateList(
                        input.AttributeUpdates,
                        context
                      ),
                    }
                ),
                input.IdentityAttributeOrder !== undefined &&
                  input.IdentityAttributeOrder !== null && {
                    IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(
                      input.IdentityAttributeOrder,
                      context
                    ),
                  }
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
export var serializeAws_restJson1UpgradeAppliedSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.DirectoryArn !== undefined &&
                    input.DirectoryArn !== null && { DirectoryArn: input.DirectoryArn }
                ),
                input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }
              ),
              input.PublishedSchemaArn !== undefined &&
                input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }
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
export var serializeAws_restJson1UpgradePublishedSchemaCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.DevelopmentSchemaArn !== undefined &&
                      input.DevelopmentSchemaArn !== null && { DevelopmentSchemaArn: input.DevelopmentSchemaArn }
                  ),
                  input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }
                ),
                input.MinorVersion !== undefined && input.MinorVersion !== null && { MinorVersion: input.MinorVersion }
              ),
              input.PublishedSchemaArn !== undefined &&
                input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }
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
export var deserializeAws_restJson1AddFacetToObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1AddFacetToObjectCommandError(output, context)];
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
var deserializeAws_restJson1AddFacetToObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ApplySchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ApplySchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppliedSchemaArn: undefined,
            DirectoryArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
            contents.AppliedSchemaArn = data.AppliedSchemaArn;
          }
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ApplySchemaCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidAttachmentException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "SchemaAlreadyExistsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1AttachObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1AttachObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AttachedObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AttachedObjectIdentifier !== undefined && data.AttachedObjectIdentifier !== null) {
            contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1AttachObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "LinkNameAlreadyInUseException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "RetryableConflictException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1AttachPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1AttachPolicyCommandError(output, context)];
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
var deserializeAws_restJson1AttachPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotPolicyException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#NotPolicyException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1AttachToIndexCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1AttachToIndexCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AttachedObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AttachedObjectIdentifier !== undefined && data.AttachedObjectIdentifier !== null) {
            contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1AttachToIndexCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, parsedBody, message;
    var _q;
    return __generator(this, function (_r) {
      switch (_r.label) {
        case 0:
          _a = [__assign({}, output)];
          _q = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_q.body = _r.sent()), _q)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "IndexedAttributeMissingException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#IndexedAttributeMissingException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "LinkNameAlreadyInUseException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
              return [3 /*break*/, 16];
            case "NotIndexException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#NotIndexException":
              return [3 /*break*/, 18];
            case "ResourceNotFoundException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 20];
            case "RetryableConflictException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 22];
            case "ValidationException":
              return [3 /*break*/, 24];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 24];
          }
          return [3 /*break*/, 26];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1IndexedAttributeMissingExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 26:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _r.label = 27;
        case 27:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1AttachTypedLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1AttachTypedLinkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            TypedLinkSpecifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.TypedLinkSpecifier !== undefined && data.TypedLinkSpecifier !== null) {
            contents.TypedLinkSpecifier = deserializeAws_restJson1TypedLinkSpecifier(data.TypedLinkSpecifier, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1AttachTypedLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchReadCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1BatchReadCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Responses: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Responses !== undefined && data.Responses !== null) {
            contents.Responses = deserializeAws_restJson1BatchReadOperationResponseList(data.Responses, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchReadCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1BatchWriteCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1BatchWriteCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Responses: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Responses !== undefined && data.Responses !== null) {
            contents.Responses = deserializeAws_restJson1BatchWriteOperationResponseList(data.Responses, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchWriteCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "BatchWriteException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#BatchWriteException":
              return [3 /*break*/, 4];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1BatchWriteExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDirectoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateDirectoryCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppliedSchemaArn: undefined,
            DirectoryArn: undefined,
            Name: undefined,
            ObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
            contents.AppliedSchemaArn = data.AppliedSchemaArn;
          }
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
            contents.ObjectIdentifier = data.ObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateDirectoryCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateFacetCommandError(output, context)];
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
var deserializeAws_restJson1CreateFacetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidRuleException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidRuleException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateIndexCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateIndexCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
            contents.ObjectIdentifier = data.ObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateIndexCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "UnsupportedIndexTypeException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
            contents.ObjectIdentifier = data.ObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "UnsupportedIndexTypeException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            SchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
            contents.SchemaArn = data.SchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateSchemaCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "RetryableConflictException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 10];
            case "SchemaAlreadyExistsException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateTypedLinkFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateTypedLinkFacetCommandError(output, context)];
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
var deserializeAws_restJson1CreateTypedLinkFacetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetAlreadyExistsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidRuleException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidRuleException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteDirectoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteDirectoryCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DirectoryArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteDirectoryCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "DirectoryNotDisabledException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#DirectoryNotDisabledException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotDisabledExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteFacetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFacetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetInUseException":
              return [3 /*break*/, 4];
            case "FacetNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetInUseExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteObjectCommandError(output, context)];
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
var deserializeAws_restJson1DeleteObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ObjectNotDetachedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ObjectNotDetachedException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ObjectNotDetachedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            SchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
            contents.SchemaArn = data.SchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteSchemaCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "StillContainsLinksException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#StillContainsLinksException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1StillContainsLinksExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteTypedLinkFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteTypedLinkFacetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteTypedLinkFacetCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DetachFromIndexCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DetachFromIndexCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DetachedObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DetachedObjectIdentifier !== undefined && data.DetachedObjectIdentifier !== null) {
            contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DetachFromIndexCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotIndexException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#NotIndexException":
              return [3 /*break*/, 12];
            case "ObjectAlreadyDetachedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DetachObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DetachObjectCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DetachedObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DetachedObjectIdentifier !== undefined && data.DetachedObjectIdentifier !== null) {
            contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DetachObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotNodeException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#NotNodeException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DetachPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DetachPolicyCommandError(output, context)];
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
var deserializeAws_restJson1DetachPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotPolicyException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#NotPolicyException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DetachTypedLinkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DetachTypedLinkCommandError(output, context)];
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
var deserializeAws_restJson1DetachTypedLinkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DisableDirectoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DisableDirectoryCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DirectoryArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DisableDirectoryCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1EnableDirectoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1EnableDirectoryCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DirectoryArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1EnableDirectoryCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryDeletedException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetAppliedSchemaVersionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAppliedSchemaVersionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AppliedSchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
            contents.AppliedSchemaArn = data.AppliedSchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAppliedSchemaVersionCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDirectoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDirectoryCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Directory: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Directory !== undefined && data.Directory !== null) {
            contents.Directory = deserializeAws_restJson1Directory(data.Directory, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDirectoryCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "RetryableConflictException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 10];
            case "ValidationException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetFacetCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Facet: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Facet !== undefined && data.Facet !== null) {
            contents.Facet = deserializeAws_restJson1Facet(data.Facet, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetFacetCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLinkAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetLinkAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Attributes: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Attributes !== undefined && data.Attributes !== null) {
            contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetLinkAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetObjectAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetObjectAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Attributes: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Attributes !== undefined && data.Attributes !== null) {
            contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetObjectAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetObjectInformationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetObjectInformationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ObjectIdentifier: undefined,
            SchemaFacets: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
            contents.ObjectIdentifier = data.ObjectIdentifier;
          }
          if (data.SchemaFacets !== undefined && data.SchemaFacets !== null) {
            contents.SchemaFacets = deserializeAws_restJson1SchemaFacetList(data.SchemaFacets, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetObjectInformationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetSchemaAsJsonCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSchemaAsJsonCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Document: undefined,
            Name: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Document !== undefined && data.Document !== null) {
            contents.Document = data.Document;
          }
          if (data.Name !== undefined && data.Name !== null) {
            contents.Name = data.Name;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSchemaAsJsonCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetTypedLinkFacetInformationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetTypedLinkFacetInformationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            IdentityAttributeOrder: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.IdentityAttributeOrder !== undefined && data.IdentityAttributeOrder !== null) {
            contents.IdentityAttributeOrder = deserializeAws_restJson1AttributeNameList(
              data.IdentityAttributeOrder,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetTypedLinkFacetInformationCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListAppliedSchemaArnsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAppliedSchemaArnsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            SchemaArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
            contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAppliedSchemaArnsCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListAttachedIndicesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAttachedIndicesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            IndexAttachments: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
            contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAttachedIndicesCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDevelopmentSchemaArnsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            SchemaArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
            contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDirectoriesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListDirectoriesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Directories: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Directories !== undefined && data.Directories !== null) {
            contents.Directories = deserializeAws_restJson1DirectoryList(data.Directories, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListDirectoriesCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFacetAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListFacetAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Attributes: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Attributes !== undefined && data.Attributes !== null) {
            contents.Attributes = deserializeAws_restJson1FacetAttributeList(data.Attributes, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListFacetAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListFacetNamesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListFacetNamesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FacetNames: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.FacetNames !== undefined && data.FacetNames !== null) {
            contents.FacetNames = deserializeAws_restJson1FacetNameList(data.FacetNames, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListFacetNamesCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListIncomingTypedLinksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListIncomingTypedLinksCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            LinkSpecifiers: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.LinkSpecifiers !== undefined && data.LinkSpecifiers !== null) {
            contents.LinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(data.LinkSpecifiers, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListIncomingTypedLinksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListIndexCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListIndexCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            IndexAttachments: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
            contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListIndexCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "NotIndexException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#NotIndexException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "RetryableConflictException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListManagedSchemaArnsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListManagedSchemaArnsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            SchemaArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
            contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListManagedSchemaArnsCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ValidationException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListObjectAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListObjectAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Attributes: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Attributes !== undefined && data.Attributes !== null) {
            contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListObjectAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListObjectChildrenCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListObjectChildrenCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Children: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Children !== undefined && data.Children !== null) {
            contents.Children = deserializeAws_restJson1LinkNameToObjectIdentifierMap(data.Children, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListObjectChildrenCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "NotNodeException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#NotNodeException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListObjectParentPathsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListObjectParentPathsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            PathToObjectIdentifiersList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.PathToObjectIdentifiersList !== undefined && data.PathToObjectIdentifiersList !== null) {
            contents.PathToObjectIdentifiersList = deserializeAws_restJson1PathToObjectIdentifiersList(
              data.PathToObjectIdentifiersList,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListObjectParentPathsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListObjectParentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListObjectParentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            ParentLinks: undefined,
            Parents: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.ParentLinks !== undefined && data.ParentLinks !== null) {
            contents.ParentLinks = deserializeAws_restJson1ObjectIdentifierAndLinkNameList(data.ParentLinks, context);
          }
          if (data.Parents !== undefined && data.Parents !== null) {
            contents.Parents = deserializeAws_restJson1ObjectIdentifierToLinkNameMap(data.Parents, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListObjectParentsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "CannotListParentOfRootException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#CannotListParentOfRootException":
              return [3 /*break*/, 4];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1CannotListParentOfRootExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListObjectPoliciesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListObjectPoliciesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AttachedPolicyIds: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AttachedPolicyIds !== undefined && data.AttachedPolicyIds !== null) {
            contents.AttachedPolicyIds = deserializeAws_restJson1ObjectIdentifierList(data.AttachedPolicyIds, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListObjectPoliciesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListOutgoingTypedLinksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListOutgoingTypedLinksCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            TypedLinkSpecifiers: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.TypedLinkSpecifiers !== undefined && data.TypedLinkSpecifiers !== null) {
            contents.TypedLinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(
              data.TypedLinkSpecifiers,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListOutgoingTypedLinksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 12];
            case "LimitExceededException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListPolicyAttachmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListPolicyAttachmentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            ObjectIdentifiers: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.ObjectIdentifiers !== undefined && data.ObjectIdentifiers !== null) {
            contents.ObjectIdentifiers = deserializeAws_restJson1ObjectIdentifierList(data.ObjectIdentifiers, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListPolicyAttachmentsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "NotPolicyException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#NotPolicyException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListPublishedSchemaArnsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListPublishedSchemaArnsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            SchemaArns: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
            contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListPublishedSchemaArnsCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
            NextToken: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.Tags !== undefined && data.Tags !== null) {
            contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTypedLinkFacetAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Attributes: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Attributes !== undefined && data.Attributes !== null) {
            contents.Attributes = deserializeAws_restJson1TypedLinkAttributeDefinitionList(data.Attributes, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListTypedLinkFacetNamesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTypedLinkFacetNamesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FacetNames: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.FacetNames !== undefined && data.FacetNames !== null) {
            contents.FacetNames = deserializeAws_restJson1TypedLinkNameList(data.FacetNames, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTypedLinkFacetNamesCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1LookupPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1LookupPolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            PolicyToPathList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.PolicyToPathList !== undefined && data.PolicyToPathList !== null) {
            contents.PolicyToPathList = deserializeAws_restJson1PolicyToPathList(data.PolicyToPathList, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1LookupPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidNextTokenException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1PublishSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PublishSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            PublishedSchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.PublishedSchemaArn !== undefined && data.PublishedSchemaArn !== null) {
            contents.PublishedSchemaArn = data.PublishedSchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PublishSchemaCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "SchemaAlreadyPublishedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutSchemaFromJsonCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutSchemaFromJsonCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Arn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.Arn !== undefined && data.Arn !== null) {
            contents.Arn = data.Arn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1PutSchemaFromJsonCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidRuleException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidRuleException":
              return [3 /*break*/, 8];
            case "InvalidSchemaDocException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidSchemaDocException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidSchemaDocExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveFacetFromObjectCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RemoveFacetFromObjectCommandError(output, context)];
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
var deserializeAws_restJson1RemoveFacetFromObjectCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "ValidationException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateFacetCommandError(output, context)];
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
var deserializeAws_restJson1UpdateFacetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidFacetUpdateException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
              return [3 /*break*/, 12];
            case "InvalidRuleException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#InvalidRuleException":
              return [3 /*break*/, 14];
            case "LimitExceededException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "RetryableConflictException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateLinkAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateLinkAttributesCommandError(output, context)];
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
var deserializeAws_restJson1UpdateLinkAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateObjectAttributesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateObjectAttributesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ObjectIdentifier: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
            contents.ObjectIdentifier = data.ObjectIdentifier;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateObjectAttributesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
      switch (_p.label) {
        case 0:
          _a = [__assign({}, output)];
          _o = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_o.body = _p.sent()), _o)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
              return [3 /*break*/, 14];
            case "ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 16];
            case "RetryableConflictException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 18];
            case "ValidationException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 20];
          }
          return [3 /*break*/, 22];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_p.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 23];
        case 22:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _p.label = 23;
        case 23:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            SchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
            contents.SchemaArn = data.SchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateSchemaCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "RetryableConflictException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateTypedLinkFacetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateTypedLinkFacetCommandError(output, context)];
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
var deserializeAws_restJson1UpdateTypedLinkFacetCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [__assign({}, output)];
          _p = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_p.body = _q.sent()), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "FacetNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#FacetNotFoundException":
              return [3 /*break*/, 4];
            case "FacetValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#FacetValidationException":
              return [3 /*break*/, 6];
            case "InternalServiceException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 8];
            case "InvalidArnException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 10];
            case "InvalidFacetUpdateException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
              return [3 /*break*/, 12];
            case "InvalidRuleException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#InvalidRuleException":
              return [3 /*break*/, 14];
            case "LimitExceededException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "RetryableConflictException":
              return [3 /*break*/, 20];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 20];
            case "ValidationException":
              return [3 /*break*/, 22];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _q.label = 25;
        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpgradeAppliedSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpgradeAppliedSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DirectoryArn: undefined,
            UpgradedSchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
            contents.DirectoryArn = data.DirectoryArn;
          }
          if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
            contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpgradeAppliedSchemaCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "IncompatibleSchemaException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidAttachmentException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "RetryableConflictException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 14];
            case "SchemaAlreadyExistsException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpgradePublishedSchemaCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpgradePublishedSchemaCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            UpgradedSchemaArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
            contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpgradePublishedSchemaCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.clouddirectory#AccessDeniedException":
              return [3 /*break*/, 2];
            case "IncompatibleSchemaException":
              return [3 /*break*/, 4];
            case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.clouddirectory#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidArnException":
              return [3 /*break*/, 8];
            case "com.amazonaws.clouddirectory#InvalidArnException":
              return [3 /*break*/, 8];
            case "InvalidAttachmentException":
              return [3 /*break*/, 10];
            case "com.amazonaws.clouddirectory#InvalidAttachmentException":
              return [3 /*break*/, 10];
            case "LimitExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.clouddirectory#LimitExceededException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.clouddirectory#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "RetryableConflictException":
              return [3 /*break*/, 16];
            case "com.amazonaws.clouddirectory#RetryableConflictException":
              return [3 /*break*/, 16];
            case "ValidationException":
              return [3 /*break*/, 18];
            case "com.amazonaws.clouddirectory#ValidationException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
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
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1BatchWriteExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "BatchWriteException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Index: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Index !== undefined && data.Index !== null) {
        contents.Index = data.Index;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1CannotListParentOfRootExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CannotListParentOfRootException",
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
var deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DirectoryAlreadyExistsException",
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
var deserializeAws_restJson1DirectoryDeletedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DirectoryDeletedException",
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
var deserializeAws_restJson1DirectoryNotDisabledExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DirectoryNotDisabledException",
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
var deserializeAws_restJson1DirectoryNotEnabledExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DirectoryNotEnabledException",
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
var deserializeAws_restJson1FacetAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FacetAlreadyExistsException",
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
var deserializeAws_restJson1FacetInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FacetInUseException",
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
var deserializeAws_restJson1FacetNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FacetNotFoundException",
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
var deserializeAws_restJson1FacetValidationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FacetValidationException",
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
var deserializeAws_restJson1IncompatibleSchemaExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "IncompatibleSchemaException",
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
var deserializeAws_restJson1IndexedAttributeMissingExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "IndexedAttributeMissingException",
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
var deserializeAws_restJson1InternalServiceExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalServiceException",
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
var deserializeAws_restJson1InvalidArnExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidArnException",
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
var deserializeAws_restJson1InvalidAttachmentExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidAttachmentException",
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
var deserializeAws_restJson1InvalidFacetUpdateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidFacetUpdateException",
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
var deserializeAws_restJson1InvalidNextTokenExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidNextTokenException",
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
var deserializeAws_restJson1InvalidRuleExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidRuleException",
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
var deserializeAws_restJson1InvalidSchemaDocExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidSchemaDocException",
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
var deserializeAws_restJson1InvalidTaggingRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidTaggingRequestException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "LimitExceededException",
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
var deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "LinkNameAlreadyInUseException",
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
var deserializeAws_restJson1NotIndexExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NotIndexException",
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
var deserializeAws_restJson1NotNodeExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NotNodeException",
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
var deserializeAws_restJson1NotPolicyExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NotPolicyException",
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
var deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ObjectAlreadyDetachedException",
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
var deserializeAws_restJson1ObjectNotDetachedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ObjectNotDetachedException",
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
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceNotFoundException",
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
var deserializeAws_restJson1RetryableConflictExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "RetryableConflictException",
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
var deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "SchemaAlreadyExistsException",
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
var deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "SchemaAlreadyPublishedException",
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
var deserializeAws_restJson1StillContainsLinksExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "StillContainsLinksException",
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
var deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "UnsupportedIndexTypeException",
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
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ValidationException",
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
var serializeAws_restJson1AttributeKey = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.FacetName !== undefined && input.FacetName !== null && { FacetName: input.FacetName }),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }
  );
};
var serializeAws_restJson1AttributeKeyAndValue = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Key !== undefined && input.Key !== null && { Key: serializeAws_restJson1AttributeKey(input.Key, context) }
    ),
    input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }
  );
};
var serializeAws_restJson1AttributeKeyAndValueList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
};
var serializeAws_restJson1AttributeKeyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeKey(entry, context);
    });
};
var serializeAws_restJson1AttributeNameAndValue = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }
    ),
    input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }
  );
};
var serializeAws_restJson1AttributeNameAndValueList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeNameAndValue(entry, context);
    });
};
var serializeAws_restJson1AttributeNameList = function (input, context) {
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
var serializeAws_restJson1BatchAddFacetToObject = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ObjectAttributeList !== undefined &&
          input.ObjectAttributeList !== null && {
            ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
          }
      ),
      input.ObjectReference !== undefined &&
        input.ObjectReference !== null && {
          ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
        }
    ),
    input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }
  );
};
var serializeAws_restJson1BatchAttachObject = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ChildReference !== undefined &&
          input.ChildReference !== null && {
            ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
          }
      ),
      input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
    ),
    input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }
  );
};
var serializeAws_restJson1BatchAttachPolicy = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ObjectReference !== undefined &&
        input.ObjectReference !== null && {
          ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
        }
    ),
    input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }
  );
};
var serializeAws_restJson1BatchAttachToIndex = function (input, context) {
  return __assign(
    __assign(
      {},
      input.IndexReference !== undefined &&
        input.IndexReference !== null && {
          IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
        }
    ),
    input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }
  );
};
var serializeAws_restJson1BatchAttachTypedLink = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Attributes !== undefined &&
            input.Attributes !== null && {
              Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
            }
        ),
        input.SourceObjectReference !== undefined &&
          input.SourceObjectReference !== null && {
            SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
          }
      ),
      input.TargetObjectReference !== undefined &&
        input.TargetObjectReference !== null && {
          TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
        }
    ),
    input.TypedLinkFacet !== undefined &&
      input.TypedLinkFacet !== null && {
        TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
      }
  );
};
var serializeAws_restJson1BatchCreateIndex = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.BatchReferenceName !== undefined &&
              input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }
          ),
          input.IsUnique !== undefined && input.IsUnique !== null && { IsUnique: input.IsUnique }
        ),
        input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
      ),
      input.OrderedIndexedAttributeList !== undefined &&
        input.OrderedIndexedAttributeList !== null && {
          OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(
            input.OrderedIndexedAttributeList,
            context
          ),
        }
    ),
    input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }
  );
};
var serializeAws_restJson1BatchCreateObject = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.BatchReferenceName !== undefined &&
              input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }
          ),
          input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
        ),
        input.ObjectAttributeList !== undefined &&
          input.ObjectAttributeList !== null && {
            ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
          }
      ),
      input.ParentReference !== undefined &&
        input.ParentReference !== null && {
          ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
        }
    ),
    input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacetList(input.SchemaFacet, context) }
  );
};
var serializeAws_restJson1BatchDeleteObject = function (input, context) {
  return __assign(
    {},
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchDetachFromIndex = function (input, context) {
  return __assign(
    __assign(
      {},
      input.IndexReference !== undefined &&
        input.IndexReference !== null && {
          IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
        }
    ),
    input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }
  );
};
var serializeAws_restJson1BatchDetachObject = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.BatchReferenceName !== undefined &&
          input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }
      ),
      input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }
    ),
    input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }
  );
};
var serializeAws_restJson1BatchDetachPolicy = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ObjectReference !== undefined &&
        input.ObjectReference !== null && {
          ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
        }
    ),
    input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }
  );
};
var serializeAws_restJson1BatchDetachTypedLink = function (input, context) {
  return __assign(
    {},
    input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }
  );
};
var serializeAws_restJson1BatchGetLinkAttributes = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeNames !== undefined &&
        input.AttributeNames !== null && {
          AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
        }
    ),
    input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }
  );
};
var serializeAws_restJson1BatchGetObjectAttributes = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AttributeNames !== undefined &&
          input.AttributeNames !== null && {
            AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
          }
      ),
      input.ObjectReference !== undefined &&
        input.ObjectReference !== null && {
          ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
        }
    ),
    input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }
  );
};
var serializeAws_restJson1BatchGetObjectInformation = function (input, context) {
  return __assign(
    {},
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListAttachedIndices = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }
  );
};
var serializeAws_restJson1BatchListIncomingTypedLinks = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.FilterAttributeRanges !== undefined &&
              input.FilterAttributeRanges !== null && {
                FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
                  input.FilterAttributeRanges,
                  context
                ),
              }
          ),
          input.FilterTypedLink !== undefined &&
            input.FilterTypedLink !== null && {
              FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
            }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListIndex = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.IndexReference !== undefined &&
            input.IndexReference !== null && {
              IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
            }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.RangesOnIndexedValues !== undefined &&
      input.RangesOnIndexedValues !== null && {
        RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
      }
  );
};
var serializeAws_restJson1BatchListObjectAttributes = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.FacetFilter !== undefined &&
            input.FacetFilter !== null && { FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context) }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListObjectChildren = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListObjectParentPaths = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListObjectParents = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListObjectPolicies = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListOutgoingTypedLinks = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.FilterAttributeRanges !== undefined &&
              input.FilterAttributeRanges !== null && {
                FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(
                  input.FilterAttributeRanges,
                  context
                ),
              }
          ),
          input.FilterTypedLink !== undefined &&
            input.FilterTypedLink !== null && {
              FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
            }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchListPolicyAttachments = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }
  );
};
var serializeAws_restJson1BatchLookupPolicy = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchReadOperation = function (input, context) {
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
                              {},
                              input.GetLinkAttributes !== undefined &&
                                input.GetLinkAttributes !== null && {
                                  GetLinkAttributes: serializeAws_restJson1BatchGetLinkAttributes(
                                    input.GetLinkAttributes,
                                    context
                                  ),
                                }
                            ),
                            input.GetObjectAttributes !== undefined &&
                              input.GetObjectAttributes !== null && {
                                GetObjectAttributes: serializeAws_restJson1BatchGetObjectAttributes(
                                  input.GetObjectAttributes,
                                  context
                                ),
                              }
                          ),
                          input.GetObjectInformation !== undefined &&
                            input.GetObjectInformation !== null && {
                              GetObjectInformation: serializeAws_restJson1BatchGetObjectInformation(
                                input.GetObjectInformation,
                                context
                              ),
                            }
                        ),
                        input.ListAttachedIndices !== undefined &&
                          input.ListAttachedIndices !== null && {
                            ListAttachedIndices: serializeAws_restJson1BatchListAttachedIndices(
                              input.ListAttachedIndices,
                              context
                            ),
                          }
                      ),
                      input.ListIncomingTypedLinks !== undefined &&
                        input.ListIncomingTypedLinks !== null && {
                          ListIncomingTypedLinks: serializeAws_restJson1BatchListIncomingTypedLinks(
                            input.ListIncomingTypedLinks,
                            context
                          ),
                        }
                    ),
                    input.ListIndex !== undefined &&
                      input.ListIndex !== null && {
                        ListIndex: serializeAws_restJson1BatchListIndex(input.ListIndex, context),
                      }
                  ),
                  input.ListObjectAttributes !== undefined &&
                    input.ListObjectAttributes !== null && {
                      ListObjectAttributes: serializeAws_restJson1BatchListObjectAttributes(
                        input.ListObjectAttributes,
                        context
                      ),
                    }
                ),
                input.ListObjectChildren !== undefined &&
                  input.ListObjectChildren !== null && {
                    ListObjectChildren: serializeAws_restJson1BatchListObjectChildren(
                      input.ListObjectChildren,
                      context
                    ),
                  }
              ),
              input.ListObjectParentPaths !== undefined &&
                input.ListObjectParentPaths !== null && {
                  ListObjectParentPaths: serializeAws_restJson1BatchListObjectParentPaths(
                    input.ListObjectParentPaths,
                    context
                  ),
                }
            ),
            input.ListObjectParents !== undefined &&
              input.ListObjectParents !== null && {
                ListObjectParents: serializeAws_restJson1BatchListObjectParents(input.ListObjectParents, context),
              }
          ),
          input.ListObjectPolicies !== undefined &&
            input.ListObjectPolicies !== null && {
              ListObjectPolicies: serializeAws_restJson1BatchListObjectPolicies(input.ListObjectPolicies, context),
            }
        ),
        input.ListOutgoingTypedLinks !== undefined &&
          input.ListOutgoingTypedLinks !== null && {
            ListOutgoingTypedLinks: serializeAws_restJson1BatchListOutgoingTypedLinks(
              input.ListOutgoingTypedLinks,
              context
            ),
          }
      ),
      input.ListPolicyAttachments !== undefined &&
        input.ListPolicyAttachments !== null && {
          ListPolicyAttachments: serializeAws_restJson1BatchListPolicyAttachments(input.ListPolicyAttachments, context),
        }
    ),
    input.LookupPolicy !== undefined &&
      input.LookupPolicy !== null && {
        LookupPolicy: serializeAws_restJson1BatchLookupPolicy(input.LookupPolicy, context),
      }
  );
};
var serializeAws_restJson1BatchReadOperationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BatchReadOperation(entry, context);
    });
};
var serializeAws_restJson1BatchRemoveFacetFromObject = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ObjectReference !== undefined &&
        input.ObjectReference !== null && {
          ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
        }
    ),
    input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }
  );
};
var serializeAws_restJson1BatchUpdateLinkAttributes = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeUpdates !== undefined &&
        input.AttributeUpdates !== null && {
          AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
        }
    ),
    input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }
  );
};
var serializeAws_restJson1BatchUpdateObjectAttributes = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeUpdates !== undefined &&
        input.AttributeUpdates !== null && {
          AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
        }
    ),
    input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }
  );
};
var serializeAws_restJson1BatchWriteOperation = function (input, context) {
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
                                {},
                                input.AddFacetToObject !== undefined &&
                                  input.AddFacetToObject !== null && {
                                    AddFacetToObject: serializeAws_restJson1BatchAddFacetToObject(
                                      input.AddFacetToObject,
                                      context
                                    ),
                                  }
                              ),
                              input.AttachObject !== undefined &&
                                input.AttachObject !== null && {
                                  AttachObject: serializeAws_restJson1BatchAttachObject(input.AttachObject, context),
                                }
                            ),
                            input.AttachPolicy !== undefined &&
                              input.AttachPolicy !== null && {
                                AttachPolicy: serializeAws_restJson1BatchAttachPolicy(input.AttachPolicy, context),
                              }
                          ),
                          input.AttachToIndex !== undefined &&
                            input.AttachToIndex !== null && {
                              AttachToIndex: serializeAws_restJson1BatchAttachToIndex(input.AttachToIndex, context),
                            }
                        ),
                        input.AttachTypedLink !== undefined &&
                          input.AttachTypedLink !== null && {
                            AttachTypedLink: serializeAws_restJson1BatchAttachTypedLink(input.AttachTypedLink, context),
                          }
                      ),
                      input.CreateIndex !== undefined &&
                        input.CreateIndex !== null && {
                          CreateIndex: serializeAws_restJson1BatchCreateIndex(input.CreateIndex, context),
                        }
                    ),
                    input.CreateObject !== undefined &&
                      input.CreateObject !== null && {
                        CreateObject: serializeAws_restJson1BatchCreateObject(input.CreateObject, context),
                      }
                  ),
                  input.DeleteObject !== undefined &&
                    input.DeleteObject !== null && {
                      DeleteObject: serializeAws_restJson1BatchDeleteObject(input.DeleteObject, context),
                    }
                ),
                input.DetachFromIndex !== undefined &&
                  input.DetachFromIndex !== null && {
                    DetachFromIndex: serializeAws_restJson1BatchDetachFromIndex(input.DetachFromIndex, context),
                  }
              ),
              input.DetachObject !== undefined &&
                input.DetachObject !== null && {
                  DetachObject: serializeAws_restJson1BatchDetachObject(input.DetachObject, context),
                }
            ),
            input.DetachPolicy !== undefined &&
              input.DetachPolicy !== null && {
                DetachPolicy: serializeAws_restJson1BatchDetachPolicy(input.DetachPolicy, context),
              }
          ),
          input.DetachTypedLink !== undefined &&
            input.DetachTypedLink !== null && {
              DetachTypedLink: serializeAws_restJson1BatchDetachTypedLink(input.DetachTypedLink, context),
            }
        ),
        input.RemoveFacetFromObject !== undefined &&
          input.RemoveFacetFromObject !== null && {
            RemoveFacetFromObject: serializeAws_restJson1BatchRemoveFacetFromObject(
              input.RemoveFacetFromObject,
              context
            ),
          }
      ),
      input.UpdateLinkAttributes !== undefined &&
        input.UpdateLinkAttributes !== null && {
          UpdateLinkAttributes: serializeAws_restJson1BatchUpdateLinkAttributes(input.UpdateLinkAttributes, context),
        }
    ),
    input.UpdateObjectAttributes !== undefined &&
      input.UpdateObjectAttributes !== null && {
        UpdateObjectAttributes: serializeAws_restJson1BatchUpdateObjectAttributes(
          input.UpdateObjectAttributes,
          context
        ),
      }
  );
};
var serializeAws_restJson1BatchWriteOperationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BatchWriteOperation(entry, context);
    });
};
var serializeAws_restJson1FacetAttribute = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AttributeDefinition !== undefined &&
            input.AttributeDefinition !== null && {
              AttributeDefinition: serializeAws_restJson1FacetAttributeDefinition(input.AttributeDefinition, context),
            }
        ),
        input.AttributeReference !== undefined &&
          input.AttributeReference !== null && {
            AttributeReference: serializeAws_restJson1FacetAttributeReference(input.AttributeReference, context),
          }
      ),
      input.Name !== undefined && input.Name !== null && { Name: input.Name }
    ),
    input.RequiredBehavior !== undefined &&
      input.RequiredBehavior !== null && { RequiredBehavior: input.RequiredBehavior }
  );
};
var serializeAws_restJson1FacetAttributeDefinition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.DefaultValue !== undefined &&
            input.DefaultValue !== null && {
              DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
            }
        ),
        input.IsImmutable !== undefined && input.IsImmutable !== null && { IsImmutable: input.IsImmutable }
      ),
      input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }
    ),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_restJson1FacetAttributeList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1FacetAttribute(entry, context);
    });
};
var serializeAws_restJson1FacetAttributeReference = function (input, context) {
  return __assign(
    __assign(
      {},
      input.TargetAttributeName !== undefined &&
        input.TargetAttributeName !== null && { TargetAttributeName: input.TargetAttributeName }
    ),
    input.TargetFacetName !== undefined && input.TargetFacetName !== null && { TargetFacetName: input.TargetFacetName }
  );
};
var serializeAws_restJson1FacetAttributeUpdate = function (input, context) {
  return __assign(
    __assign({}, input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    input.Attribute !== undefined &&
      input.Attribute !== null && { Attribute: serializeAws_restJson1FacetAttribute(input.Attribute, context) }
  );
};
var serializeAws_restJson1FacetAttributeUpdateList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1FacetAttributeUpdate(entry, context);
    });
};
var serializeAws_restJson1LinkAttributeAction = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeActionType !== undefined &&
        input.AttributeActionType !== null && { AttributeActionType: input.AttributeActionType }
    ),
    input.AttributeUpdateValue !== undefined &&
      input.AttributeUpdateValue !== null && {
        AttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(input.AttributeUpdateValue, context),
      }
  );
};
var serializeAws_restJson1LinkAttributeUpdate = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeAction !== undefined &&
        input.AttributeAction !== null && {
          AttributeAction: serializeAws_restJson1LinkAttributeAction(input.AttributeAction, context),
        }
    ),
    input.AttributeKey !== undefined &&
      input.AttributeKey !== null && { AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context) }
  );
};
var serializeAws_restJson1LinkAttributeUpdateList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1LinkAttributeUpdate(entry, context);
    });
};
var serializeAws_restJson1ObjectAttributeAction = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ObjectAttributeActionType !== undefined &&
        input.ObjectAttributeActionType !== null && { ObjectAttributeActionType: input.ObjectAttributeActionType }
    ),
    input.ObjectAttributeUpdateValue !== undefined &&
      input.ObjectAttributeUpdateValue !== null && {
        ObjectAttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(
          input.ObjectAttributeUpdateValue,
          context
        ),
      }
  );
};
var serializeAws_restJson1ObjectAttributeRange = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeKey !== undefined &&
        input.AttributeKey !== null && { AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context) }
    ),
    input.Range !== undefined &&
      input.Range !== null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }
  );
};
var serializeAws_restJson1ObjectAttributeRangeList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ObjectAttributeRange(entry, context);
    });
};
var serializeAws_restJson1ObjectAttributeUpdate = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ObjectAttributeAction !== undefined &&
        input.ObjectAttributeAction !== null && {
          ObjectAttributeAction: serializeAws_restJson1ObjectAttributeAction(input.ObjectAttributeAction, context),
        }
    ),
    input.ObjectAttributeKey !== undefined &&
      input.ObjectAttributeKey !== null && {
        ObjectAttributeKey: serializeAws_restJson1AttributeKey(input.ObjectAttributeKey, context),
      }
  );
};
var serializeAws_restJson1ObjectAttributeUpdateList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ObjectAttributeUpdate(entry, context);
    });
};
var serializeAws_restJson1ObjectReference = function (input, context) {
  return __assign({}, input.Selector !== undefined && input.Selector !== null && { Selector: input.Selector });
};
var serializeAws_restJson1Rule = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Parameters !== undefined &&
        input.Parameters !== null && { Parameters: serializeAws_restJson1RuleParameterMap(input.Parameters, context) }
    ),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_restJson1RuleMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = serializeAws_restJson1Rule(value, context)), _b));
  }, {});
};
var serializeAws_restJson1RuleParameterMap = function (input, context) {
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
var serializeAws_restJson1SchemaFacet = function (input, context) {
  return __assign(
    __assign({}, input.FacetName !== undefined && input.FacetName !== null && { FacetName: input.FacetName }),
    input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }
  );
};
var serializeAws_restJson1SchemaFacetList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SchemaFacet(entry, context);
    });
};
var serializeAws_restJson1Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
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
      return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1TypedAttributeValue = function (input, context) {
  return TypedAttributeValue.visit(input, {
    BinaryValue: function (value) {
      return { BinaryValue: context.base64Encoder(value) };
    },
    BooleanValue: function (value) {
      return { BooleanValue: value };
    },
    DatetimeValue: function (value) {
      return { DatetimeValue: Math.round(value.getTime() / 1000) };
    },
    NumberValue: function (value) {
      return { NumberValue: value };
    },
    StringValue: function (value) {
      return { StringValue: value };
    },
    _: function (name, value) {
      return { name: value };
    },
  });
};
var serializeAws_restJson1TypedAttributeValueRange = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.EndMode !== undefined && input.EndMode !== null && { EndMode: input.EndMode }),
        input.EndValue !== undefined &&
          input.EndValue !== null && { EndValue: serializeAws_restJson1TypedAttributeValue(input.EndValue, context) }
      ),
      input.StartMode !== undefined && input.StartMode !== null && { StartMode: input.StartMode }
    ),
    input.StartValue !== undefined &&
      input.StartValue !== null && {
        StartValue: serializeAws_restJson1TypedAttributeValue(input.StartValue, context),
      }
  );
};
var serializeAws_restJson1TypedLinkAttributeDefinition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.DefaultValue !== undefined &&
                input.DefaultValue !== null && {
                  DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
                }
            ),
            input.IsImmutable !== undefined && input.IsImmutable !== null && { IsImmutable: input.IsImmutable }
          ),
          input.Name !== undefined && input.Name !== null && { Name: input.Name }
        ),
        input.RequiredBehavior !== undefined &&
          input.RequiredBehavior !== null && { RequiredBehavior: input.RequiredBehavior }
      ),
      input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }
    ),
    input.Type !== undefined && input.Type !== null && { Type: input.Type }
  );
};
var serializeAws_restJson1TypedLinkAttributeDefinitionList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
};
var serializeAws_restJson1TypedLinkAttributeRange = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }
    ),
    input.Range !== undefined &&
      input.Range !== null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }
  );
};
var serializeAws_restJson1TypedLinkAttributeRangeList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkAttributeRange(entry, context);
    });
};
var serializeAws_restJson1TypedLinkFacet = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.Attributes !== undefined &&
          input.Attributes !== null && {
            Attributes: serializeAws_restJson1TypedLinkAttributeDefinitionList(input.Attributes, context),
          }
      ),
      input.IdentityAttributeOrder !== undefined &&
        input.IdentityAttributeOrder !== null && {
          IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(input.IdentityAttributeOrder, context),
        }
    ),
    input.Name !== undefined && input.Name !== null && { Name: input.Name }
  );
};
var serializeAws_restJson1TypedLinkFacetAttributeUpdate = function (input, context) {
  return __assign(
    __assign({}, input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    input.Attribute !== undefined &&
      input.Attribute !== null && {
        Attribute: serializeAws_restJson1TypedLinkAttributeDefinition(input.Attribute, context),
      }
  );
};
var serializeAws_restJson1TypedLinkFacetAttributeUpdateList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkFacetAttributeUpdate(entry, context);
    });
};
var serializeAws_restJson1TypedLinkSchemaAndFacetName = function (input, context) {
  return __assign(
    __assign({}, input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
    input.TypedLinkName !== undefined && input.TypedLinkName !== null && { TypedLinkName: input.TypedLinkName }
  );
};
var serializeAws_restJson1TypedLinkSpecifier = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.IdentityAttributeValues !== undefined &&
            input.IdentityAttributeValues !== null && {
              IdentityAttributeValues: serializeAws_restJson1AttributeNameAndValueList(
                input.IdentityAttributeValues,
                context
              ),
            }
        ),
        input.SourceObjectReference !== undefined &&
          input.SourceObjectReference !== null && {
            SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
          }
      ),
      input.TargetObjectReference !== undefined &&
        input.TargetObjectReference !== null && {
          TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
        }
    ),
    input.TypedLinkFacet !== undefined &&
      input.TypedLinkFacet !== null && {
        TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
      }
  );
};
var deserializeAws_restJson1Arns = function (output, context) {
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
var deserializeAws_restJson1AttributeKey = function (output, context) {
  return {
    FacetName: output.FacetName !== undefined && output.FacetName !== null ? output.FacetName : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
  };
};
var deserializeAws_restJson1AttributeKeyAndValue = function (output, context) {
  return {
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_restJson1AttributeKey(output.Key, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined,
  };
};
var deserializeAws_restJson1AttributeKeyAndValueList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
};
var deserializeAws_restJson1AttributeNameAndValue = function (output, context) {
  return {
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined,
  };
};
var deserializeAws_restJson1AttributeNameAndValueList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttributeNameAndValue(entry, context);
    });
};
var deserializeAws_restJson1AttributeNameList = function (output, context) {
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
var deserializeAws_restJson1BatchAddFacetToObjectResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchAttachObjectResponse = function (output, context) {
  return {
    attachedObjectIdentifier:
      output.attachedObjectIdentifier !== undefined && output.attachedObjectIdentifier !== null
        ? output.attachedObjectIdentifier
        : undefined,
  };
};
var deserializeAws_restJson1BatchAttachPolicyResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchAttachToIndexResponse = function (output, context) {
  return {
    AttachedObjectIdentifier:
      output.AttachedObjectIdentifier !== undefined && output.AttachedObjectIdentifier !== null
        ? output.AttachedObjectIdentifier
        : undefined,
  };
};
var deserializeAws_restJson1BatchAttachTypedLinkResponse = function (output, context) {
  return {
    TypedLinkSpecifier:
      output.TypedLinkSpecifier !== undefined && output.TypedLinkSpecifier !== null
        ? deserializeAws_restJson1TypedLinkSpecifier(output.TypedLinkSpecifier, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchCreateIndexResponse = function (output, context) {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
var deserializeAws_restJson1BatchCreateObjectResponse = function (output, context) {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
var deserializeAws_restJson1BatchDeleteObjectResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchDetachFromIndexResponse = function (output, context) {
  return {
    DetachedObjectIdentifier:
      output.DetachedObjectIdentifier !== undefined && output.DetachedObjectIdentifier !== null
        ? output.DetachedObjectIdentifier
        : undefined,
  };
};
var deserializeAws_restJson1BatchDetachObjectResponse = function (output, context) {
  return {
    detachedObjectIdentifier:
      output.detachedObjectIdentifier !== undefined && output.detachedObjectIdentifier !== null
        ? output.detachedObjectIdentifier
        : undefined,
  };
};
var deserializeAws_restJson1BatchDetachPolicyResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchDetachTypedLinkResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchGetLinkAttributesResponse = function (output, context) {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchGetObjectAttributesResponse = function (output, context) {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchGetObjectInformationResponse = function (output, context) {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
    SchemaFacets:
      output.SchemaFacets !== undefined && output.SchemaFacets !== null
        ? deserializeAws_restJson1SchemaFacetList(output.SchemaFacets, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchListAttachedIndicesResponse = function (output, context) {
  return {
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListIncomingTypedLinksResponse = function (output, context) {
  return {
    LinkSpecifiers:
      output.LinkSpecifiers !== undefined && output.LinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.LinkSpecifiers, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListIndexResponse = function (output, context) {
  return {
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListObjectAttributesResponse = function (output, context) {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListObjectChildrenResponse = function (output, context) {
  return {
    Children:
      output.Children !== undefined && output.Children !== null
        ? deserializeAws_restJson1LinkNameToObjectIdentifierMap(output.Children, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListObjectParentPathsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PathToObjectIdentifiersList:
      output.PathToObjectIdentifiersList !== undefined && output.PathToObjectIdentifiersList !== null
        ? deserializeAws_restJson1PathToObjectIdentifiersList(output.PathToObjectIdentifiersList, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchListObjectParentsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ParentLinks:
      output.ParentLinks !== undefined && output.ParentLinks !== null
        ? deserializeAws_restJson1ObjectIdentifierAndLinkNameList(output.ParentLinks, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchListObjectPoliciesResponse = function (output, context) {
  return {
    AttachedPolicyIds:
      output.AttachedPolicyIds !== undefined && output.AttachedPolicyIds !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.AttachedPolicyIds, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_restJson1BatchListOutgoingTypedLinksResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TypedLinkSpecifiers:
      output.TypedLinkSpecifiers !== undefined && output.TypedLinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.TypedLinkSpecifiers, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchListPolicyAttachmentsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined && output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchLookupPolicyResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PolicyToPathList:
      output.PolicyToPathList !== undefined && output.PolicyToPathList !== null
        ? deserializeAws_restJson1PolicyToPathList(output.PolicyToPathList, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchReadException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_restJson1BatchReadOperationResponse = function (output, context) {
  return {
    ExceptionResponse:
      output.ExceptionResponse !== undefined && output.ExceptionResponse !== null
        ? deserializeAws_restJson1BatchReadException(output.ExceptionResponse, context)
        : undefined,
    SuccessfulResponse:
      output.SuccessfulResponse !== undefined && output.SuccessfulResponse !== null
        ? deserializeAws_restJson1BatchReadSuccessfulResponse(output.SuccessfulResponse, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchReadOperationResponseList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchReadOperationResponse(entry, context);
    });
};
var deserializeAws_restJson1BatchReadSuccessfulResponse = function (output, context) {
  return {
    GetLinkAttributes:
      output.GetLinkAttributes !== undefined && output.GetLinkAttributes !== null
        ? deserializeAws_restJson1BatchGetLinkAttributesResponse(output.GetLinkAttributes, context)
        : undefined,
    GetObjectAttributes:
      output.GetObjectAttributes !== undefined && output.GetObjectAttributes !== null
        ? deserializeAws_restJson1BatchGetObjectAttributesResponse(output.GetObjectAttributes, context)
        : undefined,
    GetObjectInformation:
      output.GetObjectInformation !== undefined && output.GetObjectInformation !== null
        ? deserializeAws_restJson1BatchGetObjectInformationResponse(output.GetObjectInformation, context)
        : undefined,
    ListAttachedIndices:
      output.ListAttachedIndices !== undefined && output.ListAttachedIndices !== null
        ? deserializeAws_restJson1BatchListAttachedIndicesResponse(output.ListAttachedIndices, context)
        : undefined,
    ListIncomingTypedLinks:
      output.ListIncomingTypedLinks !== undefined && output.ListIncomingTypedLinks !== null
        ? deserializeAws_restJson1BatchListIncomingTypedLinksResponse(output.ListIncomingTypedLinks, context)
        : undefined,
    ListIndex:
      output.ListIndex !== undefined && output.ListIndex !== null
        ? deserializeAws_restJson1BatchListIndexResponse(output.ListIndex, context)
        : undefined,
    ListObjectAttributes:
      output.ListObjectAttributes !== undefined && output.ListObjectAttributes !== null
        ? deserializeAws_restJson1BatchListObjectAttributesResponse(output.ListObjectAttributes, context)
        : undefined,
    ListObjectChildren:
      output.ListObjectChildren !== undefined && output.ListObjectChildren !== null
        ? deserializeAws_restJson1BatchListObjectChildrenResponse(output.ListObjectChildren, context)
        : undefined,
    ListObjectParentPaths:
      output.ListObjectParentPaths !== undefined && output.ListObjectParentPaths !== null
        ? deserializeAws_restJson1BatchListObjectParentPathsResponse(output.ListObjectParentPaths, context)
        : undefined,
    ListObjectParents:
      output.ListObjectParents !== undefined && output.ListObjectParents !== null
        ? deserializeAws_restJson1BatchListObjectParentsResponse(output.ListObjectParents, context)
        : undefined,
    ListObjectPolicies:
      output.ListObjectPolicies !== undefined && output.ListObjectPolicies !== null
        ? deserializeAws_restJson1BatchListObjectPoliciesResponse(output.ListObjectPolicies, context)
        : undefined,
    ListOutgoingTypedLinks:
      output.ListOutgoingTypedLinks !== undefined && output.ListOutgoingTypedLinks !== null
        ? deserializeAws_restJson1BatchListOutgoingTypedLinksResponse(output.ListOutgoingTypedLinks, context)
        : undefined,
    ListPolicyAttachments:
      output.ListPolicyAttachments !== undefined && output.ListPolicyAttachments !== null
        ? deserializeAws_restJson1BatchListPolicyAttachmentsResponse(output.ListPolicyAttachments, context)
        : undefined,
    LookupPolicy:
      output.LookupPolicy !== undefined && output.LookupPolicy !== null
        ? deserializeAws_restJson1BatchLookupPolicyResponse(output.LookupPolicy, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchRemoveFacetFromObjectResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchUpdateLinkAttributesResponse = function (output, context) {
  return {};
};
var deserializeAws_restJson1BatchUpdateObjectAttributesResponse = function (output, context) {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
var deserializeAws_restJson1BatchWriteOperationResponse = function (output, context) {
  return {
    AddFacetToObject:
      output.AddFacetToObject !== undefined && output.AddFacetToObject !== null
        ? deserializeAws_restJson1BatchAddFacetToObjectResponse(output.AddFacetToObject, context)
        : undefined,
    AttachObject:
      output.AttachObject !== undefined && output.AttachObject !== null
        ? deserializeAws_restJson1BatchAttachObjectResponse(output.AttachObject, context)
        : undefined,
    AttachPolicy:
      output.AttachPolicy !== undefined && output.AttachPolicy !== null
        ? deserializeAws_restJson1BatchAttachPolicyResponse(output.AttachPolicy, context)
        : undefined,
    AttachToIndex:
      output.AttachToIndex !== undefined && output.AttachToIndex !== null
        ? deserializeAws_restJson1BatchAttachToIndexResponse(output.AttachToIndex, context)
        : undefined,
    AttachTypedLink:
      output.AttachTypedLink !== undefined && output.AttachTypedLink !== null
        ? deserializeAws_restJson1BatchAttachTypedLinkResponse(output.AttachTypedLink, context)
        : undefined,
    CreateIndex:
      output.CreateIndex !== undefined && output.CreateIndex !== null
        ? deserializeAws_restJson1BatchCreateIndexResponse(output.CreateIndex, context)
        : undefined,
    CreateObject:
      output.CreateObject !== undefined && output.CreateObject !== null
        ? deserializeAws_restJson1BatchCreateObjectResponse(output.CreateObject, context)
        : undefined,
    DeleteObject:
      output.DeleteObject !== undefined && output.DeleteObject !== null
        ? deserializeAws_restJson1BatchDeleteObjectResponse(output.DeleteObject, context)
        : undefined,
    DetachFromIndex:
      output.DetachFromIndex !== undefined && output.DetachFromIndex !== null
        ? deserializeAws_restJson1BatchDetachFromIndexResponse(output.DetachFromIndex, context)
        : undefined,
    DetachObject:
      output.DetachObject !== undefined && output.DetachObject !== null
        ? deserializeAws_restJson1BatchDetachObjectResponse(output.DetachObject, context)
        : undefined,
    DetachPolicy:
      output.DetachPolicy !== undefined && output.DetachPolicy !== null
        ? deserializeAws_restJson1BatchDetachPolicyResponse(output.DetachPolicy, context)
        : undefined,
    DetachTypedLink:
      output.DetachTypedLink !== undefined && output.DetachTypedLink !== null
        ? deserializeAws_restJson1BatchDetachTypedLinkResponse(output.DetachTypedLink, context)
        : undefined,
    RemoveFacetFromObject:
      output.RemoveFacetFromObject !== undefined && output.RemoveFacetFromObject !== null
        ? deserializeAws_restJson1BatchRemoveFacetFromObjectResponse(output.RemoveFacetFromObject, context)
        : undefined,
    UpdateLinkAttributes:
      output.UpdateLinkAttributes !== undefined && output.UpdateLinkAttributes !== null
        ? deserializeAws_restJson1BatchUpdateLinkAttributesResponse(output.UpdateLinkAttributes, context)
        : undefined,
    UpdateObjectAttributes:
      output.UpdateObjectAttributes !== undefined && output.UpdateObjectAttributes !== null
        ? deserializeAws_restJson1BatchUpdateObjectAttributesResponse(output.UpdateObjectAttributes, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchWriteOperationResponseList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchWriteOperationResponse(entry, context);
    });
};
var deserializeAws_restJson1Directory = function (output, context) {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    DirectoryArn: output.DirectoryArn !== undefined && output.DirectoryArn !== null ? output.DirectoryArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
var deserializeAws_restJson1DirectoryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Directory(entry, context);
    });
};
var deserializeAws_restJson1Facet = function (output, context) {
  return {
    FacetStyle: output.FacetStyle !== undefined && output.FacetStyle !== null ? output.FacetStyle : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ObjectType: output.ObjectType !== undefined && output.ObjectType !== null ? output.ObjectType : undefined,
  };
};
var deserializeAws_restJson1FacetAttribute = function (output, context) {
  return {
    AttributeDefinition:
      output.AttributeDefinition !== undefined && output.AttributeDefinition !== null
        ? deserializeAws_restJson1FacetAttributeDefinition(output.AttributeDefinition, context)
        : undefined,
    AttributeReference:
      output.AttributeReference !== undefined && output.AttributeReference !== null
        ? deserializeAws_restJson1FacetAttributeReference(output.AttributeReference, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null ? output.RequiredBehavior : undefined,
  };
};
var deserializeAws_restJson1FacetAttributeDefinition = function (output, context) {
  return {
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.DefaultValue, context)
        : undefined,
    IsImmutable: output.IsImmutable !== undefined && output.IsImmutable !== null ? output.IsImmutable : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_restJson1FacetAttributeList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FacetAttribute(entry, context);
    });
};
var deserializeAws_restJson1FacetAttributeReference = function (output, context) {
  return {
    TargetAttributeName:
      output.TargetAttributeName !== undefined && output.TargetAttributeName !== null
        ? output.TargetAttributeName
        : undefined,
    TargetFacetName:
      output.TargetFacetName !== undefined && output.TargetFacetName !== null ? output.TargetFacetName : undefined,
  };
};
var deserializeAws_restJson1FacetNameList = function (output, context) {
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
var deserializeAws_restJson1IndexAttachment = function (output, context) {
  return {
    IndexedAttributes:
      output.IndexedAttributes !== undefined && output.IndexedAttributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.IndexedAttributes, context)
        : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
var deserializeAws_restJson1IndexAttachmentList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1IndexAttachment(entry, context);
    });
};
var deserializeAws_restJson1LinkNameToObjectIdentifierMap = function (output, context) {
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
var deserializeAws_restJson1ObjectIdentifierAndLinkNameList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple(entry, context);
    });
};
var deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple = function (output, context) {
  return {
    LinkName: output.LinkName !== undefined && output.LinkName !== null ? output.LinkName : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
var deserializeAws_restJson1ObjectIdentifierList = function (output, context) {
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
var deserializeAws_restJson1ObjectIdentifierToLinkNameMap = function (output, context) {
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
var deserializeAws_restJson1ObjectReference = function (output, context) {
  return {
    Selector: output.Selector !== undefined && output.Selector !== null ? output.Selector : undefined,
  };
};
var deserializeAws_restJson1PathToObjectIdentifiers = function (output, context) {
  return {
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined && output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  };
};
var deserializeAws_restJson1PathToObjectIdentifiersList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PathToObjectIdentifiers(entry, context);
    });
};
var deserializeAws_restJson1PolicyAttachment = function (output, context) {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
  };
};
var deserializeAws_restJson1PolicyAttachmentList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PolicyAttachment(entry, context);
    });
};
var deserializeAws_restJson1PolicyToPath = function (output, context) {
  return {
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    Policies:
      output.Policies !== undefined && output.Policies !== null
        ? deserializeAws_restJson1PolicyAttachmentList(output.Policies, context)
        : undefined,
  };
};
var deserializeAws_restJson1PolicyToPathList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PolicyToPath(entry, context);
    });
};
var deserializeAws_restJson1Rule = function (output, context) {
  return {
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1RuleParameterMap(output.Parameters, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_restJson1RuleMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = deserializeAws_restJson1Rule(value, context)), _b));
  }, {});
};
var deserializeAws_restJson1RuleParameterMap = function (output, context) {
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
var deserializeAws_restJson1SchemaFacet = function (output, context) {
  return {
    FacetName: output.FacetName !== undefined && output.FacetName !== null ? output.FacetName : undefined,
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
  };
};
var deserializeAws_restJson1SchemaFacetList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SchemaFacet(entry, context);
    });
};
var deserializeAws_restJson1Tag = function (output, context) {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
      return deserializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1TypedAttributeValue = function (output, context) {
  if (output.BinaryValue !== undefined && output.BinaryValue !== null) {
    return {
      BinaryValue: context.base64Decoder(output.BinaryValue),
    };
  }
  if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
    return {
      BooleanValue: output.BooleanValue,
    };
  }
  if (output.DatetimeValue !== undefined && output.DatetimeValue !== null) {
    return {
      DatetimeValue: new Date(Math.round(output.DatetimeValue * 1000)),
    };
  }
  if (output.NumberValue !== undefined && output.NumberValue !== null) {
    return {
      NumberValue: output.NumberValue,
    };
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    return {
      StringValue: output.StringValue,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1TypedLinkAttributeDefinition = function (output, context) {
  return {
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.DefaultValue, context)
        : undefined,
    IsImmutable: output.IsImmutable !== undefined && output.IsImmutable !== null ? output.IsImmutable : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null ? output.RequiredBehavior : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
var deserializeAws_restJson1TypedLinkAttributeDefinitionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
};
var deserializeAws_restJson1TypedLinkNameList = function (output, context) {
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
var deserializeAws_restJson1TypedLinkSchemaAndFacetName = function (output, context) {
  return {
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
    TypedLinkName:
      output.TypedLinkName !== undefined && output.TypedLinkName !== null ? output.TypedLinkName : undefined,
  };
};
var deserializeAws_restJson1TypedLinkSpecifier = function (output, context) {
  return {
    IdentityAttributeValues:
      output.IdentityAttributeValues !== undefined && output.IdentityAttributeValues !== null
        ? deserializeAws_restJson1AttributeNameAndValueList(output.IdentityAttributeValues, context)
        : undefined,
    SourceObjectReference:
      output.SourceObjectReference !== undefined && output.SourceObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(output.SourceObjectReference, context)
        : undefined,
    TargetObjectReference:
      output.TargetObjectReference !== undefined && output.TargetObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(output.TargetObjectReference, context)
        : undefined,
    TypedLinkFacet:
      output.TypedLinkFacet !== undefined && output.TypedLinkFacet !== null
        ? deserializeAws_restJson1TypedLinkSchemaAndFacetName(output.TypedLinkFacet, context)
        : undefined,
  };
};
var deserializeAws_restJson1TypedLinkSpecifierList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TypedLinkSpecifier(entry, context);
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
