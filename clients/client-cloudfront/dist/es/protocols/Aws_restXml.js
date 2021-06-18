import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import {
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_restXmlCreateCachePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/cache-policy";
          if (input.CachePolicyConfig !== undefined) {
            body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
          }
          if (input.CachePolicyConfig !== undefined) {
            contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront";
          if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
            body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
              input.CloudFrontOriginAccessIdentityConfig,
              context
            );
          }
          if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
            contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
              input.CloudFrontOriginAccessIdentityConfig,
              context
            );
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/distribution";
          if (input.DistributionConfig !== undefined) {
            body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
          }
          if (input.DistributionConfig !== undefined) {
            contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateDistributionWithTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/distribution";
          query = {
            WithTags: "",
          };
          if (input.DistributionConfigWithTags !== undefined) {
            body = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
          }
          if (input.DistributionConfigWithTags !== undefined) {
            contents = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/field-level-encryption";
          if (input.FieldLevelEncryptionConfig !== undefined) {
            body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
          }
          if (input.FieldLevelEncryptionConfig !== undefined) {
            contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/field-level-encryption-profile";
          if (input.FieldLevelEncryptionProfileConfig !== undefined) {
            body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(
              input.FieldLevelEncryptionProfileConfig,
              context
            );
          }
          if (input.FieldLevelEncryptionProfileConfig !== undefined) {
            contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(
              input.FieldLevelEncryptionProfileConfig,
              context
            );
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/function";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("CreateFunctionRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.FunctionCode !== undefined) {
            node = new __XmlNode("FunctionBlob")
              .addChildNode(new __XmlText(context.base64Encoder(input.FunctionCode)))
              .withName("FunctionCode");
            bodyNode.addChildNode(node);
          }
          if (input.FunctionConfig !== undefined) {
            node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
            bodyNode.addChildNode(node);
          }
          if (input.Name !== undefined) {
            node = new __XmlNode("FunctionName").addChildNode(new __XmlText(input.Name)).withName("Name");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlCreateInvalidationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
          }
          if (input.InvalidationBatch !== undefined) {
            body = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
          }
          if (input.InvalidationBatch !== undefined) {
            contents = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateKeyGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/key-group";
          if (input.KeyGroupConfig !== undefined) {
            body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
          }
          if (input.KeyGroupConfig !== undefined) {
            contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateMonitoringSubscriptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
          }
          if (input.MonitoringSubscription !== undefined) {
            body = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
          }
          if (input.MonitoringSubscription !== undefined) {
            contents = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateOriginRequestPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/origin-request-policy";
          if (input.OriginRequestPolicyConfig !== undefined) {
            body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
          }
          if (input.OriginRequestPolicyConfig !== undefined) {
            contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreatePublicKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/public-key";
          if (input.PublicKeyConfig !== undefined) {
            body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
          }
          if (input.PublicKeyConfig !== undefined) {
            contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateRealtimeLogConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers,
      resolvedPath,
      body,
      bodyNode,
      nodes,
      containerNode_1,
      nodes,
      containerNode_2,
      node,
      node,
      _a,
      hostname,
      _b,
      protocol,
      port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/realtime-log-config";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("CreateRealtimeLogConfigRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.EndPoints !== undefined) {
            nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
            containerNode_1 = new __XmlNode("EndPoints");
            nodes.map(function (node) {
              containerNode_1.addChildNode(node);
            });
            bodyNode.addChildNode(containerNode_1);
          }
          if (input.Fields !== undefined) {
            nodes = serializeAws_restXmlFieldList(input.Fields, context);
            containerNode_2 = new __XmlNode("Fields");
            nodes.map(function (node) {
              containerNode_2.addChildNode(node);
            });
            bodyNode.addChildNode(containerNode_2);
          }
          if (input.Name !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
            bodyNode.addChildNode(node);
          }
          if (input.SamplingRate !== undefined) {
            node = new __XmlNode("long")
              .addChildNode(new __XmlText(String(input.SamplingRate)))
              .withName("SamplingRate");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlCreateStreamingDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/streaming-distribution";
          if (input.StreamingDistributionConfig !== undefined) {
            body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
          }
          if (input.StreamingDistributionConfig !== undefined) {
            contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlCreateStreamingDistributionWithTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/streaming-distribution";
          query = {
            WithTags: "",
          };
          if (input.StreamingDistributionConfigWithTags !== undefined) {
            body = serializeAws_restXmlStreamingDistributionConfigWithTags(
              input.StreamingDistributionConfigWithTags,
              context
            );
          }
          if (input.StreamingDistributionConfigWithTags !== undefined) {
            contents = serializeAws_restXmlStreamingDistributionConfigWithTags(
              input.StreamingDistributionConfigWithTags,
              context
            );
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlDeleteCachePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/cache-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/distribution/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/field-level-encryption/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/function/{Name}";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restXmlDeleteKeyGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/key-group/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteMonitoringSubscriptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
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
export var serializeAws_restXmlDeleteOriginRequestPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeletePublicKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/public-key/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDeleteRealtimeLogConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/delete-realtime-log-config";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("DeleteRealtimeLogConfigRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.ARN !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
            bodyNode.addChildNode(node);
          }
          if (input.Name !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlDeleteStreamingDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/streaming-distribution/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlDescribeFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/function/{Name}/describe";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
          }
          query = __assign({}, input.Stage !== undefined && { Stage: input.Stage });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlGetCachePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/cache-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetCachePolicyConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/cache-policy/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distribution/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetDistributionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distribution/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetFieldLevelEncryptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetFieldLevelEncryptionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetFieldLevelEncryptionProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/function/{Name}";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
          }
          query = __assign({}, input.Stage !== undefined && { Stage: input.Stage });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlGetInvalidationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
          }
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetKeyGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/key-group/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetKeyGroupConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/key-group/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetMonitoringSubscriptionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
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
export var serializeAws_restXmlGetOriginRequestPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetOriginRequestPolicyConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-request-policy/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetPublicKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/public-key/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetPublicKeyConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/public-key/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetRealtimeLogConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/get-realtime-log-config";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("GetRealtimeLogConfigRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.ARN !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
            bodyNode.addChildNode(node);
          }
          if (input.Name !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlGetStreamingDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/streaming-distribution/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlGetStreamingDistributionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/streaming-distribution/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restXmlListCachePoliciesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/cache-policy";
          query = __assign(
            __assign(
              __assign({}, input.Type !== undefined && { Type: input.Type }),
              input.Marker !== undefined && { Marker: input.Marker }
            ),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListDistributionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distribution";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListDistributionsByCachePolicyIdCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}";
          if (input.CachePolicyId !== undefined) {
            labelValue = input.CachePolicyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: CachePolicyId.");
            }
            resolvedPath = resolvedPath.replace("{CachePolicyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: CachePolicyId.");
          }
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListDistributionsByKeyGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}";
          if (input.KeyGroupId !== undefined) {
            labelValue = input.KeyGroupId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: KeyGroupId.");
            }
            resolvedPath = resolvedPath.replace("{KeyGroupId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: KeyGroupId.");
          }
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}";
          if (input.OriginRequestPolicyId !== undefined) {
            labelValue = input.OriginRequestPolicyId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: OriginRequestPolicyId.");
            }
            resolvedPath = resolvedPath.replace("{OriginRequestPolicyId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: OriginRequestPolicyId.");
          }
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, bodyNode, node, node, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/distributionsByRealtimeLogConfig";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("ListDistributionsByRealtimeLogConfigRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.Marker !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.Marker)).withName("Marker");
            bodyNode.addChildNode(node);
          }
          if (input.MaxItems !== undefined) {
            node = new __XmlNode("Integer").addChildNode(new __XmlText(String(input.MaxItems))).withName("MaxItems");
            bodyNode.addChildNode(node);
          }
          if (input.RealtimeLogConfigArn !== undefined) {
            node = new __XmlNode("string")
              .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
              .withName("RealtimeLogConfigArn");
            bodyNode.addChildNode(node);
          }
          if (input.RealtimeLogConfigName !== undefined) {
            node = new __XmlNode("string")
              .addChildNode(new __XmlText(input.RealtimeLogConfigName))
              .withName("RealtimeLogConfigName");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlListDistributionsByWebACLIdCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distributionsByWebACLId/{WebACLId}";
          if (input.WebACLId !== undefined) {
            labelValue = input.WebACLId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: WebACLId.");
            }
            resolvedPath = resolvedPath.replace("{WebACLId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: WebACLId.");
          }
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListFieldLevelEncryptionConfigsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListFieldLevelEncryptionProfilesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/field-level-encryption-profile";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListFunctionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/function";
          query = __assign(
            __assign(
              __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
              input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
            ),
            input.Stage !== undefined && { Stage: input.Stage }
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
export var serializeAws_restXmlListInvalidationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation";
          if (input.DistributionId !== undefined) {
            labelValue = input.DistributionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: DistributionId.");
            }
            resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: DistributionId.");
          }
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListKeyGroupsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/key-group";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListOriginRequestPoliciesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/origin-request-policy";
          query = __assign(
            __assign(
              __assign({}, input.Type !== undefined && { Type: input.Type }),
              input.Marker !== undefined && { Marker: input.Marker }
            ),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListPublicKeysCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/public-key";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListRealtimeLogConfigsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/realtime-log-config";
          query = __assign(
            __assign({}, input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
            input.Marker !== undefined && { Marker: input.Marker }
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
export var serializeAws_restXmlListStreamingDistributionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/streaming-distribution";
          query = __assign(
            __assign({}, input.Marker !== undefined && { Marker: input.Marker }),
            input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }
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
export var serializeAws_restXmlListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/2020-05-31/tagging";
          query = __assign({}, input.Resource !== undefined && { Resource: input.Resource });
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlPublishFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign({}, isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch });
          resolvedPath = "/2020-05-31/function/{Name}/publish";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restXmlTagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/tagging";
          query = __assign({ Operation: "Tag" }, input.Resource !== undefined && { Resource: input.Resource });
          if (input.Tags !== undefined) {
            body = serializeAws_restXmlTags(input.Tags, context);
          }
          if (input.Tags !== undefined) {
            contents = serializeAws_restXmlTags(input.Tags, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlTestFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/function/{Name}/test";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
          }
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("TestFunctionRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.EventObject !== undefined) {
            node = new __XmlNode("FunctionEventObject")
              .addChildNode(new __XmlText(context.base64Encoder(input.EventObject)))
              .withName("EventObject");
            bodyNode.addChildNode(node);
          }
          if (input.Stage !== undefined) {
            node = new __XmlNode("FunctionStage").addChildNode(new __XmlText(input.Stage)).withName("Stage");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlUntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/tagging";
          query = __assign({ Operation: "Untag" }, input.Resource !== undefined && { Resource: input.Resource });
          if (input.TagKeys !== undefined) {
            body = serializeAws_restXmlTagKeys(input.TagKeys, context);
          }
          if (input.TagKeys !== undefined) {
            contents = serializeAws_restXmlTagKeys(input.TagKeys, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
export var serializeAws_restXmlUpdateCachePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/cache-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.CachePolicyConfig !== undefined) {
            body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
          }
          if (input.CachePolicyConfig !== undefined) {
            contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
            body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
              input.CloudFrontOriginAccessIdentityConfig,
              context
            );
          }
          if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
            contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
              input.CloudFrontOriginAccessIdentityConfig,
              context
            );
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/distribution/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.DistributionConfig !== undefined) {
            body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
          }
          if (input.DistributionConfig !== undefined) {
            contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/field-level-encryption/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.FieldLevelEncryptionConfig !== undefined) {
            body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
          }
          if (input.FieldLevelEncryptionConfig !== undefined) {
            contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.FieldLevelEncryptionProfileConfig !== undefined) {
            body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(
              input.FieldLevelEncryptionProfileConfig,
              context
            );
          }
          if (input.FieldLevelEncryptionProfileConfig !== undefined) {
            contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(
              input.FieldLevelEncryptionProfileConfig,
              context
            );
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateFunctionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, bodyNode, node, node, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/function/{Name}";
          if (input.Name !== undefined) {
            labelValue = input.Name;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Name.");
            }
            resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Name.");
          }
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("UpdateFunctionRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.FunctionCode !== undefined) {
            node = new __XmlNode("FunctionBlob")
              .addChildNode(new __XmlText(context.base64Encoder(input.FunctionCode)))
              .withName("FunctionCode");
            bodyNode.addChildNode(node);
          }
          if (input.FunctionConfig !== undefined) {
            node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlUpdateKeyGroupCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/key-group/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.KeyGroupConfig !== undefined) {
            body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
          }
          if (input.KeyGroupConfig !== undefined) {
            contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateOriginRequestPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.OriginRequestPolicyConfig !== undefined) {
            body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
          }
          if (input.OriginRequestPolicyConfig !== undefined) {
            contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdatePublicKeyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/public-key/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.PublicKeyConfig !== undefined) {
            body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
          }
          if (input.PublicKeyConfig !== undefined) {
            contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restXmlUpdateRealtimeLogConfigCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers,
      resolvedPath,
      body,
      bodyNode,
      node,
      nodes,
      containerNode_3,
      nodes,
      containerNode_4,
      node,
      node,
      _a,
      hostname,
      _b,
      protocol,
      port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/xml",
          };
          resolvedPath = "/2020-05-31/realtime-log-config";
          body = '<?xml version="1.0" encoding="UTF-8"?>';
          bodyNode = new __XmlNode("UpdateRealtimeLogConfigRequest");
          bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
          if (input.ARN !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
            bodyNode.addChildNode(node);
          }
          if (input.EndPoints !== undefined) {
            nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
            containerNode_3 = new __XmlNode("EndPoints");
            nodes.map(function (node) {
              containerNode_3.addChildNode(node);
            });
            bodyNode.addChildNode(containerNode_3);
          }
          if (input.Fields !== undefined) {
            nodes = serializeAws_restXmlFieldList(input.Fields, context);
            containerNode_4 = new __XmlNode("Fields");
            nodes.map(function (node) {
              containerNode_4.addChildNode(node);
            });
            bodyNode.addChildNode(containerNode_4);
          }
          if (input.Name !== undefined) {
            node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
            bodyNode.addChildNode(node);
          }
          if (input.SamplingRate !== undefined) {
            node = new __XmlNode("long")
              .addChildNode(new __XmlText(String(input.SamplingRate)))
              .withName("SamplingRate");
            bodyNode.addChildNode(node);
          }
          body += bodyNode.toString();
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
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
export var serializeAws_restXmlUpdateStreamingDistributionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, contents, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = __assign(
            { "content-type": "application/xml" },
            isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }
          );
          resolvedPath = "/2020-05-31/streaming-distribution/{Id}/config";
          if (input.Id !== undefined) {
            labelValue = input.Id;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: Id.");
            }
            resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: Id.");
          }
          if (input.StreamingDistributionConfig !== undefined) {
            body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
          }
          if (input.StreamingDistributionConfig !== undefined) {
            contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
            body = '<?xml version="1.0" encoding="UTF-8"?>';
            contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
            body += contents.toString();
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
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restXmlCreateCachePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateCachePolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CachePolicy: undefined,
            ETag: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateCachePolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CachePolicyAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "TooManyCachePolicies":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#TooManyCachePolicies":
              return [3 /*break*/, 10];
            case "TooManyCookiesInCachePolicy":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
              return [3 /*break*/, 12];
            case "TooManyHeadersInCachePolicy":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
              return [3 /*break*/, 14];
            case "TooManyQueryStringsInCachePolicy":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCachePoliciesResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CloudFrontOriginAccessIdentity: undefined,
            ETag: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CloudFrontOriginAccessIdentityAlreadyExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
              return [3 /*break*/, 2];
            case "InconsistentQuantities":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 4];
            case "InvalidArgument":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 6];
            case "MissingBody":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 8];
            case "TooManyCloudFrontOriginAccessIdentities":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse(parsedOutput, context),
          ];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Distribution: undefined,
            ETag: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Distribution = deserializeAws_restXmlDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateDistributionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput,
      _a,
      response,
      errorCode,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      _r,
      _s,
      _t,
      _u,
      _v,
      _w,
      _x,
      _y,
      _z,
      _0,
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
      _10,
      _11,
      _12,
      _13,
      _14,
      _15,
      _16,
      _17,
      _18,
      _19,
      _20,
      _21,
      _22,
      _23,
      _24,
      _25,
      _26,
      _27,
      _28,
      _29,
      _30,
      _31,
      _32,
      _33,
      _34,
      parsedBody,
      message;
    var _35;
    return __generator(this, function (_36) {
      switch (_36.label) {
        case 0:
          _a = [__assign({}, output)];
          _35 = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_35.body = _36.sent()), _35)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "DistributionAlreadyExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#DistributionAlreadyExists":
              return [3 /*break*/, 6];
            case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 8];
            case "InconsistentQuantities":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 10];
            case "InvalidArgument":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 12];
            case "InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "InvalidErrorCode":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#InvalidErrorCode":
              return [3 /*break*/, 16];
            case "InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 26];
            case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 26];
            case "InvalidLocationCode":
              return [3 /*break*/, 28];
            case "com.amazonaws.cloudfront#InvalidLocationCode":
              return [3 /*break*/, 28];
            case "InvalidMinimumProtocolVersion":
              return [3 /*break*/, 30];
            case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
              return [3 /*break*/, 30];
            case "InvalidOrigin":
              return [3 /*break*/, 32];
            case "com.amazonaws.cloudfront#InvalidOrigin":
              return [3 /*break*/, 32];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "InvalidProtocolSettings":
              return [3 /*break*/, 40];
            case "com.amazonaws.cloudfront#InvalidProtocolSettings":
              return [3 /*break*/, 40];
            case "InvalidQueryStringParameters":
              return [3 /*break*/, 42];
            case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
              return [3 /*break*/, 42];
            case "InvalidRelativePath":
              return [3 /*break*/, 44];
            case "com.amazonaws.cloudfront#InvalidRelativePath":
              return [3 /*break*/, 44];
            case "InvalidRequiredProtocol":
              return [3 /*break*/, 46];
            case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
              return [3 /*break*/, 46];
            case "InvalidResponseCode":
              return [3 /*break*/, 48];
            case "com.amazonaws.cloudfront#InvalidResponseCode":
              return [3 /*break*/, 48];
            case "InvalidTTLOrder":
              return [3 /*break*/, 50];
            case "com.amazonaws.cloudfront#InvalidTTLOrder":
              return [3 /*break*/, 50];
            case "InvalidViewerCertificate":
              return [3 /*break*/, 52];
            case "com.amazonaws.cloudfront#InvalidViewerCertificate":
              return [3 /*break*/, 52];
            case "InvalidWebACLId":
              return [3 /*break*/, 54];
            case "com.amazonaws.cloudfront#InvalidWebACLId":
              return [3 /*break*/, 54];
            case "MissingBody":
              return [3 /*break*/, 56];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 56];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 58];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 58];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 60];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 60];
            case "NoSuchOrigin":
              return [3 /*break*/, 62];
            case "com.amazonaws.cloudfront#NoSuchOrigin":
              return [3 /*break*/, 62];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 64];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 64];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 66];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 66];
            case "RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 68];
            case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 68];
            case "TooManyCacheBehaviors":
              return [3 /*break*/, 70];
            case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
              return [3 /*break*/, 70];
            case "TooManyCertificates":
              return [3 /*break*/, 72];
            case "com.amazonaws.cloudfront#TooManyCertificates":
              return [3 /*break*/, 72];
            case "TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 74];
            case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 74];
            case "TooManyDistributionCNAMEs":
              return [3 /*break*/, 76];
            case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
              return [3 /*break*/, 76];
            case "TooManyDistributions":
              return [3 /*break*/, 78];
            case "com.amazonaws.cloudfront#TooManyDistributions":
              return [3 /*break*/, 78];
            case "TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 80];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 80];
            case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 82];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 82];
            case "TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 84];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 84];
            case "TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 86];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 86];
            case "TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 88];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 88];
            case "TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 90];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 90];
            case "TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 92];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 92];
            case "TooManyFunctionAssociations":
              return [3 /*break*/, 94];
            case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
              return [3 /*break*/, 94];
            case "TooManyHeadersInForwardedValues":
              return [3 /*break*/, 96];
            case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
              return [3 /*break*/, 96];
            case "TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 98];
            case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 98];
            case "TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 100];
            case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 100];
            case "TooManyOriginCustomHeaders":
              return [3 /*break*/, 102];
            case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
              return [3 /*break*/, 102];
            case "TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 104];
            case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 104];
            case "TooManyOrigins":
              return [3 /*break*/, 106];
            case "com.amazonaws.cloudfront#TooManyOrigins":
              return [3 /*break*/, 106];
            case "TooManyQueryStringParameters":
              return [3 /*break*/, 108];
            case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
              return [3 /*break*/, 108];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 110];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 110];
            case "TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 112];
            case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 112];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 114];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 114];
          }
          return [3 /*break*/, 116];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
              parsedOutput,
              context
            ),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 26:
          _q = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)];
        case 27:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _q.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 28:
          _r = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)];
        case 29:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _r.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 30:
          _s = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)];
        case 31:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _s.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 32:
          _t = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)];
        case 33:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _t.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 34:
          _u = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 35:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _u.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 36:
          _v = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)];
        case 37:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _v.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 38:
          _w = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)];
        case 39:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _w.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 40:
          _x = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context)];
        case 41:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _x.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 42:
          _y = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)];
        case 43:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _y.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 44:
          _z = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)];
        case 45:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _z.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 46:
          _0 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)];
        case 47:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _0.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 48:
          _1 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)];
        case 49:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _1.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 50:
          _2 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)];
        case 51:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _2.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 52:
          _3 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)];
        case 53:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _3.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 54:
          _4 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)];
        case 55:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _4.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 56:
          _5 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 57:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _5.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 58:
          _6 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 59:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _6.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 60:
          _7 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 61:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _7.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 62:
          _8 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)];
        case 63:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _8.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 64:
          _9 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 65:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _9.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 66:
          _10 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 67:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _10.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 68:
          _11 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)];
        case 69:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _11.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 70:
          _12 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)];
        case 71:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _12.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 72:
          _13 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)];
        case 73:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _13.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 74:
          _14 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)];
        case 75:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _14.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 76:
          _15 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)];
        case 77:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _15.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 78:
          _16 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context)];
        case 79:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _16.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 80:
          _17 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context),
          ];
        case 81:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _17.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 82:
          _18 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
              parsedOutput,
              context
            ),
          ];
        case 83:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _18.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 84:
          _19 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context),
          ];
        case 85:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _19.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 86:
          _20 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 87:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _20.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 88:
          _21 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context),
          ];
        case 89:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _21.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 90:
          _22 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context),
          ];
        case 91:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _22.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 92:
          _23 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context),
          ];
        case 93:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _23.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 94:
          _24 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)];
        case 95:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _24.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 96:
          _25 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)];
        case 97:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _25.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 98:
          _26 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context),
          ];
        case 99:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _26.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 100:
          _27 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)];
        case 101:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _27.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 102:
          _28 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)];
        case 103:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _28.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 104:
          _29 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)];
        case 105:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _29.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 106:
          _30 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)];
        case 107:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _30.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 108:
          _31 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)];
        case 109:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _31.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 110:
          _32 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 111:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _32.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 112:
          _33 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)];
        case 113:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _33.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 114:
          _34 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 115:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _34.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 116:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _36.label = 117;
        case 117:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlCreateDistributionWithTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateDistributionWithTagsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Distribution: undefined,
            ETag: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Distribution = deserializeAws_restXmlDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateDistributionWithTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput,
      _a,
      response,
      errorCode,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      _r,
      _s,
      _t,
      _u,
      _v,
      _w,
      _x,
      _y,
      _z,
      _0,
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
      _10,
      _11,
      _12,
      _13,
      _14,
      _15,
      _16,
      _17,
      _18,
      _19,
      _20,
      _21,
      _22,
      _23,
      _24,
      _25,
      _26,
      _27,
      _28,
      _29,
      _30,
      _31,
      _32,
      _33,
      _34,
      _35,
      parsedBody,
      message;
    var _36;
    return __generator(this, function (_37) {
      switch (_37.label) {
        case 0:
          _a = [__assign({}, output)];
          _36 = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_36.body = _37.sent()), _36)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "DistributionAlreadyExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#DistributionAlreadyExists":
              return [3 /*break*/, 6];
            case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 8];
            case "InconsistentQuantities":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 10];
            case "InvalidArgument":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 12];
            case "InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "InvalidErrorCode":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#InvalidErrorCode":
              return [3 /*break*/, 16];
            case "InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 26];
            case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 26];
            case "InvalidLocationCode":
              return [3 /*break*/, 28];
            case "com.amazonaws.cloudfront#InvalidLocationCode":
              return [3 /*break*/, 28];
            case "InvalidMinimumProtocolVersion":
              return [3 /*break*/, 30];
            case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
              return [3 /*break*/, 30];
            case "InvalidOrigin":
              return [3 /*break*/, 32];
            case "com.amazonaws.cloudfront#InvalidOrigin":
              return [3 /*break*/, 32];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "InvalidProtocolSettings":
              return [3 /*break*/, 40];
            case "com.amazonaws.cloudfront#InvalidProtocolSettings":
              return [3 /*break*/, 40];
            case "InvalidQueryStringParameters":
              return [3 /*break*/, 42];
            case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
              return [3 /*break*/, 42];
            case "InvalidRelativePath":
              return [3 /*break*/, 44];
            case "com.amazonaws.cloudfront#InvalidRelativePath":
              return [3 /*break*/, 44];
            case "InvalidRequiredProtocol":
              return [3 /*break*/, 46];
            case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
              return [3 /*break*/, 46];
            case "InvalidResponseCode":
              return [3 /*break*/, 48];
            case "com.amazonaws.cloudfront#InvalidResponseCode":
              return [3 /*break*/, 48];
            case "InvalidTagging":
              return [3 /*break*/, 50];
            case "com.amazonaws.cloudfront#InvalidTagging":
              return [3 /*break*/, 50];
            case "InvalidTTLOrder":
              return [3 /*break*/, 52];
            case "com.amazonaws.cloudfront#InvalidTTLOrder":
              return [3 /*break*/, 52];
            case "InvalidViewerCertificate":
              return [3 /*break*/, 54];
            case "com.amazonaws.cloudfront#InvalidViewerCertificate":
              return [3 /*break*/, 54];
            case "InvalidWebACLId":
              return [3 /*break*/, 56];
            case "com.amazonaws.cloudfront#InvalidWebACLId":
              return [3 /*break*/, 56];
            case "MissingBody":
              return [3 /*break*/, 58];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 58];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 60];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 60];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 62];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 62];
            case "NoSuchOrigin":
              return [3 /*break*/, 64];
            case "com.amazonaws.cloudfront#NoSuchOrigin":
              return [3 /*break*/, 64];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 66];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 66];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 68];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 68];
            case "RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 70];
            case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 70];
            case "TooManyCacheBehaviors":
              return [3 /*break*/, 72];
            case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
              return [3 /*break*/, 72];
            case "TooManyCertificates":
              return [3 /*break*/, 74];
            case "com.amazonaws.cloudfront#TooManyCertificates":
              return [3 /*break*/, 74];
            case "TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 76];
            case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 76];
            case "TooManyDistributionCNAMEs":
              return [3 /*break*/, 78];
            case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
              return [3 /*break*/, 78];
            case "TooManyDistributions":
              return [3 /*break*/, 80];
            case "com.amazonaws.cloudfront#TooManyDistributions":
              return [3 /*break*/, 80];
            case "TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 82];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 82];
            case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 84];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 84];
            case "TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 86];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 86];
            case "TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 88];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 88];
            case "TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 90];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 90];
            case "TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 92];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 92];
            case "TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 94];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 94];
            case "TooManyFunctionAssociations":
              return [3 /*break*/, 96];
            case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
              return [3 /*break*/, 96];
            case "TooManyHeadersInForwardedValues":
              return [3 /*break*/, 98];
            case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
              return [3 /*break*/, 98];
            case "TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 100];
            case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 100];
            case "TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 102];
            case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 102];
            case "TooManyOriginCustomHeaders":
              return [3 /*break*/, 104];
            case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
              return [3 /*break*/, 104];
            case "TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 106];
            case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 106];
            case "TooManyOrigins":
              return [3 /*break*/, 108];
            case "com.amazonaws.cloudfront#TooManyOrigins":
              return [3 /*break*/, 108];
            case "TooManyQueryStringParameters":
              return [3 /*break*/, 110];
            case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
              return [3 /*break*/, 110];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 112];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 112];
            case "TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 114];
            case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 114];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 116];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 116];
          }
          return [3 /*break*/, 118];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
              parsedOutput,
              context
            ),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 26:
          _q = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)];
        case 27:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _q.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 28:
          _r = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)];
        case 29:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _r.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 30:
          _s = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)];
        case 31:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _s.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 32:
          _t = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)];
        case 33:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _t.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 34:
          _u = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 35:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _u.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 36:
          _v = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)];
        case 37:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _v.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 38:
          _w = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)];
        case 39:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _w.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 40:
          _x = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context)];
        case 41:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _x.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 42:
          _y = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)];
        case 43:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _y.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 44:
          _z = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)];
        case 45:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _z.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 46:
          _0 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)];
        case 47:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _0.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 48:
          _1 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)];
        case 49:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _1.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 50:
          _2 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)];
        case 51:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _2.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 52:
          _3 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)];
        case 53:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _3.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 54:
          _4 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)];
        case 55:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _4.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 56:
          _5 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)];
        case 57:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _5.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 58:
          _6 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 59:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _6.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 60:
          _7 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 61:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _7.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 62:
          _8 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 63:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _8.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 64:
          _9 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)];
        case 65:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _9.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 66:
          _10 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 67:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _10.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 68:
          _11 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 69:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _11.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 70:
          _12 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)];
        case 71:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _12.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 72:
          _13 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)];
        case 73:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _13.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 74:
          _14 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)];
        case 75:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _14.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 76:
          _15 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)];
        case 77:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _15.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 78:
          _16 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)];
        case 79:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _16.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 80:
          _17 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context)];
        case 81:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _17.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 82:
          _18 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context),
          ];
        case 83:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _18.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 84:
          _19 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
              parsedOutput,
              context
            ),
          ];
        case 85:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _19.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 86:
          _20 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context),
          ];
        case 87:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _20.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 88:
          _21 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 89:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _21.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 90:
          _22 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context),
          ];
        case 91:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _22.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 92:
          _23 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context),
          ];
        case 93:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _23.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 94:
          _24 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context),
          ];
        case 95:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _24.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 96:
          _25 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)];
        case 97:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _25.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 98:
          _26 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)];
        case 99:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _26.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 100:
          _27 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context),
          ];
        case 101:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _27.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 102:
          _28 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)];
        case 103:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _28.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 104:
          _29 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)];
        case 105:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _29.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 106:
          _30 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)];
        case 107:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _30.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 108:
          _31 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)];
        case 109:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _31.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 110:
          _32 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)];
        case 111:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _32.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 112:
          _33 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 113:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _33.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 114:
          _34 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)];
        case 115:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _34.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 116:
          _35 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 117:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _35.concat([_37.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 119];
        case 118:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _37.label = 119;
        case 119:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryption: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "FieldLevelEncryptionConfigAlreadyExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
              return [3 /*break*/, 2];
            case "InconsistentQuantities":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 4];
            case "InvalidArgument":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 6];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 8];
            case "QueryArgProfileEmpty":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
              return [3 /*break*/, 10];
            case "TooManyFieldLevelEncryptionConfigs":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionConfigs":
              return [3 /*break*/, 12];
            case "TooManyFieldLevelEncryptionContentTypeProfiles":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
              return [3 /*break*/, 14];
            case "TooManyFieldLevelEncryptionQueryArgProfiles":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context),
          ];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context),
          ];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryptionProfile: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "FieldLevelEncryptionProfileAlreadyExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
              return [3 /*break*/, 2];
            case "FieldLevelEncryptionProfileSizeExceeded":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "NoSuchPublicKey":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 10];
            case "TooManyFieldLevelEncryptionEncryptionEntities":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
              return [3 /*break*/, 12];
            case "TooManyFieldLevelEncryptionFieldPatterns":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
              return [3 /*break*/, 14];
            case "TooManyFieldLevelEncryptionProfiles":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionProfiles":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context),
          ];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context),
          ];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context),
          ];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse(parsedOutput, context),
          ];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FunctionSummary: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateFunctionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "FunctionAlreadyExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#FunctionAlreadyExists":
              return [3 /*break*/, 2];
            case "FunctionSizeLimitExceeded":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
              return [3 /*break*/, 4];
            case "InvalidArgument":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 6];
            case "TooManyFunctions":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#TooManyFunctions":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFunctionAlreadyExistsResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyFunctionsResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateInvalidationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateInvalidationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Invalidation: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateInvalidationCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "BatchTooLarge":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#BatchTooLarge":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "MissingBody":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 10];
            case "NoSuchDistribution":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 12];
            case "TooManyInvalidationsInProgress":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlBatchTooLargeResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyInvalidationsInProgressResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateKeyGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateKeyGroupCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            KeyGroup: undefined,
            Location: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateKeyGroupCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "KeyGroupAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
              return [3 /*break*/, 4];
            case "TooManyKeyGroups":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#TooManyKeyGroups":
              return [3 /*break*/, 6];
            case "TooManyPublicKeysInKeyGroup":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyKeyGroupsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateMonitoringSubscriptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateMonitoringSubscriptionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            MonitoringSubscription: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateMonitoringSubscriptionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
            case "UnsupportedOperation":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#UnsupportedOperation":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateOriginRequestPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateOriginRequestPolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            Location: undefined,
            OriginRequestPolicy: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateOriginRequestPolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InconsistentQuantities":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 4];
            case "InvalidArgument":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 6];
            case "OriginRequestPolicyAlreadyExists":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
              return [3 /*break*/, 8];
            case "TooManyCookiesInOriginRequestPolicy":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
              return [3 /*break*/, 10];
            case "TooManyHeadersInOriginRequestPolicy":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
              return [3 /*break*/, 12];
            case "TooManyOriginRequestPolicies":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#TooManyOriginRequestPolicies":
              return [3 /*break*/, 14];
            case "TooManyQueryStringsInOriginRequestPolicy":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginRequestPoliciesResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreatePublicKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreatePublicKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            Location: undefined,
            PublicKey: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreatePublicKeyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "PublicKeyAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
              return [3 /*break*/, 4];
            case "TooManyPublicKeys":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#TooManyPublicKeys":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPublicKeyAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyPublicKeysResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateRealtimeLogConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateRealtimeLogConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RealtimeLogConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["RealtimeLogConfig"] !== undefined) {
            contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateRealtimeLogConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "RealtimeLogConfigAlreadyExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
              return [3 /*break*/, 6];
            case "TooManyRealtimeLogConfigs":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyRealtimeLogConfigsResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateStreamingDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlCreateStreamingDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            Location: undefined,
            StreamingDistribution: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateStreamingDistributionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidOrigin":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidOrigin":
              return [3 /*break*/, 10];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 12];
            case "MissingBody":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 14];
            case "StreamingDistributionAlreadyExists":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
              return [3 /*break*/, 16];
            case "TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 18];
            case "TooManyStreamingDistributions":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
              return [3 /*break*/, 20];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 22];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 24];
          }
          return [3 /*break*/, 26];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 26:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 201 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            Location: undefined,
            StreamingDistribution: undefined,
          };
          if (output.headers["location"] !== undefined) {
            contents.Location = output.headers["location"];
          }
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput,
      _a,
      response,
      errorCode,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      parsedBody,
      message;
    var _r;
    return __generator(this, function (_s) {
      switch (_s.label) {
        case 0:
          _a = [__assign({}, output)];
          _r = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_r.body = _s.sent()), _r)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidOrigin":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidOrigin":
              return [3 /*break*/, 10];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 12];
            case "InvalidTagging":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidTagging":
              return [3 /*break*/, 14];
            case "MissingBody":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 16];
            case "StreamingDistributionAlreadyExists":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
              return [3 /*break*/, 18];
            case "TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 20];
            case "TooManyStreamingDistributions":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
              return [3 /*break*/, 22];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 24];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 26];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 26];
          }
          return [3 /*break*/, 28];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 26:
          _q = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 27:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _q.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 28:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _s.label = 29;
        case 29:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlDeleteCachePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteCachePolicyCommandError(output, context)];
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
var deserializeAws_restXmlDeleteCachePolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CachePolicyInUse":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CachePolicyInUse":
              return [3 /*break*/, 4];
            case "IllegalDelete":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#IllegalDelete":
              return [3 /*break*/, 6];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 8];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 10];
            case "PreconditionFailed":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCachePolicyInUseResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError(output, context),
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
var deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CloudFrontOriginAccessIdentityInUse":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context),
          ];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteDistributionCommandError(output, context)];
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
var deserializeAws_restXmlDeleteDistributionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "DistributionNotDisabled":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#DistributionNotDisabled":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchDistribution":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlDistributionNotDisabledResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError(output, context)];
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
var deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "FieldLevelEncryptionConfigInUse":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError(output, context)];
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
var deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "FieldLevelEncryptionProfileInUse":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteFunctionCommandError(output, context)];
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
var deserializeAws_restXmlDeleteFunctionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "FunctionInUse":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#FunctionInUse":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "PreconditionFailed":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFunctionInUseResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteKeyGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteKeyGroupCommandError(output, context)];
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
var deserializeAws_restXmlDeleteKeyGroupCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 2];
            case "NoSuchResource":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 4];
            case "PreconditionFailed":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 6];
            case "ResourceInUse":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#ResourceInUse":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlResourceInUseResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteMonitoringSubscriptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError(output, context)];
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
var deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
            case "UnsupportedOperation":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#UnsupportedOperation":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteOriginRequestPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteOriginRequestPolicyCommandError(output, context)];
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
var deserializeAws_restXmlDeleteOriginRequestPolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "IllegalDelete":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#IllegalDelete":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 8];
            case "OriginRequestPolicyInUse":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
              return [3 /*break*/, 10];
            case "PreconditionFailed":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlOriginRequestPolicyInUseResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeletePublicKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeletePublicKeyCommandError(output, context)];
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
var deserializeAws_restXmlDeletePublicKeyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "NoSuchPublicKey":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 6];
            case "PreconditionFailed":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 8];
            case "PublicKeyInUse":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PublicKeyInUse":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPublicKeyInUseResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteRealtimeLogConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteRealtimeLogConfigCommandError(output, context)];
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
var deserializeAws_restXmlDeleteRealtimeLogConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
            case "RealtimeLogConfigInUse":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlRealtimeLogConfigInUseResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDeleteStreamingDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDeleteStreamingDistributionCommandError(output, context)];
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
var deserializeAws_restXmlDeleteStreamingDistributionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "NoSuchStreamingDistribution":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
              return [3 /*break*/, 6];
            case "PreconditionFailed":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 8];
            case "StreamingDistributionNotDisabled":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlStreamingDistributionNotDisabledResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlDescribeFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlDescribeFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FunctionSummary: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlDescribeFunctionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchFunctionExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlGetCachePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetCachePolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CachePolicy: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetCachePolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetCachePolicyConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetCachePolicyConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CachePolicyConfig: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CachePolicyConfig = deserializeAws_restXmlCachePolicyConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetCachePolicyConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CloudFrontOriginAccessIdentity: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CloudFrontOriginAccessIdentityConfig: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
            data,
            context
          );
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Distribution: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Distribution = deserializeAws_restXmlDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetDistributionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetDistributionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetDistributionConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionConfig: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetDistributionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetFieldLevelEncryptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetFieldLevelEncryptionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryption: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetFieldLevelEncryptionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryptionConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryptionProfile: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryptionProfileConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(
            data,
            context
          );
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ContentType: undefined,
            ETag: undefined,
            FunctionCode: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionCode = data;
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetFunctionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchFunctionExists":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlGetInvalidationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetInvalidationCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Invalidation: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetInvalidationCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
            case "NoSuchInvalidation":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchInvalidation":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchInvalidationResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetKeyGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetKeyGroupCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            KeyGroup: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetKeyGroupCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchResource":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlGetKeyGroupConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetKeyGroupConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            KeyGroupConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.KeyGroupConfig = deserializeAws_restXmlKeyGroupConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetKeyGroupConfigCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "NoSuchResource":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlGetMonitoringSubscriptionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetMonitoringSubscriptionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            MonitoringSubscription: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetMonitoringSubscriptionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 4];
            case "UnsupportedOperation":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#UnsupportedOperation":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetOriginRequestPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetOriginRequestPolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            OriginRequestPolicy: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetOriginRequestPolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetOriginRequestPolicyConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            OriginRequestPolicyConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.OriginRequestPolicyConfig = deserializeAws_restXmlOriginRequestPolicyConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetPublicKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetPublicKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            PublicKey: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetPublicKeyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchPublicKey":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetPublicKeyConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetPublicKeyConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            PublicKeyConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetPublicKeyConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchPublicKey":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetRealtimeLogConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetRealtimeLogConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RealtimeLogConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["RealtimeLogConfig"] !== undefined) {
            contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetRealtimeLogConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetStreamingDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetStreamingDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            StreamingDistribution: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetStreamingDistributionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchStreamingDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlGetStreamingDistributionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlGetStreamingDistributionConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            StreamingDistributionConfig: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlGetStreamingDistributionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "NoSuchStreamingDistribution":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListCachePoliciesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListCachePoliciesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CachePolicyList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CachePolicyList = deserializeAws_restXmlCachePolicyList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListCachePoliciesCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CloudFrontOriginAccessIdentityList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CloudFrontOriginAccessIdentityList = deserializeAws_restXmlCloudFrontOriginAccessIdentityList(
            data,
            context
          );
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListDistributionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListDistributionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListDistributionsByCachePolicyIdCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionIdList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListDistributionsByKeyGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListDistributionsByKeyGroupCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionIdList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsByKeyGroupCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "NoSuchResource":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionIdList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListDistributionsByWebACLIdCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListDistributionsByWebACLIdCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            DistributionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListDistributionsByWebACLIdCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "InvalidWebACLId":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidWebACLId":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FieldLevelEncryptionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionList = deserializeAws_restXmlFieldLevelEncryptionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FieldLevelEncryptionProfileList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionProfileList = deserializeAws_restXmlFieldLevelEncryptionProfileList(
            data,
            context
          );
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListFunctionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListFunctionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FunctionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionList = deserializeAws_restXmlFunctionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListFunctionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListInvalidationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListInvalidationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            InvalidationList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.InvalidationList = deserializeAws_restXmlInvalidationList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListInvalidationsCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchDistribution":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListKeyGroupsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListKeyGroupsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            KeyGroupList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.KeyGroupList = deserializeAws_restXmlKeyGroupList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListKeyGroupsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListOriginRequestPoliciesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListOriginRequestPoliciesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            OriginRequestPolicyList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.OriginRequestPolicyList = deserializeAws_restXmlOriginRequestPolicyList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListOriginRequestPoliciesCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListPublicKeysCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListPublicKeysCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            PublicKeyList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.PublicKeyList = deserializeAws_restXmlPublicKeyList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListPublicKeysCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListRealtimeLogConfigsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListRealtimeLogConfigsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RealtimeLogConfigs: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.RealtimeLogConfigs = deserializeAws_restXmlRealtimeLogConfigs(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListRealtimeLogConfigsCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlListStreamingDistributionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListStreamingDistributionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            StreamingDistributionList: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistributionList = deserializeAws_restXmlStreamingDistributionList(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListStreamingDistributionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlListTagsForResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Tags = deserializeAws_restXmlTags(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlListTagsForResourceCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "InvalidTagging":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidTagging":
              return [3 /*break*/, 6];
            case "NoSuchResource":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlPublishFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlPublishFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            FunctionSummary: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlPublishFunctionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "PreconditionFailed":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlTagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlTagResourceCommandError(output, context)];
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
var deserializeAws_restXmlTagResourceCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "InvalidTagging":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidTagging":
              return [3 /*break*/, 6];
            case "NoSuchResource":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlTestFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlTestFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            TestResult: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.TestResult = deserializeAws_restXmlTestResult(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlTestFunctionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 6];
            case "TestFunctionFailed":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#TestFunctionFailed":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTestFunctionFailedResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 204 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUntagResourceCommandError(output, context)];
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
var deserializeAws_restXmlUntagResourceCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "InvalidTagging":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidTagging":
              return [3 /*break*/, 6];
            case "NoSuchResource":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateCachePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateCachePolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CachePolicy: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateCachePolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CachePolicyAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
              return [3 /*break*/, 4];
            case "IllegalUpdate":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 6];
            case "InconsistentQuantities":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 8];
            case "InvalidArgument":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 10];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 12];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 14];
            case "PreconditionFailed":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 16];
            case "TooManyCookiesInCachePolicy":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
              return [3 /*break*/, 18];
            case "TooManyHeadersInCachePolicy":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
              return [3 /*break*/, 20];
            case "TooManyQueryStringsInCachePolicy":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CloudFrontOriginAccessIdentity: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "IllegalUpdate":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "MissingBody":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 12];
            case "NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
              return [3 /*break*/, 14];
            case "PreconditionFailed":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context),
          ];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            Distribution: undefined,
            ETag: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.Distribution = deserializeAws_restXmlDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateDistributionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput,
      _a,
      response,
      errorCode,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      _r,
      _s,
      _t,
      _u,
      _v,
      _w,
      _x,
      _y,
      _z,
      _0,
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
      _10,
      _11,
      _12,
      _13,
      _14,
      _15,
      _16,
      _17,
      _18,
      _19,
      _20,
      _21,
      _22,
      _23,
      _24,
      _25,
      _26,
      _27,
      _28,
      _29,
      _30,
      _31,
      _32,
      _33,
      _34,
      parsedBody,
      message;
    var _35;
    return __generator(this, function (_36) {
      switch (_36.label) {
        case 0:
          _a = [__assign({}, output)];
          _35 = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_35.body = _36.sent()), _35)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
              return [3 /*break*/, 6];
            case "IllegalUpdate":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 8];
            case "InconsistentQuantities":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 10];
            case "InvalidArgument":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 12];
            case "InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
              return [3 /*break*/, 14];
            case "InvalidErrorCode":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#InvalidErrorCode":
              return [3 /*break*/, 16];
            case "InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#InvalidForwardCookies":
              return [3 /*break*/, 18];
            case "InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
              return [3 /*break*/, 20];
            case "InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
              return [3 /*break*/, 22];
            case "InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
              return [3 /*break*/, 24];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 26];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 26];
            case "InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 28];
            case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
              return [3 /*break*/, 28];
            case "InvalidLocationCode":
              return [3 /*break*/, 30];
            case "com.amazonaws.cloudfront#InvalidLocationCode":
              return [3 /*break*/, 30];
            case "InvalidMinimumProtocolVersion":
              return [3 /*break*/, 32];
            case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
              return [3 /*break*/, 32];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 34];
            case "InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
              return [3 /*break*/, 36];
            case "InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
              return [3 /*break*/, 38];
            case "InvalidQueryStringParameters":
              return [3 /*break*/, 40];
            case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
              return [3 /*break*/, 40];
            case "InvalidRelativePath":
              return [3 /*break*/, 42];
            case "com.amazonaws.cloudfront#InvalidRelativePath":
              return [3 /*break*/, 42];
            case "InvalidRequiredProtocol":
              return [3 /*break*/, 44];
            case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
              return [3 /*break*/, 44];
            case "InvalidResponseCode":
              return [3 /*break*/, 46];
            case "com.amazonaws.cloudfront#InvalidResponseCode":
              return [3 /*break*/, 46];
            case "InvalidTTLOrder":
              return [3 /*break*/, 48];
            case "com.amazonaws.cloudfront#InvalidTTLOrder":
              return [3 /*break*/, 48];
            case "InvalidViewerCertificate":
              return [3 /*break*/, 50];
            case "com.amazonaws.cloudfront#InvalidViewerCertificate":
              return [3 /*break*/, 50];
            case "InvalidWebACLId":
              return [3 /*break*/, 52];
            case "com.amazonaws.cloudfront#InvalidWebACLId":
              return [3 /*break*/, 52];
            case "MissingBody":
              return [3 /*break*/, 54];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 54];
            case "NoSuchCachePolicy":
              return [3 /*break*/, 56];
            case "com.amazonaws.cloudfront#NoSuchCachePolicy":
              return [3 /*break*/, 56];
            case "NoSuchDistribution":
              return [3 /*break*/, 58];
            case "com.amazonaws.cloudfront#NoSuchDistribution":
              return [3 /*break*/, 58];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 60];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 60];
            case "NoSuchOrigin":
              return [3 /*break*/, 62];
            case "com.amazonaws.cloudfront#NoSuchOrigin":
              return [3 /*break*/, 62];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 64];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 64];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 66];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 66];
            case "PreconditionFailed":
              return [3 /*break*/, 68];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 68];
            case "RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 70];
            case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
              return [3 /*break*/, 70];
            case "TooManyCacheBehaviors":
              return [3 /*break*/, 72];
            case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
              return [3 /*break*/, 72];
            case "TooManyCertificates":
              return [3 /*break*/, 74];
            case "com.amazonaws.cloudfront#TooManyCertificates":
              return [3 /*break*/, 74];
            case "TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 76];
            case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
              return [3 /*break*/, 76];
            case "TooManyDistributionCNAMEs":
              return [3 /*break*/, 78];
            case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
              return [3 /*break*/, 78];
            case "TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 80];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
              return [3 /*break*/, 80];
            case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 82];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
              return [3 /*break*/, 82];
            case "TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 84];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
              return [3 /*break*/, 84];
            case "TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 86];
            case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
              return [3 /*break*/, 86];
            case "TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 88];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
              return [3 /*break*/, 88];
            case "TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 90];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
              return [3 /*break*/, 90];
            case "TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 92];
            case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
              return [3 /*break*/, 92];
            case "TooManyFunctionAssociations":
              return [3 /*break*/, 94];
            case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
              return [3 /*break*/, 94];
            case "TooManyHeadersInForwardedValues":
              return [3 /*break*/, 96];
            case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
              return [3 /*break*/, 96];
            case "TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 98];
            case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
              return [3 /*break*/, 98];
            case "TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 100];
            case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
              return [3 /*break*/, 100];
            case "TooManyOriginCustomHeaders":
              return [3 /*break*/, 102];
            case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
              return [3 /*break*/, 102];
            case "TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 104];
            case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
              return [3 /*break*/, 104];
            case "TooManyOrigins":
              return [3 /*break*/, 106];
            case "com.amazonaws.cloudfront#TooManyOrigins":
              return [3 /*break*/, 106];
            case "TooManyQueryStringParameters":
              return [3 /*break*/, 108];
            case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
              return [3 /*break*/, 108];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 110];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 110];
            case "TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 112];
            case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
              return [3 /*break*/, 112];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 114];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 114];
          }
          return [3 /*break*/, 116];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 6:
          _e = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
              parsedOutput,
              context
            ),
          ];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 26:
          _q = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 27:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _q.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 28:
          _r = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)];
        case 29:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _r.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 30:
          _s = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)];
        case 31:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _s.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 32:
          _t = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)];
        case 33:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _t.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 34:
          _u = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 35:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _u.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 36:
          _v = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)];
        case 37:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _v.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 38:
          _w = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)];
        case 39:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _w.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 40:
          _x = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)];
        case 41:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _x.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 42:
          _y = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)];
        case 43:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _y.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 44:
          _z = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)];
        case 45:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _z.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 46:
          _0 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)];
        case 47:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _0.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 48:
          _1 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)];
        case 49:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _1.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 50:
          _2 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)];
        case 51:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _2.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 52:
          _3 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)];
        case 53:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _3.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 54:
          _4 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 55:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _4.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 56:
          _5 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)];
        case 57:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _5.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 58:
          _6 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)];
        case 59:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _6.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 60:
          _7 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 61:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _7.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 62:
          _8 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)];
        case 63:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _8.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 64:
          _9 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 65:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _9.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 66:
          _10 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 67:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _10.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 68:
          _11 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 69:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _11.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 70:
          _12 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)];
        case 71:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _12.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 72:
          _13 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)];
        case 73:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _13.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 74:
          _14 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)];
        case 75:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _14.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 76:
          _15 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)];
        case 77:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _15.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 78:
          _16 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)];
        case 79:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _16.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 80:
          _17 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context),
          ];
        case 81:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _17.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 82:
          _18 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
              parsedOutput,
              context
            ),
          ];
        case 83:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _18.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 84:
          _19 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context),
          ];
        case 85:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _19.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 86:
          _20 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 87:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _20.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 88:
          _21 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context),
          ];
        case 89:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _21.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 90:
          _22 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context),
          ];
        case 91:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _22.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 92:
          _23 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context),
          ];
        case 93:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _23.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 94:
          _24 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)];
        case 95:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _24.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 96:
          _25 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)];
        case 97:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _25.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 98:
          _26 = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context),
          ];
        case 99:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _26.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 100:
          _27 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)];
        case 101:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _27.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 102:
          _28 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)];
        case 103:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _28.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 104:
          _29 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)];
        case 105:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _29.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 106:
          _30 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)];
        case 107:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _30.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 108:
          _31 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)];
        case 109:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _31.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 110:
          _32 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 111:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _32.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 112:
          _33 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)];
        case 113:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _33.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 114:
          _34 = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 115:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _34.concat([_36.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 117];
        case 116:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _36.label = 117;
        case 117:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryption: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "IllegalUpdate":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
              return [3 /*break*/, 12];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 14];
            case "PreconditionFailed":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 16];
            case "QueryArgProfileEmpty":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
              return [3 /*break*/, 18];
            case "TooManyFieldLevelEncryptionContentTypeProfiles":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
              return [3 /*break*/, 20];
            case "TooManyFieldLevelEncryptionQueryArgProfiles":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context),
          ];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context),
          ];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FieldLevelEncryptionProfile: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "FieldLevelEncryptionProfileAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
              return [3 /*break*/, 4];
            case "FieldLevelEncryptionProfileSizeExceeded":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
              return [3 /*break*/, 6];
            case "IllegalUpdate":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 8];
            case "InconsistentQuantities":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 10];
            case "InvalidArgument":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 12];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 14];
            case "NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
              return [3 /*break*/, 16];
            case "NoSuchPublicKey":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 18];
            case "PreconditionFailed":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 20];
            case "TooManyFieldLevelEncryptionEncryptionEntities":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
              return [3 /*break*/, 22];
            case "TooManyFieldLevelEncryptionFieldPatterns":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
              return [3 /*break*/, 24];
          }
          return [3 /*break*/, 26];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 6:
          _e = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context),
          ];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 22:
          _o = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context),
          ];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 24:
          _p = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context),
          ];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_r.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 27];
        case 26:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateFunctionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateFunctionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            FunctionSummary: undefined,
          };
          if (output.headers["ettag"] !== undefined) {
            contents.ETag = output.headers["ettag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateFunctionCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "FunctionSizeLimitExceeded":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 6];
            case "NoSuchFunctionExists":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchFunctionExists":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateKeyGroupCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateKeyGroupCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            KeyGroup: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateKeyGroupCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgument":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 2];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 4];
            case "KeyGroupAlreadyExists":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
              return [3 /*break*/, 6];
            case "NoSuchResource":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#NoSuchResource":
              return [3 /*break*/, 8];
            case "PreconditionFailed":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 10];
            case "TooManyPublicKeysInKeyGroup":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateOriginRequestPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateOriginRequestPolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            OriginRequestPolicy: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateOriginRequestPolicyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "IllegalUpdate":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 4];
            case "InconsistentQuantities":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "NoSuchOriginRequestPolicy":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
              return [3 /*break*/, 12];
            case "OriginRequestPolicyAlreadyExists":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
              return [3 /*break*/, 14];
            case "PreconditionFailed":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 16];
            case "TooManyCookiesInOriginRequestPolicy":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
              return [3 /*break*/, 18];
            case "TooManyHeadersInOriginRequestPolicy":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
              return [3 /*break*/, 20];
            case "TooManyQueryStringsInOriginRequestPolicy":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
              return [3 /*break*/, 22];
          }
          return [3 /*break*/, 24];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 18:
          _l = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 20:
          _m = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 22:
          _o = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context),
          ];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_q.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 25];
        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdatePublicKeyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdatePublicKeyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            PublicKey: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdatePublicKeyCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CannotChangeImmutablePublicKeyFields":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
              return [3 /*break*/, 4];
            case "IllegalUpdate":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 6];
            case "InvalidArgument":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 8];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 10];
            case "NoSuchPublicKey":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#NoSuchPublicKey":
              return [3 /*break*/, 12];
            case "PreconditionFailed":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateRealtimeLogConfigCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateRealtimeLogConfigCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RealtimeLogConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data["RealtimeLogConfig"] !== undefined) {
            contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateRealtimeLogConfigCommandError = function (output, context) {
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
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "InvalidArgument":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 4];
            case "NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
export var deserializeAws_restXmlUpdateStreamingDistributionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restXmlUpdateStreamingDistributionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ETag: undefined,
            StreamingDistribution: undefined,
          };
          if (output.headers["etag"] !== undefined) {
            contents.ETag = output.headers["etag"];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restXmlUpdateStreamingDistributionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput,
      _a,
      response,
      errorCode,
      _b,
      _c,
      _d,
      _e,
      _f,
      _g,
      _h,
      _j,
      _k,
      _l,
      _m,
      _o,
      _p,
      _q,
      parsedBody,
      message;
    var _r;
    return __generator(this, function (_s) {
      switch (_s.label) {
        case 0:
          _a = [__assign({}, output)];
          _r = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_r.body = _s.sent()), _r)]));
          errorCode = "UnknownError";
          errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDenied":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloudfront#AccessDenied":
              return [3 /*break*/, 2];
            case "CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
              return [3 /*break*/, 4];
            case "IllegalUpdate":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloudfront#IllegalUpdate":
              return [3 /*break*/, 6];
            case "InconsistentQuantities":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloudfront#InconsistentQuantities":
              return [3 /*break*/, 8];
            case "InvalidArgument":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloudfront#InvalidArgument":
              return [3 /*break*/, 10];
            case "InvalidIfMatchVersion":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
              return [3 /*break*/, 12];
            case "InvalidOriginAccessIdentity":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
              return [3 /*break*/, 14];
            case "MissingBody":
              return [3 /*break*/, 16];
            case "com.amazonaws.cloudfront#MissingBody":
              return [3 /*break*/, 16];
            case "NoSuchStreamingDistribution":
              return [3 /*break*/, 18];
            case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
              return [3 /*break*/, 18];
            case "PreconditionFailed":
              return [3 /*break*/, 20];
            case "com.amazonaws.cloudfront#PreconditionFailed":
              return [3 /*break*/, 20];
            case "TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 22];
            case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
              return [3 /*break*/, 22];
            case "TooManyTrustedSigners":
              return [3 /*break*/, 24];
            case "com.amazonaws.cloudfront#TooManyTrustedSigners":
              return [3 /*break*/, 24];
            case "TrustedSignerDoesNotExist":
              return [3 /*break*/, 26];
            case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
              return [3 /*break*/, 26];
          }
          return [3 /*break*/, 28];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 20:
          _m = [{}];
          return [4 /*yield*/, deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)];
        case 21:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _m.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 22:
          _o = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)];
        case 23:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _o.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 24:
          _p = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)];
        case 25:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _p.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 26:
          _q = [{}];
          return [4 /*yield*/, deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)];
        case 27:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _q.concat([_s.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 29];
        case 28:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
          response = __assign(__assign({}, parsedBody.Error), {
            name: "" + errorCode,
            message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _s.label = 29;
        case 29:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restXmlAccessDeniedResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "AccessDenied",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlBatchTooLargeResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "BatchTooLarge",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCachePolicyAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CachePolicyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCachePolicyInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CachePolicyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CannotChangeImmutablePublicKeyFields",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CloudFrontOriginAccessIdentityAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CloudFrontOriginAccessIdentityInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlCNAMEAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "CNAMEAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlDistributionAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DistributionAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlDistributionNotDisabledResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DistributionNotDisabled",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FieldLevelEncryptionConfigAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FieldLevelEncryptionConfigInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FieldLevelEncryptionProfileAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FieldLevelEncryptionProfileInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FieldLevelEncryptionProfileSizeExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFunctionAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FunctionAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFunctionInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FunctionInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlFunctionSizeLimitExceededResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "FunctionSizeLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlIllegalDeleteResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "IllegalDelete",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse = function (
  parsedOutput,
  context
) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlIllegalUpdateResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "IllegalUpdate",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInconsistentQuantitiesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InconsistentQuantities",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidArgumentResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidArgument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidDefaultRootObjectResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidDefaultRootObject",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidErrorCodeResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidErrorCode",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidForwardCookiesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidForwardCookies",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidFunctionAssociationResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidFunctionAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidGeoRestrictionParameterResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidGeoRestrictionParameter",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidHeadersForS3OriginResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidHeadersForS3Origin",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidIfMatchVersionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidIfMatchVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidLambdaFunctionAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidLocationCodeResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidLocationCode",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidMinimumProtocolVersionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidMinimumProtocolVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidOriginResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidOrigin",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidOriginAccessIdentityResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidOriginAccessIdentity",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidOriginKeepaliveTimeout",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidOriginReadTimeoutResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidOriginReadTimeout",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidProtocolSettingsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidProtocolSettings",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidQueryStringParametersResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidQueryStringParameters",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidRelativePathResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidRelativePath",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidRequiredProtocolResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidRequiredProtocol",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidResponseCodeResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidResponseCode",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidTaggingResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidTagging",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidTTLOrderResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidTTLOrder",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidViewerCertificateResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidViewerCertificate",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlInvalidWebACLIdResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidWebACLId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlKeyGroupAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "KeyGroupAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlMissingBodyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "MissingBody",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchCachePolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchCachePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchCloudFrontOriginAccessIdentity",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchDistributionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchDistribution",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchFieldLevelEncryptionConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchFieldLevelEncryptionProfile",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchFunctionExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchFunctionExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchInvalidationResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchInvalidation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchOriginResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchOrigin",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchOriginRequestPolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchOriginRequestPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchPublicKeyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchPublicKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchRealtimeLogConfigResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchRealtimeLogConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchResourceResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchResource",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlNoSuchStreamingDistributionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "NoSuchStreamingDistribution",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "OriginRequestPolicyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlOriginRequestPolicyInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "OriginRequestPolicyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlPreconditionFailedResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "PreconditionFailed",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlPublicKeyAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "PublicKeyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlPublicKeyInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "PublicKeyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlQueryArgProfileEmptyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "QueryArgProfileEmpty",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "RealtimeLogConfigAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlRealtimeLogConfigInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "RealtimeLogConfigInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "RealtimeLogConfigOwnerMismatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlResourceInUseResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "StreamingDistributionAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlStreamingDistributionNotDisabledResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "StreamingDistributionNotDisabled",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTestFunctionFailedResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TestFunctionFailed",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCacheBehaviorsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCacheBehaviors",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCachePoliciesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCachePolicies",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCertificatesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCertificates",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCloudFrontOriginAccessIdentities",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCookieNamesInWhiteList",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCookiesInCachePolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCookiesInCachePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyCookiesInOriginRequestPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionCNAMEsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionCNAMEs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributions",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsAssociatedToCachePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse = function (
  parsedOutput,
  context
) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsAssociatedToKeyGroup",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse = function (
  parsedOutput,
  context
) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsAssociatedToOriginRequestPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsWithFunctionAssociations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsWithLambdaAssociations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyDistributionsWithSingleFunctionARN",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionConfigs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionContentTypeProfiles",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionEncryptionEntities",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionFieldPatterns",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionProfiles",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFieldLevelEncryptionQueryArgProfiles",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFunctionAssociationsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFunctionAssociations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyFunctionsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyFunctions",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyHeadersInCachePolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyHeadersInCachePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyHeadersInForwardedValues",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyHeadersInOriginRequestPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyInvalidationsInProgressResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyInvalidationsInProgress",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyKeyGroupsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyKeyGroups",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyKeyGroupsAssociatedToDistribution",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyLambdaFunctionAssociations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyOriginCustomHeadersResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyOriginCustomHeaders",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyOriginGroupsPerDistribution",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyOriginRequestPoliciesResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyOriginRequestPolicies",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyOriginsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyOrigins",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyPublicKeysResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyPublicKeys",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyPublicKeysInKeyGroup",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyQueryStringParametersResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyQueryStringParameters",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyQueryStringsInCachePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyQueryStringsInOriginRequestPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyRealtimeLogConfigsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyRealtimeLogConfigs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyStreamingDistributionCNAMEs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyStreamingDistributionsResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyStreamingDistributions",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTooManyTrustedSignersResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TooManyTrustedSigners",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TrustedKeyGroupDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlTrustedSignerDoesNotExistResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "TrustedSignerDoesNotExist",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restXmlUnsupportedOperationResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "UnsupportedOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
      };
      data = parsedOutput.body.Error;
      if (data["Message"] !== undefined) {
        contents.Message = data["Message"];
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restXmlAliases = function (input, context) {
  var bodyNode = new __XmlNode("Aliases");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlAliasList(input.Items, context);
    var containerNode_5 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_5.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_5);
  }
  return bodyNode;
};
var serializeAws_restXmlAliasList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("CNAME");
    });
};
var serializeAws_restXmlAllowedMethods = function (input, context) {
  var bodyNode = new __XmlNode("AllowedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlMethodsList(input.Items, context);
    var containerNode_6 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_6.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_6);
  }
  if (input.CachedMethods !== undefined && input.CachedMethods !== null) {
    var node = serializeAws_restXmlCachedMethods(input.CachedMethods, context).withName("CachedMethods");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlAwsAccountNumberList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("AwsAccountNumber");
    });
};
var serializeAws_restXmlCacheBehavior = function (input, context) {
  var bodyNode = new __XmlNode("CacheBehavior");
  if (input.PathPattern !== undefined && input.PathPattern !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.PathPattern)).withName("PathPattern");
    bodyNode.addChildNode(node);
  }
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.TargetOriginId)).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    var node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    var node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    var node = new __XmlNode("ViewerProtocolPolicy")
      .addChildNode(new __XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    var node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Compress))).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    var node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    var node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CachePolicyId)).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    var node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCacheBehaviorList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlCacheBehavior(entry, context);
      return node.withName("CacheBehavior");
    });
};
var serializeAws_restXmlCacheBehaviors = function (input, context) {
  var bodyNode = new __XmlNode("CacheBehaviors");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlCacheBehaviorList(input.Items, context);
    var containerNode_7 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_7.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_7);
  }
  return bodyNode;
};
var serializeAws_restXmlCachedMethods = function (input, context) {
  var bodyNode = new __XmlNode("CachedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlMethodsList(input.Items, context);
    var containerNode_8 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_8.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_8);
  }
  return bodyNode;
};
var serializeAws_restXmlCachePolicyConfig = function (input, context) {
  var bodyNode = new __XmlNode("CachePolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (
    input.ParametersInCacheKeyAndForwardedToOrigin !== undefined &&
    input.ParametersInCacheKeyAndForwardedToOrigin !== null
  ) {
    var node = serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin(
      input.ParametersInCacheKeyAndForwardedToOrigin,
      context
    ).withName("ParametersInCacheKeyAndForwardedToOrigin");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCachePolicyCookiesConfig = function (input, context) {
  var bodyNode = new __XmlNode("CachePolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    var node = new __XmlNode("CachePolicyCookieBehavior")
      .addChildNode(new __XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    var node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCachePolicyHeadersConfig = function (input, context) {
  var bodyNode = new __XmlNode("CachePolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    var node = new __XmlNode("CachePolicyHeaderBehavior")
      .addChildNode(new __XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    var node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCachePolicyQueryStringsConfig = function (input, context) {
  var bodyNode = new __XmlNode("CachePolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    var node = new __XmlNode("CachePolicyQueryStringBehavior")
      .addChildNode(new __XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    var node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCloudFrontOriginAccessIdentityConfig = function (input, context) {
  var bodyNode = new __XmlNode("CloudFrontOriginAccessIdentityConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlContentTypeProfile = function (input, context) {
  var bodyNode = new __XmlNode("ContentTypeProfile");
  if (input.Format !== undefined && input.Format !== null) {
    var node = new __XmlNode("Format").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ProfileId)).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined && input.ContentType !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ContentType)).withName("ContentType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlContentTypeProfileConfig = function (input, context) {
  var bodyNode = new __XmlNode("ContentTypeProfileConfig");
  if (input.ForwardWhenContentTypeIsUnknown !== undefined && input.ForwardWhenContentTypeIsUnknown !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.ForwardWhenContentTypeIsUnknown)))
      .withName("ForwardWhenContentTypeIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfiles !== undefined && input.ContentTypeProfiles !== null) {
    var node = serializeAws_restXmlContentTypeProfiles(input.ContentTypeProfiles, context).withName(
      "ContentTypeProfiles"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlContentTypeProfileList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlContentTypeProfile(entry, context);
      return node.withName("ContentTypeProfile");
    });
};
var serializeAws_restXmlContentTypeProfiles = function (input, context) {
  var bodyNode = new __XmlNode("ContentTypeProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlContentTypeProfileList(input.Items, context);
    var containerNode_9 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_9.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_9);
  }
  return bodyNode;
};
var serializeAws_restXmlCookieNameList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};
var serializeAws_restXmlCookieNames = function (input, context) {
  var bodyNode = new __XmlNode("CookieNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlCookieNameList(input.Items, context);
    var containerNode_10 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_10.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_10);
  }
  return bodyNode;
};
var serializeAws_restXmlCookiePreference = function (input, context) {
  var bodyNode = new __XmlNode("CookiePreference");
  if (input.Forward !== undefined && input.Forward !== null) {
    var node = new __XmlNode("ItemSelection").addChildNode(new __XmlText(input.Forward)).withName("Forward");
    bodyNode.addChildNode(node);
  }
  if (input.WhitelistedNames !== undefined && input.WhitelistedNames !== null) {
    var node = serializeAws_restXmlCookieNames(input.WhitelistedNames, context).withName("WhitelistedNames");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCustomErrorResponse = function (input, context) {
  var bodyNode = new __XmlNode("CustomErrorResponse");
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.ErrorCode))).withName("ErrorCode");
    bodyNode.addChildNode(node);
  }
  if (input.ResponsePagePath !== undefined && input.ResponsePagePath !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ResponsePagePath)).withName("ResponsePagePath");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseCode !== undefined && input.ResponseCode !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ResponseCode)).withName("ResponseCode");
    bodyNode.addChildNode(node);
  }
  if (input.ErrorCachingMinTTL !== undefined && input.ErrorCachingMinTTL !== null) {
    var node = new __XmlNode("long")
      .addChildNode(new __XmlText(String(input.ErrorCachingMinTTL)))
      .withName("ErrorCachingMinTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlCustomErrorResponseList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlCustomErrorResponse(entry, context);
      return node.withName("CustomErrorResponse");
    });
};
var serializeAws_restXmlCustomErrorResponses = function (input, context) {
  var bodyNode = new __XmlNode("CustomErrorResponses");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlCustomErrorResponseList(input.Items, context);
    var containerNode_11 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_11.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_11);
  }
  return bodyNode;
};
var serializeAws_restXmlCustomHeaders = function (input, context) {
  var bodyNode = new __XmlNode("CustomHeaders");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlOriginCustomHeadersList(input.Items, context);
    var containerNode_12 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_12.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_12);
  }
  return bodyNode;
};
var serializeAws_restXmlCustomOriginConfig = function (input, context) {
  var bodyNode = new __XmlNode("CustomOriginConfig");
  if (input.HTTPPort !== undefined && input.HTTPPort !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.HTTPPort))).withName("HTTPPort");
    bodyNode.addChildNode(node);
  }
  if (input.HTTPSPort !== undefined && input.HTTPSPort !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.HTTPSPort))).withName("HTTPSPort");
    bodyNode.addChildNode(node);
  }
  if (input.OriginProtocolPolicy !== undefined && input.OriginProtocolPolicy !== null) {
    var node = new __XmlNode("OriginProtocolPolicy")
      .addChildNode(new __XmlText(input.OriginProtocolPolicy))
      .withName("OriginProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.OriginSslProtocols !== undefined && input.OriginSslProtocols !== null) {
    var node = serializeAws_restXmlOriginSslProtocols(input.OriginSslProtocols, context).withName("OriginSslProtocols");
    bodyNode.addChildNode(node);
  }
  if (input.OriginReadTimeout !== undefined && input.OriginReadTimeout !== null) {
    var node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.OriginReadTimeout)))
      .withName("OriginReadTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginKeepaliveTimeout !== undefined && input.OriginKeepaliveTimeout !== null) {
    var node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.OriginKeepaliveTimeout)))
      .withName("OriginKeepaliveTimeout");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlDefaultCacheBehavior = function (input, context) {
  var bodyNode = new __XmlNode("DefaultCacheBehavior");
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.TargetOriginId)).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    var node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    var node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    var node = new __XmlNode("ViewerProtocolPolicy")
      .addChildNode(new __XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    var node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Compress))).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    var node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    var node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CachePolicyId)).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    var node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    var node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlDistributionConfig = function (input, context) {
  var bodyNode = new __XmlNode("DistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    var node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultRootObject !== undefined && input.DefaultRootObject !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.DefaultRootObject))
      .withName("DefaultRootObject");
    bodyNode.addChildNode(node);
  }
  if (input.Origins !== undefined && input.Origins !== null) {
    var node = serializeAws_restXmlOrigins(input.Origins, context).withName("Origins");
    bodyNode.addChildNode(node);
  }
  if (input.OriginGroups !== undefined && input.OriginGroups !== null) {
    var node = serializeAws_restXmlOriginGroups(input.OriginGroups, context).withName("OriginGroups");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultCacheBehavior !== undefined && input.DefaultCacheBehavior !== null) {
    var node = serializeAws_restXmlDefaultCacheBehavior(input.DefaultCacheBehavior, context).withName(
      "DefaultCacheBehavior"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CacheBehaviors !== undefined && input.CacheBehaviors !== null) {
    var node = serializeAws_restXmlCacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors");
    bodyNode.addChildNode(node);
  }
  if (input.CustomErrorResponses !== undefined && input.CustomErrorResponses !== null) {
    var node = serializeAws_restXmlCustomErrorResponses(input.CustomErrorResponses, context).withName(
      "CustomErrorResponses"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("CommentType").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    var node = serializeAws_restXmlLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    var node = new __XmlNode("PriceClass").addChildNode(new __XmlText(input.PriceClass)).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerCertificate !== undefined && input.ViewerCertificate !== null) {
    var node = serializeAws_restXmlViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.Restrictions !== undefined && input.Restrictions !== null) {
    var node = serializeAws_restXmlRestrictions(input.Restrictions, context).withName("Restrictions");
    bodyNode.addChildNode(node);
  }
  if (input.WebACLId !== undefined && input.WebACLId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.WebACLId)).withName("WebACLId");
    bodyNode.addChildNode(node);
  }
  if (input.HttpVersion !== undefined && input.HttpVersion !== null) {
    var node = new __XmlNode("HttpVersion").addChildNode(new __XmlText(input.HttpVersion)).withName("HttpVersion");
    bodyNode.addChildNode(node);
  }
  if (input.IsIPV6Enabled !== undefined && input.IsIPV6Enabled !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IsIPV6Enabled)))
      .withName("IsIPV6Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlDistributionConfigWithTags = function (input, context) {
  var bodyNode = new __XmlNode("DistributionConfigWithTags");
  if (input.DistributionConfig !== undefined && input.DistributionConfig !== null) {
    var node = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context).withName("DistributionConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlEncryptionEntities = function (input, context) {
  var bodyNode = new __XmlNode("EncryptionEntities");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlEncryptionEntityList(input.Items, context);
    var containerNode_13 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_13.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_13);
  }
  return bodyNode;
};
var serializeAws_restXmlEncryptionEntity = function (input, context) {
  var bodyNode = new __XmlNode("EncryptionEntity");
  if (input.PublicKeyId !== undefined && input.PublicKeyId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.PublicKeyId)).withName("PublicKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.ProviderId !== undefined && input.ProviderId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ProviderId)).withName("ProviderId");
    bodyNode.addChildNode(node);
  }
  if (input.FieldPatterns !== undefined && input.FieldPatterns !== null) {
    var node = serializeAws_restXmlFieldPatterns(input.FieldPatterns, context).withName("FieldPatterns");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlEncryptionEntityList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlEncryptionEntity(entry, context);
      return node.withName("EncryptionEntity");
    });
};
var serializeAws_restXmlEndPoint = function (input, context) {
  var bodyNode = new __XmlNode("EndPoint");
  if (input.StreamType !== undefined && input.StreamType !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.StreamType)).withName("StreamType");
    bodyNode.addChildNode(node);
  }
  if (input.KinesisStreamConfig !== undefined && input.KinesisStreamConfig !== null) {
    var node = serializeAws_restXmlKinesisStreamConfig(input.KinesisStreamConfig, context).withName(
      "KinesisStreamConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlEndPointList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlEndPoint(entry, context);
      return node.withName("member");
    });
};
var serializeAws_restXmlFieldLevelEncryptionConfig = function (input, context) {
  var bodyNode = new __XmlNode("FieldLevelEncryptionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfileConfig !== undefined && input.QueryArgProfileConfig !== null) {
    var node = serializeAws_restXmlQueryArgProfileConfig(input.QueryArgProfileConfig, context).withName(
      "QueryArgProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfileConfig !== undefined && input.ContentTypeProfileConfig !== null) {
    var node = serializeAws_restXmlContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName(
      "ContentTypeProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlFieldLevelEncryptionProfileConfig = function (input, context) {
  var bodyNode = new __XmlNode("FieldLevelEncryptionProfileConfig");
  if (input.Name !== undefined && input.Name !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionEntities !== undefined && input.EncryptionEntities !== null) {
    var node = serializeAws_restXmlEncryptionEntities(input.EncryptionEntities, context).withName("EncryptionEntities");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlFieldList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Field");
    });
};
var serializeAws_restXmlFieldPatternList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("FieldPattern");
    });
};
var serializeAws_restXmlFieldPatterns = function (input, context) {
  var bodyNode = new __XmlNode("FieldPatterns");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlFieldPatternList(input.Items, context);
    var containerNode_14 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_14.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_14);
  }
  return bodyNode;
};
var serializeAws_restXmlForwardedValues = function (input, context) {
  var bodyNode = new __XmlNode("ForwardedValues");
  if (input.QueryString !== undefined && input.QueryString !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.QueryString))).withName("QueryString");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    var node = serializeAws_restXmlCookiePreference(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    var node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringCacheKeys !== undefined && input.QueryStringCacheKeys !== null) {
    var node = serializeAws_restXmlQueryStringCacheKeys(input.QueryStringCacheKeys, context).withName(
      "QueryStringCacheKeys"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlFunctionAssociation = function (input, context) {
  var bodyNode = new __XmlNode("FunctionAssociation");
  if (input.FunctionARN !== undefined && input.FunctionARN !== null) {
    var node = new __XmlNode("FunctionARN").addChildNode(new __XmlText(input.FunctionARN)).withName("FunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    var node = new __XmlNode("EventType").addChildNode(new __XmlText(input.EventType)).withName("EventType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlFunctionAssociationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlFunctionAssociation(entry, context);
      return node.withName("FunctionAssociation");
    });
};
var serializeAws_restXmlFunctionAssociations = function (input, context) {
  var bodyNode = new __XmlNode("FunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlFunctionAssociationList(input.Items, context);
    var containerNode_15 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_15.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_15);
  }
  return bodyNode;
};
var serializeAws_restXmlFunctionConfig = function (input, context) {
  var bodyNode = new __XmlNode("FunctionConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Runtime !== undefined && input.Runtime !== null) {
    var node = new __XmlNode("FunctionRuntime").addChildNode(new __XmlText(input.Runtime)).withName("Runtime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlGeoRestriction = function (input, context) {
  var bodyNode = new __XmlNode("GeoRestriction");
  if (input.RestrictionType !== undefined && input.RestrictionType !== null) {
    var node = new __XmlNode("GeoRestrictionType")
      .addChildNode(new __XmlText(input.RestrictionType))
      .withName("RestrictionType");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlLocationList(input.Items, context);
    var containerNode_16 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_16.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_16);
  }
  return bodyNode;
};
var serializeAws_restXmlHeaderList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};
var serializeAws_restXmlHeaders = function (input, context) {
  var bodyNode = new __XmlNode("Headers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlHeaderList(input.Items, context);
    var containerNode_17 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_17.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_17);
  }
  return bodyNode;
};
var serializeAws_restXmlInvalidationBatch = function (input, context) {
  var bodyNode = new __XmlNode("InvalidationBatch");
  if (input.Paths !== undefined && input.Paths !== null) {
    var node = serializeAws_restXmlPaths(input.Paths, context).withName("Paths");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlKeyGroupConfig = function (input, context) {
  var bodyNode = new __XmlNode("KeyGroupConfig");
  if (input.Name !== undefined && input.Name !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlPublicKeyIdList(input.Items, context);
    var containerNode_18 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_18.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_18);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlKinesisStreamConfig = function (input, context) {
  var bodyNode = new __XmlNode("KinesisStreamConfig");
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.RoleARN)).withName("RoleARN");
    bodyNode.addChildNode(node);
  }
  if (input.StreamARN !== undefined && input.StreamARN !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.StreamARN)).withName("StreamARN");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlLambdaFunctionAssociation = function (input, context) {
  var bodyNode = new __XmlNode("LambdaFunctionAssociation");
  if (input.LambdaFunctionARN !== undefined && input.LambdaFunctionARN !== null) {
    var node = new __XmlNode("LambdaFunctionARN")
      .addChildNode(new __XmlText(input.LambdaFunctionARN))
      .withName("LambdaFunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    var node = new __XmlNode("EventType").addChildNode(new __XmlText(input.EventType)).withName("EventType");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeBody !== undefined && input.IncludeBody !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.IncludeBody))).withName("IncludeBody");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlLambdaFunctionAssociationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlLambdaFunctionAssociation(entry, context);
      return node.withName("LambdaFunctionAssociation");
    });
};
var serializeAws_restXmlLambdaFunctionAssociations = function (input, context) {
  var bodyNode = new __XmlNode("LambdaFunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlLambdaFunctionAssociationList(input.Items, context);
    var containerNode_19 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_19.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_19);
  }
  return bodyNode;
};
var serializeAws_restXmlLocationList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Location");
    });
};
var serializeAws_restXmlLoggingConfig = function (input, context) {
  var bodyNode = new __XmlNode("LoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeCookies !== undefined && input.IncludeCookies !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IncludeCookies)))
      .withName("IncludeCookies");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlMethodsList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("Method").addChildNode(new __XmlText(entry));
      return node.withName("Method");
    });
};
var serializeAws_restXmlMonitoringSubscription = function (input, context) {
  var bodyNode = new __XmlNode("MonitoringSubscription");
  if (input.RealtimeMetricsSubscriptionConfig !== undefined && input.RealtimeMetricsSubscriptionConfig !== null) {
    var node = serializeAws_restXmlRealtimeMetricsSubscriptionConfig(
      input.RealtimeMetricsSubscriptionConfig,
      context
    ).withName("RealtimeMetricsSubscriptionConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOrigin = function (input, context) {
  var bodyNode = new __XmlNode("Origin");
  if (input.Id !== undefined && input.Id !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.DomainName !== undefined && input.DomainName !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.DomainName)).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginPath !== undefined && input.OriginPath !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.OriginPath)).withName("OriginPath");
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeaders !== undefined && input.CustomHeaders !== null) {
    var node = serializeAws_restXmlCustomHeaders(input.CustomHeaders, context).withName("CustomHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.S3OriginConfig !== undefined && input.S3OriginConfig !== null) {
    var node = serializeAws_restXmlS3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CustomOriginConfig !== undefined && input.CustomOriginConfig !== null) {
    var node = serializeAws_restXmlCustomOriginConfig(input.CustomOriginConfig, context).withName("CustomOriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionAttempts !== undefined && input.ConnectionAttempts !== null) {
    var node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.ConnectionAttempts)))
      .withName("ConnectionAttempts");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionTimeout !== undefined && input.ConnectionTimeout !== null) {
    var node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.ConnectionTimeout)))
      .withName("ConnectionTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShield !== undefined && input.OriginShield !== null) {
    var node = serializeAws_restXmlOriginShield(input.OriginShield, context).withName("OriginShield");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginCustomHeader = function (input, context) {
  var bodyNode = new __XmlNode("OriginCustomHeader");
  if (input.HeaderName !== undefined && input.HeaderName !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.HeaderName)).withName("HeaderName");
    bodyNode.addChildNode(node);
  }
  if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.HeaderValue)).withName("HeaderValue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginCustomHeadersList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlOriginCustomHeader(entry, context);
      return node.withName("OriginCustomHeader");
    });
};
var serializeAws_restXmlOriginGroup = function (input, context) {
  var bodyNode = new __XmlNode("OriginGroup");
  if (input.Id !== undefined && input.Id !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.FailoverCriteria !== undefined && input.FailoverCriteria !== null) {
    var node = serializeAws_restXmlOriginGroupFailoverCriteria(input.FailoverCriteria, context).withName(
      "FailoverCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Members !== undefined && input.Members !== null) {
    var node = serializeAws_restXmlOriginGroupMembers(input.Members, context).withName("Members");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginGroupFailoverCriteria = function (input, context) {
  var bodyNode = new __XmlNode("OriginGroupFailoverCriteria");
  if (input.StatusCodes !== undefined && input.StatusCodes !== null) {
    var node = serializeAws_restXmlStatusCodes(input.StatusCodes, context).withName("StatusCodes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginGroupList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlOriginGroup(entry, context);
      return node.withName("OriginGroup");
    });
};
var serializeAws_restXmlOriginGroupMember = function (input, context) {
  var bodyNode = new __XmlNode("OriginGroupMember");
  if (input.OriginId !== undefined && input.OriginId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.OriginId)).withName("OriginId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginGroupMemberList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlOriginGroupMember(entry, context);
      return node.withName("OriginGroupMember");
    });
};
var serializeAws_restXmlOriginGroupMembers = function (input, context) {
  var bodyNode = new __XmlNode("OriginGroupMembers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlOriginGroupMemberList(input.Items, context);
    var containerNode_20 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_20.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_20);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginGroups = function (input, context) {
  var bodyNode = new __XmlNode("OriginGroups");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlOriginGroupList(input.Items, context);
    var containerNode_21 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_21.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_21);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlOrigin(entry, context);
      return node.withName("Origin");
    });
};
var serializeAws_restXmlOriginRequestPolicyConfig = function (input, context) {
  var bodyNode = new __XmlNode("OriginRequestPolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    var node = serializeAws_restXmlOriginRequestPolicyHeadersConfig(input.HeadersConfig, context).withName(
      "HeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    var node = serializeAws_restXmlOriginRequestPolicyCookiesConfig(input.CookiesConfig, context).withName(
      "CookiesConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    var node = serializeAws_restXmlOriginRequestPolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginRequestPolicyCookiesConfig = function (input, context) {
  var bodyNode = new __XmlNode("OriginRequestPolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    var node = new __XmlNode("OriginRequestPolicyCookieBehavior")
      .addChildNode(new __XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    var node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginRequestPolicyHeadersConfig = function (input, context) {
  var bodyNode = new __XmlNode("OriginRequestPolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    var node = new __XmlNode("OriginRequestPolicyHeaderBehavior")
      .addChildNode(new __XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    var node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginRequestPolicyQueryStringsConfig = function (input, context) {
  var bodyNode = new __XmlNode("OriginRequestPolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    var node = new __XmlNode("OriginRequestPolicyQueryStringBehavior")
      .addChildNode(new __XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    var node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOrigins = function (input, context) {
  var bodyNode = new __XmlNode("Origins");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlOriginList(input.Items, context);
    var containerNode_22 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_22.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_22);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginShield = function (input, context) {
  var bodyNode = new __XmlNode("OriginShield");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShieldRegion !== undefined && input.OriginShieldRegion !== null) {
    var node = new __XmlNode("OriginShieldRegion")
      .addChildNode(new __XmlText(input.OriginShieldRegion))
      .withName("OriginShieldRegion");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlOriginSslProtocols = function (input, context) {
  var bodyNode = new __XmlNode("OriginSslProtocols");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlSslProtocolsList(input.Items, context);
    var containerNode_23 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_23.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_23);
  }
  return bodyNode;
};
var serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = function (input, context) {
  var bodyNode = new __XmlNode("ParametersInCacheKeyAndForwardedToOrigin");
  if (input.EnableAcceptEncodingGzip !== undefined && input.EnableAcceptEncodingGzip !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.EnableAcceptEncodingGzip)))
      .withName("EnableAcceptEncodingGzip");
    bodyNode.addChildNode(node);
  }
  if (input.EnableAcceptEncodingBrotli !== undefined && input.EnableAcceptEncodingBrotli !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.EnableAcceptEncodingBrotli)))
      .withName("EnableAcceptEncodingBrotli");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    var node = serializeAws_restXmlCachePolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    var node = serializeAws_restXmlCachePolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    var node = serializeAws_restXmlCachePolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlPathList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Path");
    });
};
var serializeAws_restXmlPaths = function (input, context) {
  var bodyNode = new __XmlNode("Paths");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlPathList(input.Items, context);
    var containerNode_24 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_24.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_24);
  }
  return bodyNode;
};
var serializeAws_restXmlPublicKeyConfig = function (input, context) {
  var bodyNode = new __XmlNode("PublicKeyConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.EncodedKey !== undefined && input.EncodedKey !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.EncodedKey)).withName("EncodedKey");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlPublicKeyIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("PublicKey");
    });
};
var serializeAws_restXmlQueryArgProfile = function (input, context) {
  var bodyNode = new __XmlNode("QueryArgProfile");
  if (input.QueryArg !== undefined && input.QueryArg !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.QueryArg)).withName("QueryArg");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.ProfileId)).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlQueryArgProfileConfig = function (input, context) {
  var bodyNode = new __XmlNode("QueryArgProfileConfig");
  if (input.ForwardWhenQueryArgProfileIsUnknown !== undefined && input.ForwardWhenQueryArgProfileIsUnknown !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.ForwardWhenQueryArgProfileIsUnknown)))
      .withName("ForwardWhenQueryArgProfileIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfiles !== undefined && input.QueryArgProfiles !== null) {
    var node = serializeAws_restXmlQueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlQueryArgProfileList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlQueryArgProfile(entry, context);
      return node.withName("QueryArgProfile");
    });
};
var serializeAws_restXmlQueryArgProfiles = function (input, context) {
  var bodyNode = new __XmlNode("QueryArgProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlQueryArgProfileList(input.Items, context);
    var containerNode_25 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_25.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_25);
  }
  return bodyNode;
};
var serializeAws_restXmlQueryStringCacheKeys = function (input, context) {
  var bodyNode = new __XmlNode("QueryStringCacheKeys");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlQueryStringCacheKeysList(input.Items, context);
    var containerNode_26 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_26.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_26);
  }
  return bodyNode;
};
var serializeAws_restXmlQueryStringCacheKeysList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};
var serializeAws_restXmlQueryStringNames = function (input, context) {
  var bodyNode = new __XmlNode("QueryStringNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlQueryStringNamesList(input.Items, context);
    var containerNode_27 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_27.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_27);
  }
  return bodyNode;
};
var serializeAws_restXmlQueryStringNamesList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};
var serializeAws_restXmlRealtimeMetricsSubscriptionConfig = function (input, context) {
  var bodyNode = new __XmlNode("RealtimeMetricsSubscriptionConfig");
  if (input.RealtimeMetricsSubscriptionStatus !== undefined && input.RealtimeMetricsSubscriptionStatus !== null) {
    var node = new __XmlNode("RealtimeMetricsSubscriptionStatus")
      .addChildNode(new __XmlText(input.RealtimeMetricsSubscriptionStatus))
      .withName("RealtimeMetricsSubscriptionStatus");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlRestrictions = function (input, context) {
  var bodyNode = new __XmlNode("Restrictions");
  if (input.GeoRestriction !== undefined && input.GeoRestriction !== null) {
    var node = serializeAws_restXmlGeoRestriction(input.GeoRestriction, context).withName("GeoRestriction");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlS3Origin = function (input, context) {
  var bodyNode = new __XmlNode("S3Origin");
  if (input.DomainName !== undefined && input.DomainName !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.DomainName)).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlS3OriginConfig = function (input, context) {
  var bodyNode = new __XmlNode("S3OriginConfig");
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlSslProtocolsList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("SslProtocol").addChildNode(new __XmlText(entry));
      return node.withName("SslProtocol");
    });
};
var serializeAws_restXmlStatusCodeList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("integer").addChildNode(new __XmlText(String(entry)));
      return node.withName("StatusCode");
    });
};
var serializeAws_restXmlStatusCodes = function (input, context) {
  var bodyNode = new __XmlNode("StatusCodes");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlStatusCodeList(input.Items, context);
    var containerNode_28 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_28.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_28);
  }
  return bodyNode;
};
var serializeAws_restXmlStreamingDistributionConfig = function (input, context) {
  var bodyNode = new __XmlNode("StreamingDistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.S3Origin !== undefined && input.S3Origin !== null) {
    var node = serializeAws_restXmlS3Origin(input.S3Origin, context).withName("S3Origin");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    var node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    var node = serializeAws_restXmlStreamingLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    var node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    var node = new __XmlNode("PriceClass").addChildNode(new __XmlText(input.PriceClass)).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlStreamingDistributionConfigWithTags = function (input, context) {
  var bodyNode = new __XmlNode("StreamingDistributionConfigWithTags");
  if (input.StreamingDistributionConfig !== undefined && input.StreamingDistributionConfig !== null) {
    var node = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context).withName(
      "StreamingDistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    var node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlStreamingLoggingConfig = function (input, context) {
  var bodyNode = new __XmlNode("StreamingLoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlTag = function (input, context) {
  var bodyNode = new __XmlNode("Tag");
  if (input.Key !== undefined && input.Key !== null) {
    var node = new __XmlNode("TagKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    var node = new __XmlNode("TagValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var serializeAws_restXmlTagKeyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("TagKey").addChildNode(new __XmlText(entry));
      return node.withName("Key");
    });
};
var serializeAws_restXmlTagKeys = function (input, context) {
  var bodyNode = new __XmlNode("TagKeys");
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlTagKeyList(input.Items, context);
    var containerNode_29 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_29.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_29);
  }
  return bodyNode;
};
var serializeAws_restXmlTagList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};
var serializeAws_restXmlTags = function (input, context) {
  var bodyNode = new __XmlNode("Tags");
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlTagList(input.Items, context);
    var containerNode_30 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_30.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_30);
  }
  return bodyNode;
};
var serializeAws_restXmlTrustedKeyGroupIdList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      var node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("KeyGroup");
    });
};
var serializeAws_restXmlTrustedKeyGroups = function (input, context) {
  var bodyNode = new __XmlNode("TrustedKeyGroups");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlTrustedKeyGroupIdList(input.Items, context);
    var containerNode_31 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_31.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_31);
  }
  return bodyNode;
};
var serializeAws_restXmlTrustedSigners = function (input, context) {
  var bodyNode = new __XmlNode("TrustedSigners");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    var node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    var node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    var nodes = serializeAws_restXmlAwsAccountNumberList(input.Items, context);
    var containerNode_32 = new __XmlNode("Items");
    nodes.map(function (node) {
      containerNode_32.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode_32);
  }
  return bodyNode;
};
var serializeAws_restXmlViewerCertificate = function (input, context) {
  var bodyNode = new __XmlNode("ViewerCertificate");
  if (input.CloudFrontDefaultCertificate !== undefined && input.CloudFrontDefaultCertificate !== null) {
    var node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.CloudFrontDefaultCertificate)))
      .withName("CloudFrontDefaultCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.IAMCertificateId !== undefined && input.IAMCertificateId !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.IAMCertificateId)).withName("IAMCertificateId");
    bodyNode.addChildNode(node);
  }
  if (input.ACMCertificateArn !== undefined && input.ACMCertificateArn !== null) {
    var node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ACMCertificateArn))
      .withName("ACMCertificateArn");
    bodyNode.addChildNode(node);
  }
  if (input.SSLSupportMethod !== undefined && input.SSLSupportMethod !== null) {
    var node = new __XmlNode("SSLSupportMethod")
      .addChildNode(new __XmlText(input.SSLSupportMethod))
      .withName("SSLSupportMethod");
    bodyNode.addChildNode(node);
  }
  if (input.MinimumProtocolVersion !== undefined && input.MinimumProtocolVersion !== null) {
    var node = new __XmlNode("MinimumProtocolVersion")
      .addChildNode(new __XmlText(input.MinimumProtocolVersion))
      .withName("MinimumProtocolVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Certificate !== undefined && input.Certificate !== null) {
    var node = new __XmlNode("string").addChildNode(new __XmlText(input.Certificate)).withName("Certificate");
    bodyNode.addChildNode(node);
  }
  if (input.CertificateSource !== undefined && input.CertificateSource !== null) {
    var node = new __XmlNode("CertificateSource")
      .addChildNode(new __XmlText(input.CertificateSource))
      .withName("CertificateSource");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
var deserializeAws_restXmlActiveTrustedKeyGroups = function (output, context) {
  var contents = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlKGKeyPairIdsList(
      __getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlActiveTrustedSigners = function (output, context) {
  var contents = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Signer"] !== undefined) {
    contents.Items = deserializeAws_restXmlSignerList(__getArrayIfSingleItem(output["Items"]["Signer"]), context);
  }
  return contents;
};
var deserializeAws_restXmlAliases = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["CNAME"] !== undefined) {
    contents.Items = deserializeAws_restXmlAliasList(__getArrayIfSingleItem(output["Items"]["CNAME"]), context);
  }
  return contents;
};
var deserializeAws_restXmlAliasICPRecordal = function (output, context) {
  var contents = {
    CNAME: undefined,
    ICPRecordalStatus: undefined,
  };
  if (output["CNAME"] !== undefined) {
    contents.CNAME = output["CNAME"];
  }
  if (output["ICPRecordalStatus"] !== undefined) {
    contents.ICPRecordalStatus = output["ICPRecordalStatus"];
  }
  return contents;
};
var deserializeAws_restXmlAliasICPRecordals = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlAliasICPRecordal(entry, context);
    });
};
var deserializeAws_restXmlAliasList = function (output, context) {
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
var deserializeAws_restXmlAllowedMethods = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
    CachedMethods: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = deserializeAws_restXmlMethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  if (output["CachedMethods"] !== undefined) {
    contents.CachedMethods = deserializeAws_restXmlCachedMethods(output["CachedMethods"], context);
  }
  return contents;
};
var deserializeAws_restXmlAwsAccountNumberList = function (output, context) {
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
var deserializeAws_restXmlCacheBehavior = function (output, context) {
  var contents = {
    PathPattern: undefined,
    TargetOriginId: undefined,
    TrustedSigners: undefined,
    TrustedKeyGroups: undefined,
    ViewerProtocolPolicy: undefined,
    AllowedMethods: undefined,
    SmoothStreaming: undefined,
    Compress: undefined,
    LambdaFunctionAssociations: undefined,
    FunctionAssociations: undefined,
    FieldLevelEncryptionId: undefined,
    RealtimeLogConfigArn: undefined,
    CachePolicyId: undefined,
    OriginRequestPolicyId: undefined,
    ForwardedValues: undefined,
    MinTTL: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
  };
  if (output["PathPattern"] !== undefined) {
    contents.PathPattern = output["PathPattern"];
  }
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = output["TargetOriginId"];
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = deserializeAws_restXmlTrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = output["ViewerProtocolPolicy"];
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = output["SmoothStreaming"] == "true";
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = output["Compress"] == "true";
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(
      output["LambdaFunctionAssociations"],
      context
    );
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = deserializeAws_restXmlFunctionAssociations(output["FunctionAssociations"], context);
  }
  if (output["FieldLevelEncryptionId"] !== undefined) {
    contents.FieldLevelEncryptionId = output["FieldLevelEncryptionId"];
  }
  if (output["RealtimeLogConfigArn"] !== undefined) {
    contents.RealtimeLogConfigArn = output["RealtimeLogConfigArn"];
  }
  if (output["CachePolicyId"] !== undefined) {
    contents.CachePolicyId = output["CachePolicyId"];
  }
  if (output["OriginRequestPolicyId"] !== undefined) {
    contents.OriginRequestPolicyId = output["OriginRequestPolicyId"];
  }
  if (output["ForwardedValues"] !== undefined) {
    contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = parseInt(output["MinTTL"]);
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = parseInt(output["DefaultTTL"]);
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = parseInt(output["MaxTTL"]);
  }
  return contents;
};
var deserializeAws_restXmlCacheBehaviorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCacheBehavior(entry, context);
    });
};
var deserializeAws_restXmlCacheBehaviors = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["CacheBehavior"] !== undefined) {
    contents.Items = deserializeAws_restXmlCacheBehaviorList(
      __getArrayIfSingleItem(output["Items"]["CacheBehavior"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCachedMethods = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = deserializeAws_restXmlMethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicy = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    CachePolicyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["CachePolicyConfig"] !== undefined) {
    contents.CachePolicyConfig = deserializeAws_restXmlCachePolicyConfig(output["CachePolicyConfig"], context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicyConfig = function (output, context) {
  var contents = {
    Comment: undefined,
    Name: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
    MinTTL: undefined,
    ParametersInCacheKeyAndForwardedToOrigin: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = parseInt(output["DefaultTTL"]);
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = parseInt(output["MaxTTL"]);
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = parseInt(output["MinTTL"]);
  }
  if (output["ParametersInCacheKeyAndForwardedToOrigin"] !== undefined) {
    contents.ParametersInCacheKeyAndForwardedToOrigin = deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin(
      output["ParametersInCacheKeyAndForwardedToOrigin"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCachePolicyCookiesConfig = function (output, context) {
  var contents = {
    CookieBehavior: undefined,
    Cookies: undefined,
  };
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = output["CookieBehavior"];
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookieNames(output["Cookies"], context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicyHeadersConfig = function (output, context) {
  var contents = {
    HeaderBehavior: undefined,
    Headers: undefined,
  };
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = output["HeaderBehavior"];
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicyList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["CachePolicySummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlCachePolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["CachePolicySummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCachePolicyQueryStringsConfig = function (output, context) {
  var contents = {
    QueryStringBehavior: undefined,
    QueryStrings: undefined,
  };
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = output["QueryStringBehavior"];
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = deserializeAws_restXmlQueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicySummary = function (output, context) {
  var contents = {
    Type: undefined,
    CachePolicy: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["CachePolicy"] !== undefined) {
    contents.CachePolicy = deserializeAws_restXmlCachePolicy(output["CachePolicy"], context);
  }
  return contents;
};
var deserializeAws_restXmlCachePolicySummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCachePolicySummary(entry, context);
    });
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentity = function (output, context) {
  var contents = {
    Id: undefined,
    S3CanonicalUserId: undefined,
    CloudFrontOriginAccessIdentityConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["S3CanonicalUserId"] !== undefined) {
    contents.S3CanonicalUserId = output["S3CanonicalUserId"];
  }
  if (output["CloudFrontOriginAccessIdentityConfig"] !== undefined) {
    contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      output["CloudFrontOriginAccessIdentityConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig = function (output, context) {
  var contents = {
    CallerReference: undefined,
    Comment: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentityList = function (output, context) {
  var contents = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["CloudFrontOriginAccessIdentitySummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList(
      __getArrayIfSingleItem(output["Items"]["CloudFrontOriginAccessIdentitySummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary = function (output, context) {
  var contents = {
    Id: undefined,
    S3CanonicalUserId: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["S3CanonicalUserId"] !== undefined) {
    contents.S3CanonicalUserId = output["S3CanonicalUserId"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary(entry, context);
    });
};
var deserializeAws_restXmlContentTypeProfile = function (output, context) {
  var contents = {
    Format: undefined,
    ProfileId: undefined,
    ContentType: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  if (output["ProfileId"] !== undefined) {
    contents.ProfileId = output["ProfileId"];
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = output["ContentType"];
  }
  return contents;
};
var deserializeAws_restXmlContentTypeProfileConfig = function (output, context) {
  var contents = {
    ForwardWhenContentTypeIsUnknown: undefined,
    ContentTypeProfiles: undefined,
  };
  if (output["ForwardWhenContentTypeIsUnknown"] !== undefined) {
    contents.ForwardWhenContentTypeIsUnknown = output["ForwardWhenContentTypeIsUnknown"] == "true";
  }
  if (output["ContentTypeProfiles"] !== undefined) {
    contents.ContentTypeProfiles = deserializeAws_restXmlContentTypeProfiles(output["ContentTypeProfiles"], context);
  }
  return contents;
};
var deserializeAws_restXmlContentTypeProfileList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlContentTypeProfile(entry, context);
    });
};
var deserializeAws_restXmlContentTypeProfiles = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["ContentTypeProfile"] !== undefined) {
    contents.Items = deserializeAws_restXmlContentTypeProfileList(
      __getArrayIfSingleItem(output["Items"]["ContentTypeProfile"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCookieNameList = function (output, context) {
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
var deserializeAws_restXmlCookieNames = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlCookieNameList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};
var deserializeAws_restXmlCookiePreference = function (output, context) {
  var contents = {
    Forward: undefined,
    WhitelistedNames: undefined,
  };
  if (output["Forward"] !== undefined) {
    contents.Forward = output["Forward"];
  }
  if (output["WhitelistedNames"] !== undefined) {
    contents.WhitelistedNames = deserializeAws_restXmlCookieNames(output["WhitelistedNames"], context);
  }
  return contents;
};
var deserializeAws_restXmlCustomErrorResponse = function (output, context) {
  var contents = {
    ErrorCode: undefined,
    ResponsePagePath: undefined,
    ResponseCode: undefined,
    ErrorCachingMinTTL: undefined,
  };
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = parseInt(output["ErrorCode"]);
  }
  if (output["ResponsePagePath"] !== undefined) {
    contents.ResponsePagePath = output["ResponsePagePath"];
  }
  if (output["ResponseCode"] !== undefined) {
    contents.ResponseCode = output["ResponseCode"];
  }
  if (output["ErrorCachingMinTTL"] !== undefined) {
    contents.ErrorCachingMinTTL = parseInt(output["ErrorCachingMinTTL"]);
  }
  return contents;
};
var deserializeAws_restXmlCustomErrorResponseList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCustomErrorResponse(entry, context);
    });
};
var deserializeAws_restXmlCustomErrorResponses = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["CustomErrorResponse"] !== undefined) {
    contents.Items = deserializeAws_restXmlCustomErrorResponseList(
      __getArrayIfSingleItem(output["Items"]["CustomErrorResponse"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCustomHeaders = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["OriginCustomHeader"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginCustomHeadersList(
      __getArrayIfSingleItem(output["Items"]["OriginCustomHeader"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlCustomOriginConfig = function (output, context) {
  var contents = {
    HTTPPort: undefined,
    HTTPSPort: undefined,
    OriginProtocolPolicy: undefined,
    OriginSslProtocols: undefined,
    OriginReadTimeout: undefined,
    OriginKeepaliveTimeout: undefined,
  };
  if (output["HTTPPort"] !== undefined) {
    contents.HTTPPort = parseInt(output["HTTPPort"]);
  }
  if (output["HTTPSPort"] !== undefined) {
    contents.HTTPSPort = parseInt(output["HTTPSPort"]);
  }
  if (output["OriginProtocolPolicy"] !== undefined) {
    contents.OriginProtocolPolicy = output["OriginProtocolPolicy"];
  }
  if (output["OriginSslProtocols"] !== undefined) {
    contents.OriginSslProtocols = deserializeAws_restXmlOriginSslProtocols(output["OriginSslProtocols"], context);
  }
  if (output["OriginReadTimeout"] !== undefined) {
    contents.OriginReadTimeout = parseInt(output["OriginReadTimeout"]);
  }
  if (output["OriginKeepaliveTimeout"] !== undefined) {
    contents.OriginKeepaliveTimeout = parseInt(output["OriginKeepaliveTimeout"]);
  }
  return contents;
};
var deserializeAws_restXmlDefaultCacheBehavior = function (output, context) {
  var contents = {
    TargetOriginId: undefined,
    TrustedSigners: undefined,
    TrustedKeyGroups: undefined,
    ViewerProtocolPolicy: undefined,
    AllowedMethods: undefined,
    SmoothStreaming: undefined,
    Compress: undefined,
    LambdaFunctionAssociations: undefined,
    FunctionAssociations: undefined,
    FieldLevelEncryptionId: undefined,
    RealtimeLogConfigArn: undefined,
    CachePolicyId: undefined,
    OriginRequestPolicyId: undefined,
    ForwardedValues: undefined,
    MinTTL: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
  };
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = output["TargetOriginId"];
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = deserializeAws_restXmlTrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = output["ViewerProtocolPolicy"];
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = output["SmoothStreaming"] == "true";
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = output["Compress"] == "true";
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(
      output["LambdaFunctionAssociations"],
      context
    );
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = deserializeAws_restXmlFunctionAssociations(output["FunctionAssociations"], context);
  }
  if (output["FieldLevelEncryptionId"] !== undefined) {
    contents.FieldLevelEncryptionId = output["FieldLevelEncryptionId"];
  }
  if (output["RealtimeLogConfigArn"] !== undefined) {
    contents.RealtimeLogConfigArn = output["RealtimeLogConfigArn"];
  }
  if (output["CachePolicyId"] !== undefined) {
    contents.CachePolicyId = output["CachePolicyId"];
  }
  if (output["OriginRequestPolicyId"] !== undefined) {
    contents.OriginRequestPolicyId = output["OriginRequestPolicyId"];
  }
  if (output["ForwardedValues"] !== undefined) {
    contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = parseInt(output["MinTTL"]);
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = parseInt(output["DefaultTTL"]);
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = parseInt(output["MaxTTL"]);
  }
  return contents;
};
var deserializeAws_restXmlDistribution = function (output, context) {
  var contents = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    InProgressInvalidationBatches: undefined,
    DomainName: undefined,
    ActiveTrustedSigners: undefined,
    ActiveTrustedKeyGroups: undefined,
    DistributionConfig: undefined,
    AliasICPRecordals: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["InProgressInvalidationBatches"] !== undefined) {
    contents.InProgressInvalidationBatches = parseInt(output["InProgressInvalidationBatches"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["ActiveTrustedKeyGroups"] !== undefined) {
    contents.ActiveTrustedKeyGroups = deserializeAws_restXmlActiveTrustedKeyGroups(
      output["ActiveTrustedKeyGroups"],
      context
    );
  }
  if (output["DistributionConfig"] !== undefined) {
    contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(output["DistributionConfig"], context);
  }
  if (output.AliasICPRecordals === "") {
    contents.AliasICPRecordals = [];
  }
  if (output["AliasICPRecordals"] !== undefined && output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
    contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlDistributionConfig = function (output, context) {
  var contents = {
    CallerReference: undefined,
    Aliases: undefined,
    DefaultRootObject: undefined,
    Origins: undefined,
    OriginGroups: undefined,
    DefaultCacheBehavior: undefined,
    CacheBehaviors: undefined,
    CustomErrorResponses: undefined,
    Comment: undefined,
    Logging: undefined,
    PriceClass: undefined,
    Enabled: undefined,
    ViewerCertificate: undefined,
    Restrictions: undefined,
    WebACLId: undefined,
    HttpVersion: undefined,
    IsIPV6Enabled: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["DefaultRootObject"] !== undefined) {
    contents.DefaultRootObject = output["DefaultRootObject"];
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = deserializeAws_restXmlLoggingConfig(output["Logging"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = output["PriceClass"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["ViewerCertificate"] !== undefined) {
    contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
  }
  if (output["WebACLId"] !== undefined) {
    contents.WebACLId = output["WebACLId"];
  }
  if (output["HttpVersion"] !== undefined) {
    contents.HttpVersion = output["HttpVersion"];
  }
  if (output["IsIPV6Enabled"] !== undefined) {
    contents.IsIPV6Enabled = output["IsIPV6Enabled"] == "true";
  }
  return contents;
};
var deserializeAws_restXmlDistributionIdList = function (output, context) {
  var contents = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["DistributionId"] !== undefined) {
    contents.Items = deserializeAws_restXmlDistributionIdListSummary(
      __getArrayIfSingleItem(output["Items"]["DistributionId"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlDistributionIdListSummary = function (output, context) {
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
var deserializeAws_restXmlDistributionList = function (output, context) {
  var contents = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["DistributionSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlDistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["DistributionSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlDistributionSummary = function (output, context) {
  var contents = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    Aliases: undefined,
    Origins: undefined,
    OriginGroups: undefined,
    DefaultCacheBehavior: undefined,
    CacheBehaviors: undefined,
    CustomErrorResponses: undefined,
    Comment: undefined,
    PriceClass: undefined,
    Enabled: undefined,
    ViewerCertificate: undefined,
    Restrictions: undefined,
    WebACLId: undefined,
    HttpVersion: undefined,
    IsIPV6Enabled: undefined,
    AliasICPRecordals: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = output["PriceClass"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["ViewerCertificate"] !== undefined) {
    contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
  }
  if (output["WebACLId"] !== undefined) {
    contents.WebACLId = output["WebACLId"];
  }
  if (output["HttpVersion"] !== undefined) {
    contents.HttpVersion = output["HttpVersion"];
  }
  if (output["IsIPV6Enabled"] !== undefined) {
    contents.IsIPV6Enabled = output["IsIPV6Enabled"] == "true";
  }
  if (output.AliasICPRecordals === "") {
    contents.AliasICPRecordals = [];
  }
  if (output["AliasICPRecordals"] !== undefined && output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
    contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlDistributionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlDistributionSummary(entry, context);
    });
};
var deserializeAws_restXmlEncryptionEntities = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["EncryptionEntity"] !== undefined) {
    contents.Items = deserializeAws_restXmlEncryptionEntityList(
      __getArrayIfSingleItem(output["Items"]["EncryptionEntity"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlEncryptionEntity = function (output, context) {
  var contents = {
    PublicKeyId: undefined,
    ProviderId: undefined,
    FieldPatterns: undefined,
  };
  if (output["PublicKeyId"] !== undefined) {
    contents.PublicKeyId = output["PublicKeyId"];
  }
  if (output["ProviderId"] !== undefined) {
    contents.ProviderId = output["ProviderId"];
  }
  if (output["FieldPatterns"] !== undefined) {
    contents.FieldPatterns = deserializeAws_restXmlFieldPatterns(output["FieldPatterns"], context);
  }
  return contents;
};
var deserializeAws_restXmlEncryptionEntityList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlEncryptionEntity(entry, context);
    });
};
var deserializeAws_restXmlEndPoint = function (output, context) {
  var contents = {
    StreamType: undefined,
    KinesisStreamConfig: undefined,
  };
  if (output["StreamType"] !== undefined) {
    contents.StreamType = output["StreamType"];
  }
  if (output["KinesisStreamConfig"] !== undefined) {
    contents.KinesisStreamConfig = deserializeAws_restXmlKinesisStreamConfig(output["KinesisStreamConfig"], context);
  }
  return contents;
};
var deserializeAws_restXmlEndPointList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlEndPoint(entry, context);
    });
};
var deserializeAws_restXmlFieldLevelEncryption = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    FieldLevelEncryptionConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["FieldLevelEncryptionConfig"] !== undefined) {
    contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(
      output["FieldLevelEncryptionConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionConfig = function (output, context) {
  var contents = {
    CallerReference: undefined,
    Comment: undefined,
    QueryArgProfileConfig: undefined,
    ContentTypeProfileConfig: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(
      output["QueryArgProfileConfig"],
      context
    );
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(
      output["ContentTypeProfileConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlFieldLevelEncryptionSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionProfile = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    FieldLevelEncryptionProfileConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["FieldLevelEncryptionProfileConfig"] !== undefined) {
    contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(
      output["FieldLevelEncryptionProfileConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionProfileConfig = function (output, context) {
  var contents = {
    Name: undefined,
    CallerReference: undefined,
    Comment: undefined,
    EncryptionEntities: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["EncryptionEntities"] !== undefined) {
    contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionProfileList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionProfileSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionProfileSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionProfileSummary = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
    EncryptionEntities: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["EncryptionEntities"] !== undefined) {
    contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFieldLevelEncryptionProfileSummary(entry, context);
    });
};
var deserializeAws_restXmlFieldLevelEncryptionSummary = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    Comment: undefined,
    QueryArgProfileConfig: undefined,
    ContentTypeProfileConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(
      output["QueryArgProfileConfig"],
      context
    );
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(
      output["ContentTypeProfileConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFieldLevelEncryptionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFieldLevelEncryptionSummary(entry, context);
    });
};
var deserializeAws_restXmlFieldList = function (output, context) {
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
var deserializeAws_restXmlFieldPatternList = function (output, context) {
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
var deserializeAws_restXmlFieldPatterns = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["FieldPattern"] !== undefined) {
    contents.Items = deserializeAws_restXmlFieldPatternList(
      __getArrayIfSingleItem(output["Items"]["FieldPattern"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlForwardedValues = function (output, context) {
  var contents = {
    QueryString: undefined,
    Cookies: undefined,
    Headers: undefined,
    QueryStringCacheKeys: undefined,
  };
  if (output["QueryString"] !== undefined) {
    contents.QueryString = output["QueryString"] == "true";
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookiePreference(output["Cookies"], context);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  if (output["QueryStringCacheKeys"] !== undefined) {
    contents.QueryStringCacheKeys = deserializeAws_restXmlQueryStringCacheKeys(output["QueryStringCacheKeys"], context);
  }
  return contents;
};
var deserializeAws_restXmlFunctionAssociation = function (output, context) {
  var contents = {
    FunctionARN: undefined,
    EventType: undefined,
  };
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = output["FunctionARN"];
  }
  if (output["EventType"] !== undefined) {
    contents.EventType = output["EventType"];
  }
  return contents;
};
var deserializeAws_restXmlFunctionAssociationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFunctionAssociation(entry, context);
    });
};
var deserializeAws_restXmlFunctionAssociations = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["FunctionAssociation"] !== undefined) {
    contents.Items = deserializeAws_restXmlFunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["FunctionAssociation"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFunctionConfig = function (output, context) {
  var contents = {
    Comment: undefined,
    Runtime: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["Runtime"] !== undefined) {
    contents.Runtime = output["Runtime"];
  }
  return contents;
};
var deserializeAws_restXmlFunctionExecutionLogList = function (output, context) {
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
var deserializeAws_restXmlFunctionList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["FunctionSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlFunctionSummaryList(
      __getArrayIfSingleItem(output["Items"]["FunctionSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlFunctionMetadata = function (output, context) {
  var contents = {
    FunctionARN: undefined,
    Stage: undefined,
    CreatedTime: undefined,
    LastModifiedTime: undefined,
  };
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = output["FunctionARN"];
  }
  if (output["Stage"] !== undefined) {
    contents.Stage = output["Stage"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  return contents;
};
var deserializeAws_restXmlFunctionSummary = function (output, context) {
  var contents = {
    Name: undefined,
    Status: undefined,
    FunctionConfig: undefined,
    FunctionMetadata: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["FunctionConfig"] !== undefined) {
    contents.FunctionConfig = deserializeAws_restXmlFunctionConfig(output["FunctionConfig"], context);
  }
  if (output["FunctionMetadata"] !== undefined) {
    contents.FunctionMetadata = deserializeAws_restXmlFunctionMetadata(output["FunctionMetadata"], context);
  }
  return contents;
};
var deserializeAws_restXmlFunctionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFunctionSummary(entry, context);
    });
};
var deserializeAws_restXmlGeoRestriction = function (output, context) {
  var contents = {
    RestrictionType: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["RestrictionType"] !== undefined) {
    contents.RestrictionType = output["RestrictionType"];
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Location"] !== undefined) {
    contents.Items = deserializeAws_restXmlLocationList(__getArrayIfSingleItem(output["Items"]["Location"]), context);
  }
  return contents;
};
var deserializeAws_restXmlHeaderList = function (output, context) {
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
var deserializeAws_restXmlHeaders = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlHeaderList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};
var deserializeAws_restXmlInvalidation = function (output, context) {
  var contents = {
    Id: undefined,
    Status: undefined,
    CreateTime: undefined,
    InvalidationBatch: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = new Date(output["CreateTime"]);
  }
  if (output["InvalidationBatch"] !== undefined) {
    contents.InvalidationBatch = deserializeAws_restXmlInvalidationBatch(output["InvalidationBatch"], context);
  }
  return contents;
};
var deserializeAws_restXmlInvalidationBatch = function (output, context) {
  var contents = {
    Paths: undefined,
    CallerReference: undefined,
  };
  if (output["Paths"] !== undefined) {
    contents.Paths = deserializeAws_restXmlPaths(output["Paths"], context);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  return contents;
};
var deserializeAws_restXmlInvalidationList = function (output, context) {
  var contents = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["InvalidationSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlInvalidationSummaryList(
      __getArrayIfSingleItem(output["Items"]["InvalidationSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlInvalidationSummary = function (output, context) {
  var contents = {
    Id: undefined,
    CreateTime: undefined,
    Status: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = new Date(output["CreateTime"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};
var deserializeAws_restXmlInvalidationSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlInvalidationSummary(entry, context);
    });
};
var deserializeAws_restXmlKeyGroup = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    KeyGroupConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["KeyGroupConfig"] !== undefined) {
    contents.KeyGroupConfig = deserializeAws_restXmlKeyGroupConfig(output["KeyGroupConfig"], context);
  }
  return contents;
};
var deserializeAws_restXmlKeyGroupConfig = function (output, context) {
  var contents = {
    Name: undefined,
    Items: undefined,
    Comment: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["PublicKey"] !== undefined) {
    contents.Items = deserializeAws_restXmlPublicKeyIdList(
      __getArrayIfSingleItem(output["Items"]["PublicKey"]),
      context
    );
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlKeyGroupList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["KeyGroupSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlKeyGroupSummaryList(
      __getArrayIfSingleItem(output["Items"]["KeyGroupSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlKeyGroupSummary = function (output, context) {
  var contents = {
    KeyGroup: undefined,
  };
  if (output["KeyGroup"] !== undefined) {
    contents.KeyGroup = deserializeAws_restXmlKeyGroup(output["KeyGroup"], context);
  }
  return contents;
};
var deserializeAws_restXmlKeyGroupSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlKeyGroupSummary(entry, context);
    });
};
var deserializeAws_restXmlKeyPairIdList = function (output, context) {
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
var deserializeAws_restXmlKeyPairIds = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["KeyPairId"] !== undefined) {
    contents.Items = deserializeAws_restXmlKeyPairIdList(__getArrayIfSingleItem(output["Items"]["KeyPairId"]), context);
  }
  return contents;
};
var deserializeAws_restXmlKGKeyPairIds = function (output, context) {
  var contents = {
    KeyGroupId: undefined,
    KeyPairIds: undefined,
  };
  if (output["KeyGroupId"] !== undefined) {
    contents.KeyGroupId = output["KeyGroupId"];
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = deserializeAws_restXmlKeyPairIds(output["KeyPairIds"], context);
  }
  return contents;
};
var deserializeAws_restXmlKGKeyPairIdsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlKGKeyPairIds(entry, context);
    });
};
var deserializeAws_restXmlKinesisStreamConfig = function (output, context) {
  var contents = {
    RoleARN: undefined,
    StreamARN: undefined,
  };
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = output["RoleARN"];
  }
  if (output["StreamARN"] !== undefined) {
    contents.StreamARN = output["StreamARN"];
  }
  return contents;
};
var deserializeAws_restXmlLambdaFunctionAssociation = function (output, context) {
  var contents = {
    LambdaFunctionARN: undefined,
    EventType: undefined,
    IncludeBody: undefined,
  };
  if (output["LambdaFunctionARN"] !== undefined) {
    contents.LambdaFunctionARN = output["LambdaFunctionARN"];
  }
  if (output["EventType"] !== undefined) {
    contents.EventType = output["EventType"];
  }
  if (output["IncludeBody"] !== undefined) {
    contents.IncludeBody = output["IncludeBody"] == "true";
  }
  return contents;
};
var deserializeAws_restXmlLambdaFunctionAssociationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlLambdaFunctionAssociation(entry, context);
    });
};
var deserializeAws_restXmlLambdaFunctionAssociations = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["LambdaFunctionAssociation"] !== undefined) {
    contents.Items = deserializeAws_restXmlLambdaFunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["LambdaFunctionAssociation"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlLocationList = function (output, context) {
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
var deserializeAws_restXmlLoggingConfig = function (output, context) {
  var contents = {
    Enabled: undefined,
    IncludeCookies: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["IncludeCookies"] !== undefined) {
    contents.IncludeCookies = output["IncludeCookies"] == "true";
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};
var deserializeAws_restXmlMethodsList = function (output, context) {
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
var deserializeAws_restXmlMonitoringSubscription = function (output, context) {
  var contents = {
    RealtimeMetricsSubscriptionConfig: undefined,
  };
  if (output["RealtimeMetricsSubscriptionConfig"] !== undefined) {
    contents.RealtimeMetricsSubscriptionConfig = deserializeAws_restXmlRealtimeMetricsSubscriptionConfig(
      output["RealtimeMetricsSubscriptionConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOrigin = function (output, context) {
  var contents = {
    Id: undefined,
    DomainName: undefined,
    OriginPath: undefined,
    CustomHeaders: undefined,
    S3OriginConfig: undefined,
    CustomOriginConfig: undefined,
    ConnectionAttempts: undefined,
    ConnectionTimeout: undefined,
    OriginShield: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["OriginPath"] !== undefined) {
    contents.OriginPath = output["OriginPath"];
  }
  if (output["CustomHeaders"] !== undefined) {
    contents.CustomHeaders = deserializeAws_restXmlCustomHeaders(output["CustomHeaders"], context);
  }
  if (output["S3OriginConfig"] !== undefined) {
    contents.S3OriginConfig = deserializeAws_restXmlS3OriginConfig(output["S3OriginConfig"], context);
  }
  if (output["CustomOriginConfig"] !== undefined) {
    contents.CustomOriginConfig = deserializeAws_restXmlCustomOriginConfig(output["CustomOriginConfig"], context);
  }
  if (output["ConnectionAttempts"] !== undefined) {
    contents.ConnectionAttempts = parseInt(output["ConnectionAttempts"]);
  }
  if (output["ConnectionTimeout"] !== undefined) {
    contents.ConnectionTimeout = parseInt(output["ConnectionTimeout"]);
  }
  if (output["OriginShield"] !== undefined) {
    contents.OriginShield = deserializeAws_restXmlOriginShield(output["OriginShield"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginCustomHeader = function (output, context) {
  var contents = {
    HeaderName: undefined,
    HeaderValue: undefined,
  };
  if (output["HeaderName"] !== undefined) {
    contents.HeaderName = output["HeaderName"];
  }
  if (output["HeaderValue"] !== undefined) {
    contents.HeaderValue = output["HeaderValue"];
  }
  return contents;
};
var deserializeAws_restXmlOriginCustomHeadersList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginCustomHeader(entry, context);
    });
};
var deserializeAws_restXmlOriginGroup = function (output, context) {
  var contents = {
    Id: undefined,
    FailoverCriteria: undefined,
    Members: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["FailoverCriteria"] !== undefined) {
    contents.FailoverCriteria = deserializeAws_restXmlOriginGroupFailoverCriteria(output["FailoverCriteria"], context);
  }
  if (output["Members"] !== undefined) {
    contents.Members = deserializeAws_restXmlOriginGroupMembers(output["Members"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginGroupFailoverCriteria = function (output, context) {
  var contents = {
    StatusCodes: undefined,
  };
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = deserializeAws_restXmlStatusCodes(output["StatusCodes"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginGroupList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginGroup(entry, context);
    });
};
var deserializeAws_restXmlOriginGroupMember = function (output, context) {
  var contents = {
    OriginId: undefined,
  };
  if (output["OriginId"] !== undefined) {
    contents.OriginId = output["OriginId"];
  }
  return contents;
};
var deserializeAws_restXmlOriginGroupMemberList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginGroupMember(entry, context);
    });
};
var deserializeAws_restXmlOriginGroupMembers = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["OriginGroupMember"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginGroupMemberList(
      __getArrayIfSingleItem(output["Items"]["OriginGroupMember"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOriginGroups = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["OriginGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginGroupList(
      __getArrayIfSingleItem(output["Items"]["OriginGroup"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOriginList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOrigin(entry, context);
    });
};
var deserializeAws_restXmlOriginRequestPolicy = function (output, context) {
  var contents = {
    Id: undefined,
    LastModifiedTime: undefined,
    OriginRequestPolicyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["OriginRequestPolicyConfig"] !== undefined) {
    contents.OriginRequestPolicyConfig = deserializeAws_restXmlOriginRequestPolicyConfig(
      output["OriginRequestPolicyConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicyConfig = function (output, context) {
  var contents = {
    Comment: undefined,
    Name: undefined,
    HeadersConfig: undefined,
    CookiesConfig: undefined,
    QueryStringsConfig: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = deserializeAws_restXmlOriginRequestPolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = deserializeAws_restXmlOriginRequestPolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig(
      output["QueryStringsConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicyCookiesConfig = function (output, context) {
  var contents = {
    CookieBehavior: undefined,
    Cookies: undefined,
  };
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = output["CookieBehavior"];
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookieNames(output["Cookies"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicyHeadersConfig = function (output, context) {
  var contents = {
    HeaderBehavior: undefined,
    Headers: undefined,
  };
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = output["HeaderBehavior"];
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicyList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["OriginRequestPolicySummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginRequestPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["OriginRequestPolicySummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig = function (output, context) {
  var contents = {
    QueryStringBehavior: undefined,
    QueryStrings: undefined,
  };
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = output["QueryStringBehavior"];
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = deserializeAws_restXmlQueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicySummary = function (output, context) {
  var contents = {
    Type: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["OriginRequestPolicy"] !== undefined) {
    contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(output["OriginRequestPolicy"], context);
  }
  return contents;
};
var deserializeAws_restXmlOriginRequestPolicySummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginRequestPolicySummary(entry, context);
    });
};
var deserializeAws_restXmlOrigins = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginList(__getArrayIfSingleItem(output["Items"]["Origin"]), context);
  }
  return contents;
};
var deserializeAws_restXmlOriginShield = function (output, context) {
  var contents = {
    Enabled: undefined,
    OriginShieldRegion: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["OriginShieldRegion"] !== undefined) {
    contents.OriginShieldRegion = output["OriginShieldRegion"];
  }
  return contents;
};
var deserializeAws_restXmlOriginSslProtocols = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["SslProtocol"] !== undefined) {
    contents.Items = deserializeAws_restXmlSslProtocolsList(
      __getArrayIfSingleItem(output["Items"]["SslProtocol"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = function (output, context) {
  var contents = {
    EnableAcceptEncodingGzip: undefined,
    EnableAcceptEncodingBrotli: undefined,
    HeadersConfig: undefined,
    CookiesConfig: undefined,
    QueryStringsConfig: undefined,
  };
  if (output["EnableAcceptEncodingGzip"] !== undefined) {
    contents.EnableAcceptEncodingGzip = output["EnableAcceptEncodingGzip"] == "true";
  }
  if (output["EnableAcceptEncodingBrotli"] !== undefined) {
    contents.EnableAcceptEncodingBrotli = output["EnableAcceptEncodingBrotli"] == "true";
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = deserializeAws_restXmlCachePolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = deserializeAws_restXmlCachePolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = deserializeAws_restXmlCachePolicyQueryStringsConfig(
      output["QueryStringsConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlPathList = function (output, context) {
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
var deserializeAws_restXmlPaths = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Path"] !== undefined) {
    contents.Items = deserializeAws_restXmlPathList(__getArrayIfSingleItem(output["Items"]["Path"]), context);
  }
  return contents;
};
var deserializeAws_restXmlPublicKey = function (output, context) {
  var contents = {
    Id: undefined,
    CreatedTime: undefined,
    PublicKeyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["PublicKeyConfig"] !== undefined) {
    contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(output["PublicKeyConfig"], context);
  }
  return contents;
};
var deserializeAws_restXmlPublicKeyConfig = function (output, context) {
  var contents = {
    CallerReference: undefined,
    Name: undefined,
    EncodedKey: undefined,
    Comment: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["EncodedKey"] !== undefined) {
    contents.EncodedKey = output["EncodedKey"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlPublicKeyIdList = function (output, context) {
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
var deserializeAws_restXmlPublicKeyList = function (output, context) {
  var contents = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["PublicKeySummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlPublicKeySummaryList(
      __getArrayIfSingleItem(output["Items"]["PublicKeySummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlPublicKeySummary = function (output, context) {
  var contents = {
    Id: undefined,
    Name: undefined,
    CreatedTime: undefined,
    EncodedKey: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["EncodedKey"] !== undefined) {
    contents.EncodedKey = output["EncodedKey"];
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
var deserializeAws_restXmlPublicKeySummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlPublicKeySummary(entry, context);
    });
};
var deserializeAws_restXmlQueryArgProfile = function (output, context) {
  var contents = {
    QueryArg: undefined,
    ProfileId: undefined,
  };
  if (output["QueryArg"] !== undefined) {
    contents.QueryArg = output["QueryArg"];
  }
  if (output["ProfileId"] !== undefined) {
    contents.ProfileId = output["ProfileId"];
  }
  return contents;
};
var deserializeAws_restXmlQueryArgProfileConfig = function (output, context) {
  var contents = {
    ForwardWhenQueryArgProfileIsUnknown: undefined,
    QueryArgProfiles: undefined,
  };
  if (output["ForwardWhenQueryArgProfileIsUnknown"] !== undefined) {
    contents.ForwardWhenQueryArgProfileIsUnknown = output["ForwardWhenQueryArgProfileIsUnknown"] == "true";
  }
  if (output["QueryArgProfiles"] !== undefined) {
    contents.QueryArgProfiles = deserializeAws_restXmlQueryArgProfiles(output["QueryArgProfiles"], context);
  }
  return contents;
};
var deserializeAws_restXmlQueryArgProfileList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlQueryArgProfile(entry, context);
    });
};
var deserializeAws_restXmlQueryArgProfiles = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["QueryArgProfile"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryArgProfileList(
      __getArrayIfSingleItem(output["Items"]["QueryArgProfile"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlQueryStringCacheKeys = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryStringCacheKeysList(
      __getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlQueryStringCacheKeysList = function (output, context) {
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
var deserializeAws_restXmlQueryStringNames = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryStringNamesList(
      __getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlQueryStringNamesList = function (output, context) {
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
var deserializeAws_restXmlRealtimeLogConfig = function (output, context) {
  var contents = {
    ARN: undefined,
    Name: undefined,
    SamplingRate: undefined,
    EndPoints: undefined,
    Fields: undefined,
  };
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["SamplingRate"] !== undefined) {
    contents.SamplingRate = parseInt(output["SamplingRate"]);
  }
  if (output.EndPoints === "") {
    contents.EndPoints = [];
  }
  if (output["EndPoints"] !== undefined && output["EndPoints"]["member"] !== undefined) {
    contents.EndPoints = deserializeAws_restXmlEndPointList(
      __getArrayIfSingleItem(output["EndPoints"]["member"]),
      context
    );
  }
  if (output.Fields === "") {
    contents.Fields = [];
  }
  if (output["Fields"] !== undefined && output["Fields"]["Field"] !== undefined) {
    contents.Fields = deserializeAws_restXmlFieldList(__getArrayIfSingleItem(output["Fields"]["Field"]), context);
  }
  return contents;
};
var deserializeAws_restXmlRealtimeLogConfigList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlRealtimeLogConfig(entry, context);
    });
};
var deserializeAws_restXmlRealtimeLogConfigs = function (output, context) {
  var contents = {
    MaxItems: undefined,
    Items: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    NextMarker: undefined,
  };
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["member"] !== undefined) {
    contents.Items = deserializeAws_restXmlRealtimeLogConfigList(
      __getArrayIfSingleItem(output["Items"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};
var deserializeAws_restXmlRealtimeMetricsSubscriptionConfig = function (output, context) {
  var contents = {
    RealtimeMetricsSubscriptionStatus: undefined,
  };
  if (output["RealtimeMetricsSubscriptionStatus"] !== undefined) {
    contents.RealtimeMetricsSubscriptionStatus = output["RealtimeMetricsSubscriptionStatus"];
  }
  return contents;
};
var deserializeAws_restXmlRestrictions = function (output, context) {
  var contents = {
    GeoRestriction: undefined,
  };
  if (output["GeoRestriction"] !== undefined) {
    contents.GeoRestriction = deserializeAws_restXmlGeoRestriction(output["GeoRestriction"], context);
  }
  return contents;
};
var deserializeAws_restXmlS3Origin = function (output, context) {
  var contents = {
    DomainName: undefined,
    OriginAccessIdentity: undefined,
  };
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = output["OriginAccessIdentity"];
  }
  return contents;
};
var deserializeAws_restXmlS3OriginConfig = function (output, context) {
  var contents = {
    OriginAccessIdentity: undefined,
  };
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = output["OriginAccessIdentity"];
  }
  return contents;
};
var deserializeAws_restXmlSigner = function (output, context) {
  var contents = {
    AwsAccountNumber: undefined,
    KeyPairIds: undefined,
  };
  if (output["AwsAccountNumber"] !== undefined) {
    contents.AwsAccountNumber = output["AwsAccountNumber"];
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = deserializeAws_restXmlKeyPairIds(output["KeyPairIds"], context);
  }
  return contents;
};
var deserializeAws_restXmlSignerList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlSigner(entry, context);
    });
};
var deserializeAws_restXmlSslProtocolsList = function (output, context) {
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
var deserializeAws_restXmlStatusCodeList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return parseInt(entry);
    });
};
var deserializeAws_restXmlStatusCodes = function (output, context) {
  var contents = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["StatusCode"] !== undefined) {
    contents.Items = deserializeAws_restXmlStatusCodeList(
      __getArrayIfSingleItem(output["Items"]["StatusCode"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlStreamingDistribution = function (output, context) {
  var contents = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    ActiveTrustedSigners: undefined,
    StreamingDistributionConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["StreamingDistributionConfig"] !== undefined) {
    contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(
      output["StreamingDistributionConfig"],
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlStreamingDistributionConfig = function (output, context) {
  var contents = {
    CallerReference: undefined,
    S3Origin: undefined,
    Aliases: undefined,
    Comment: undefined,
    Logging: undefined,
    TrustedSigners: undefined,
    PriceClass: undefined,
    Enabled: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = output["CallerReference"];
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = deserializeAws_restXmlStreamingLoggingConfig(output["Logging"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = output["PriceClass"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};
var deserializeAws_restXmlStreamingDistributionList = function (output, context) {
  var contents = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = parseInt(output["MaxItems"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["StreamingDistributionSummary"] !== undefined) {
    contents.Items = deserializeAws_restXmlStreamingDistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["StreamingDistributionSummary"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlStreamingDistributionSummary = function (output, context) {
  var contents = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    S3Origin: undefined,
    Aliases: undefined,
    TrustedSigners: undefined,
    Comment: undefined,
    PriceClass: undefined,
    Enabled: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = new Date(output["LastModifiedTime"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = output["PriceClass"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};
var deserializeAws_restXmlStreamingDistributionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlStreamingDistributionSummary(entry, context);
    });
};
var deserializeAws_restXmlStreamingLoggingConfig = function (output, context) {
  var contents = {
    Enabled: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};
var deserializeAws_restXmlTag = function (output, context) {
  var contents = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};
var deserializeAws_restXmlTagList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlTag(entry, context);
    });
};
var deserializeAws_restXmlTags = function (output, context) {
  var contents = {
    Items: undefined,
  };
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
    contents.Items = deserializeAws_restXmlTagList(__getArrayIfSingleItem(output["Items"]["Tag"]), context);
  }
  return contents;
};
var deserializeAws_restXmlTestResult = function (output, context) {
  var contents = {
    FunctionSummary: undefined,
    ComputeUtilization: undefined,
    FunctionExecutionLogs: undefined,
    FunctionErrorMessage: undefined,
    FunctionOutput: undefined,
  };
  if (output["FunctionSummary"] !== undefined) {
    contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(output["FunctionSummary"], context);
  }
  if (output["ComputeUtilization"] !== undefined) {
    contents.ComputeUtilization = output["ComputeUtilization"];
  }
  if (output.FunctionExecutionLogs === "") {
    contents.FunctionExecutionLogs = [];
  }
  if (output["FunctionExecutionLogs"] !== undefined && output["FunctionExecutionLogs"]["member"] !== undefined) {
    contents.FunctionExecutionLogs = deserializeAws_restXmlFunctionExecutionLogList(
      __getArrayIfSingleItem(output["FunctionExecutionLogs"]["member"]),
      context
    );
  }
  if (output["FunctionErrorMessage"] !== undefined) {
    contents.FunctionErrorMessage = output["FunctionErrorMessage"];
  }
  if (output["FunctionOutput"] !== undefined) {
    contents.FunctionOutput = output["FunctionOutput"];
  }
  return contents;
};
var deserializeAws_restXmlTrustedKeyGroupIdList = function (output, context) {
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
var deserializeAws_restXmlTrustedKeyGroups = function (output, context) {
  var contents = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlTrustedKeyGroupIdList(
      __getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlTrustedSigners = function (output, context) {
  var contents = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = parseInt(output["Quantity"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["AwsAccountNumber"] !== undefined) {
    contents.Items = deserializeAws_restXmlAwsAccountNumberList(
      __getArrayIfSingleItem(output["Items"]["AwsAccountNumber"]),
      context
    );
  }
  return contents;
};
var deserializeAws_restXmlViewerCertificate = function (output, context) {
  var contents = {
    CloudFrontDefaultCertificate: undefined,
    IAMCertificateId: undefined,
    ACMCertificateArn: undefined,
    SSLSupportMethod: undefined,
    MinimumProtocolVersion: undefined,
    Certificate: undefined,
    CertificateSource: undefined,
  };
  if (output["CloudFrontDefaultCertificate"] !== undefined) {
    contents.CloudFrontDefaultCertificate = output["CloudFrontDefaultCertificate"] == "true";
  }
  if (output["IAMCertificateId"] !== undefined) {
    contents.IAMCertificateId = output["IAMCertificateId"];
  }
  if (output["ACMCertificateArn"] !== undefined) {
    contents.ACMCertificateArn = output["ACMCertificateArn"];
  }
  if (output["SSLSupportMethod"] !== undefined) {
    contents.SSLSupportMethod = output["SSLSupportMethod"];
  }
  if (output["MinimumProtocolVersion"] !== undefined) {
    contents.MinimumProtocolVersion = output["MinimumProtocolVersion"];
  }
  if (output["Certificate"] !== undefined) {
    contents.Certificate = output["Certificate"];
  }
  if (output["CertificateSource"] !== undefined) {
    contents.CertificateSource = output["CertificateSource"];
  }
  return contents;
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
      var parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: function (val, tagName) {
          return val.trim() === "" ? "" : decodeHTML(val);
        },
      });
      var textNodeName = "#text";
      var key = Object.keys(parsedObj)[0];
      var parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });
};
var loadRestXmlErrorCode = function (output, data) {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
//# sourceMappingURL=Aws_restXml.js.map
