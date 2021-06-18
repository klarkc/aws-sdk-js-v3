"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restXmlGetStreamingDistributionConfigCommand =
  exports.serializeAws_restXmlGetStreamingDistributionCommand =
  exports.serializeAws_restXmlGetRealtimeLogConfigCommand =
  exports.serializeAws_restXmlGetPublicKeyConfigCommand =
  exports.serializeAws_restXmlGetPublicKeyCommand =
  exports.serializeAws_restXmlGetOriginRequestPolicyConfigCommand =
  exports.serializeAws_restXmlGetOriginRequestPolicyCommand =
  exports.serializeAws_restXmlGetMonitoringSubscriptionCommand =
  exports.serializeAws_restXmlGetKeyGroupConfigCommand =
  exports.serializeAws_restXmlGetKeyGroupCommand =
  exports.serializeAws_restXmlGetInvalidationCommand =
  exports.serializeAws_restXmlGetFunctionCommand =
  exports.serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand =
  exports.serializeAws_restXmlGetFieldLevelEncryptionProfileCommand =
  exports.serializeAws_restXmlGetFieldLevelEncryptionConfigCommand =
  exports.serializeAws_restXmlGetFieldLevelEncryptionCommand =
  exports.serializeAws_restXmlGetDistributionConfigCommand =
  exports.serializeAws_restXmlGetDistributionCommand =
  exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand =
  exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand =
  exports.serializeAws_restXmlGetCachePolicyConfigCommand =
  exports.serializeAws_restXmlGetCachePolicyCommand =
  exports.serializeAws_restXmlDescribeFunctionCommand =
  exports.serializeAws_restXmlDeleteStreamingDistributionCommand =
  exports.serializeAws_restXmlDeleteRealtimeLogConfigCommand =
  exports.serializeAws_restXmlDeletePublicKeyCommand =
  exports.serializeAws_restXmlDeleteOriginRequestPolicyCommand =
  exports.serializeAws_restXmlDeleteMonitoringSubscriptionCommand =
  exports.serializeAws_restXmlDeleteKeyGroupCommand =
  exports.serializeAws_restXmlDeleteFunctionCommand =
  exports.serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand =
  exports.serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand =
  exports.serializeAws_restXmlDeleteDistributionCommand =
  exports.serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand =
  exports.serializeAws_restXmlDeleteCachePolicyCommand =
  exports.serializeAws_restXmlCreateStreamingDistributionWithTagsCommand =
  exports.serializeAws_restXmlCreateStreamingDistributionCommand =
  exports.serializeAws_restXmlCreateRealtimeLogConfigCommand =
  exports.serializeAws_restXmlCreatePublicKeyCommand =
  exports.serializeAws_restXmlCreateOriginRequestPolicyCommand =
  exports.serializeAws_restXmlCreateMonitoringSubscriptionCommand =
  exports.serializeAws_restXmlCreateKeyGroupCommand =
  exports.serializeAws_restXmlCreateInvalidationCommand =
  exports.serializeAws_restXmlCreateFunctionCommand =
  exports.serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand =
  exports.serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand =
  exports.serializeAws_restXmlCreateDistributionWithTagsCommand =
  exports.serializeAws_restXmlCreateDistributionCommand =
  exports.serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand =
  exports.serializeAws_restXmlCreateCachePolicyCommand =
    void 0;
exports.deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand =
  exports.deserializeAws_restXmlDeleteCachePolicyCommand =
  exports.deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand =
  exports.deserializeAws_restXmlCreateStreamingDistributionCommand =
  exports.deserializeAws_restXmlCreateRealtimeLogConfigCommand =
  exports.deserializeAws_restXmlCreatePublicKeyCommand =
  exports.deserializeAws_restXmlCreateOriginRequestPolicyCommand =
  exports.deserializeAws_restXmlCreateMonitoringSubscriptionCommand =
  exports.deserializeAws_restXmlCreateKeyGroupCommand =
  exports.deserializeAws_restXmlCreateInvalidationCommand =
  exports.deserializeAws_restXmlCreateFunctionCommand =
  exports.deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand =
  exports.deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand =
  exports.deserializeAws_restXmlCreateDistributionWithTagsCommand =
  exports.deserializeAws_restXmlCreateDistributionCommand =
  exports.deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand =
  exports.deserializeAws_restXmlCreateCachePolicyCommand =
  exports.serializeAws_restXmlUpdateStreamingDistributionCommand =
  exports.serializeAws_restXmlUpdateRealtimeLogConfigCommand =
  exports.serializeAws_restXmlUpdatePublicKeyCommand =
  exports.serializeAws_restXmlUpdateOriginRequestPolicyCommand =
  exports.serializeAws_restXmlUpdateKeyGroupCommand =
  exports.serializeAws_restXmlUpdateFunctionCommand =
  exports.serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand =
  exports.serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand =
  exports.serializeAws_restXmlUpdateDistributionCommand =
  exports.serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand =
  exports.serializeAws_restXmlUpdateCachePolicyCommand =
  exports.serializeAws_restXmlUntagResourceCommand =
  exports.serializeAws_restXmlTestFunctionCommand =
  exports.serializeAws_restXmlTagResourceCommand =
  exports.serializeAws_restXmlPublishFunctionCommand =
  exports.serializeAws_restXmlListTagsForResourceCommand =
  exports.serializeAws_restXmlListStreamingDistributionsCommand =
  exports.serializeAws_restXmlListRealtimeLogConfigsCommand =
  exports.serializeAws_restXmlListPublicKeysCommand =
  exports.serializeAws_restXmlListOriginRequestPoliciesCommand =
  exports.serializeAws_restXmlListKeyGroupsCommand =
  exports.serializeAws_restXmlListInvalidationsCommand =
  exports.serializeAws_restXmlListFunctionsCommand =
  exports.serializeAws_restXmlListFieldLevelEncryptionProfilesCommand =
  exports.serializeAws_restXmlListFieldLevelEncryptionConfigsCommand =
  exports.serializeAws_restXmlListDistributionsByWebACLIdCommand =
  exports.serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand =
  exports.serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand =
  exports.serializeAws_restXmlListDistributionsByKeyGroupCommand =
  exports.serializeAws_restXmlListDistributionsByCachePolicyIdCommand =
  exports.serializeAws_restXmlListDistributionsCommand =
  exports.serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand =
  exports.serializeAws_restXmlListCachePoliciesCommand =
    void 0;
exports.deserializeAws_restXmlListStreamingDistributionsCommand =
  exports.deserializeAws_restXmlListRealtimeLogConfigsCommand =
  exports.deserializeAws_restXmlListPublicKeysCommand =
  exports.deserializeAws_restXmlListOriginRequestPoliciesCommand =
  exports.deserializeAws_restXmlListKeyGroupsCommand =
  exports.deserializeAws_restXmlListInvalidationsCommand =
  exports.deserializeAws_restXmlListFunctionsCommand =
  exports.deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand =
  exports.deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand =
  exports.deserializeAws_restXmlListDistributionsByWebACLIdCommand =
  exports.deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand =
  exports.deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand =
  exports.deserializeAws_restXmlListDistributionsByKeyGroupCommand =
  exports.deserializeAws_restXmlListDistributionsByCachePolicyIdCommand =
  exports.deserializeAws_restXmlListDistributionsCommand =
  exports.deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand =
  exports.deserializeAws_restXmlListCachePoliciesCommand =
  exports.deserializeAws_restXmlGetStreamingDistributionConfigCommand =
  exports.deserializeAws_restXmlGetStreamingDistributionCommand =
  exports.deserializeAws_restXmlGetRealtimeLogConfigCommand =
  exports.deserializeAws_restXmlGetPublicKeyConfigCommand =
  exports.deserializeAws_restXmlGetPublicKeyCommand =
  exports.deserializeAws_restXmlGetOriginRequestPolicyConfigCommand =
  exports.deserializeAws_restXmlGetOriginRequestPolicyCommand =
  exports.deserializeAws_restXmlGetMonitoringSubscriptionCommand =
  exports.deserializeAws_restXmlGetKeyGroupConfigCommand =
  exports.deserializeAws_restXmlGetKeyGroupCommand =
  exports.deserializeAws_restXmlGetInvalidationCommand =
  exports.deserializeAws_restXmlGetFunctionCommand =
  exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand =
  exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand =
  exports.deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand =
  exports.deserializeAws_restXmlGetFieldLevelEncryptionCommand =
  exports.deserializeAws_restXmlGetDistributionConfigCommand =
  exports.deserializeAws_restXmlGetDistributionCommand =
  exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand =
  exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand =
  exports.deserializeAws_restXmlGetCachePolicyConfigCommand =
  exports.deserializeAws_restXmlGetCachePolicyCommand =
  exports.deserializeAws_restXmlDescribeFunctionCommand =
  exports.deserializeAws_restXmlDeleteStreamingDistributionCommand =
  exports.deserializeAws_restXmlDeleteRealtimeLogConfigCommand =
  exports.deserializeAws_restXmlDeletePublicKeyCommand =
  exports.deserializeAws_restXmlDeleteOriginRequestPolicyCommand =
  exports.deserializeAws_restXmlDeleteMonitoringSubscriptionCommand =
  exports.deserializeAws_restXmlDeleteKeyGroupCommand =
  exports.deserializeAws_restXmlDeleteFunctionCommand =
  exports.deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand =
  exports.deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand =
  exports.deserializeAws_restXmlDeleteDistributionCommand =
    void 0;
exports.deserializeAws_restXmlUpdateStreamingDistributionCommand =
  exports.deserializeAws_restXmlUpdateRealtimeLogConfigCommand =
  exports.deserializeAws_restXmlUpdatePublicKeyCommand =
  exports.deserializeAws_restXmlUpdateOriginRequestPolicyCommand =
  exports.deserializeAws_restXmlUpdateKeyGroupCommand =
  exports.deserializeAws_restXmlUpdateFunctionCommand =
  exports.deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand =
  exports.deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand =
  exports.deserializeAws_restXmlUpdateDistributionCommand =
  exports.deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand =
  exports.deserializeAws_restXmlUpdateCachePolicyCommand =
  exports.deserializeAws_restXmlUntagResourceCommand =
  exports.deserializeAws_restXmlTestFunctionCommand =
  exports.deserializeAws_restXmlTagResourceCommand =
  exports.deserializeAws_restXmlPublishFunctionCommand =
  exports.deserializeAws_restXmlListTagsForResourceCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_restXmlCreateCachePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/cache-policy";
  let body;
  if (input.CachePolicyConfig !== undefined) {
    body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents;
  if (input.CachePolicyConfig !== undefined) {
    contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateCachePolicyCommand = serializeAws_restXmlCreateCachePolicyCommand;
const serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront";
  let body;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
  }
  let contents;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand =
  serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand;
const serializeAws_restXmlCreateDistributionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/distribution";
  let body;
  if (input.DistributionConfig !== undefined) {
    body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
  }
  let contents;
  if (input.DistributionConfig !== undefined) {
    contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateDistributionCommand = serializeAws_restXmlCreateDistributionCommand;
const serializeAws_restXmlCreateDistributionWithTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/distribution";
  const query = {
    WithTags: "",
  };
  let body;
  if (input.DistributionConfigWithTags !== undefined) {
    body = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
  }
  let contents;
  if (input.DistributionConfigWithTags !== undefined) {
    contents = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restXmlCreateDistributionWithTagsCommand = serializeAws_restXmlCreateDistributionWithTagsCommand;
const serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/field-level-encryption";
  let body;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand =
  serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand;
const serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/field-level-encryption-profile";
  let body;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand =
  serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand;
const serializeAws_restXmlCreateFunctionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/function";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("CreateFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.FunctionCode !== undefined) {
    const node = new xml_builder_1.XmlNode("FunctionBlob")
      .addChildNode(new xml_builder_1.XmlText(context.base64Encoder(input.FunctionCode)))
      .withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new xml_builder_1.XmlNode("FunctionName")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateFunctionCommand = serializeAws_restXmlCreateFunctionCommand;
const serializeAws_restXmlCreateInvalidationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  let body;
  if (input.InvalidationBatch !== undefined) {
    body = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
  }
  let contents;
  if (input.InvalidationBatch !== undefined) {
    contents = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateInvalidationCommand = serializeAws_restXmlCreateInvalidationCommand;
const serializeAws_restXmlCreateKeyGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/key-group";
  let body;
  if (input.KeyGroupConfig !== undefined) {
    body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents;
  if (input.KeyGroupConfig !== undefined) {
    contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateKeyGroupCommand = serializeAws_restXmlCreateKeyGroupCommand;
const serializeAws_restXmlCreateMonitoringSubscriptionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  let body;
  if (input.MonitoringSubscription !== undefined) {
    body = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
  }
  let contents;
  if (input.MonitoringSubscription !== undefined) {
    contents = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateMonitoringSubscriptionCommand =
  serializeAws_restXmlCreateMonitoringSubscriptionCommand;
const serializeAws_restXmlCreateOriginRequestPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/origin-request-policy";
  let body;
  if (input.OriginRequestPolicyConfig !== undefined) {
    body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateOriginRequestPolicyCommand = serializeAws_restXmlCreateOriginRequestPolicyCommand;
const serializeAws_restXmlCreatePublicKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/public-key";
  let body;
  if (input.PublicKeyConfig !== undefined) {
    body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents;
  if (input.PublicKeyConfig !== undefined) {
    contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreatePublicKeyCommand = serializeAws_restXmlCreatePublicKeyCommand;
const serializeAws_restXmlCreateRealtimeLogConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/realtime-log-config";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("CreateRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.EndPoints !== undefined) {
    const nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
    const containerNode = new xml_builder_1.XmlNode("EndPoints");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlFieldList(input.Fields, context);
    const containerNode = new xml_builder_1.XmlNode("Fields");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.SamplingRate)))
      .withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateRealtimeLogConfigCommand = serializeAws_restXmlCreateRealtimeLogConfigCommand;
const serializeAws_restXmlCreateStreamingDistributionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/streaming-distribution";
  let body;
  if (input.StreamingDistributionConfig !== undefined) {
    body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlCreateStreamingDistributionCommand = serializeAws_restXmlCreateStreamingDistributionCommand;
const serializeAws_restXmlCreateStreamingDistributionWithTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/streaming-distribution";
  const query = {
    WithTags: "",
  };
  let body;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    body = serializeAws_restXmlStreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
  }
  let contents;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfigWithTags(
      input.StreamingDistributionConfigWithTags,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restXmlCreateStreamingDistributionWithTagsCommand =
  serializeAws_restXmlCreateStreamingDistributionWithTagsCommand;
const serializeAws_restXmlDeleteCachePolicyCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteCachePolicyCommand = serializeAws_restXmlDeleteCachePolicyCommand;
const serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand =
  serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand;
const serializeAws_restXmlDeleteDistributionCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteDistributionCommand = serializeAws_restXmlDeleteDistributionCommand;
const serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/field-level-encryption/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand =
  serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand;
const serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand =
  serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand;
const serializeAws_restXmlDeleteFunctionCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restXmlDeleteFunctionCommand = serializeAws_restXmlDeleteFunctionCommand;
const serializeAws_restXmlDeleteKeyGroupCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteKeyGroupCommand = serializeAws_restXmlDeleteKeyGroupCommand;
const serializeAws_restXmlDeleteMonitoringSubscriptionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
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
exports.serializeAws_restXmlDeleteMonitoringSubscriptionCommand =
  serializeAws_restXmlDeleteMonitoringSubscriptionCommand;
const serializeAws_restXmlDeleteOriginRequestPolicyCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteOriginRequestPolicyCommand = serializeAws_restXmlDeleteOriginRequestPolicyCommand;
const serializeAws_restXmlDeletePublicKeyCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/public-key/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeletePublicKeyCommand = serializeAws_restXmlDeletePublicKeyCommand;
const serializeAws_restXmlDeleteRealtimeLogConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/delete-realtime-log-config";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("DeleteRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlDeleteRealtimeLogConfigCommand = serializeAws_restXmlDeleteRealtimeLogConfigCommand;
const serializeAws_restXmlDeleteStreamingDistributionCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/streaming-distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restXmlDeleteStreamingDistributionCommand = serializeAws_restXmlDeleteStreamingDistributionCommand;
const serializeAws_restXmlDescribeFunctionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/function/{Name}/describe";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query = {
    ...(input.Stage !== undefined && { Stage: input.Stage }),
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
exports.serializeAws_restXmlDescribeFunctionCommand = serializeAws_restXmlDescribeFunctionCommand;
const serializeAws_restXmlGetCachePolicyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetCachePolicyCommand = serializeAws_restXmlGetCachePolicyCommand;
const serializeAws_restXmlGetCachePolicyConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/cache-policy/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetCachePolicyConfigCommand = serializeAws_restXmlGetCachePolicyConfigCommand;
const serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand =
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand;
const serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand =
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand;
const serializeAws_restXmlGetDistributionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetDistributionCommand = serializeAws_restXmlGetDistributionCommand;
const serializeAws_restXmlGetDistributionConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetDistributionConfigCommand = serializeAws_restXmlGetDistributionConfigCommand;
const serializeAws_restXmlGetFieldLevelEncryptionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetFieldLevelEncryptionCommand = serializeAws_restXmlGetFieldLevelEncryptionCommand;
const serializeAws_restXmlGetFieldLevelEncryptionConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetFieldLevelEncryptionConfigCommand =
  serializeAws_restXmlGetFieldLevelEncryptionConfigCommand;
const serializeAws_restXmlGetFieldLevelEncryptionProfileCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetFieldLevelEncryptionProfileCommand =
  serializeAws_restXmlGetFieldLevelEncryptionProfileCommand;
const serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand =
  serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand;
const serializeAws_restXmlGetFunctionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query = {
    ...(input.Stage !== undefined && { Stage: input.Stage }),
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
exports.serializeAws_restXmlGetFunctionCommand = serializeAws_restXmlGetFunctionCommand;
const serializeAws_restXmlGetInvalidationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetInvalidationCommand = serializeAws_restXmlGetInvalidationCommand;
const serializeAws_restXmlGetKeyGroupCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetKeyGroupCommand = serializeAws_restXmlGetKeyGroupCommand;
const serializeAws_restXmlGetKeyGroupConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/key-group/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetKeyGroupConfigCommand = serializeAws_restXmlGetKeyGroupConfigCommand;
const serializeAws_restXmlGetMonitoringSubscriptionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetMonitoringSubscriptionCommand = serializeAws_restXmlGetMonitoringSubscriptionCommand;
const serializeAws_restXmlGetOriginRequestPolicyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetOriginRequestPolicyCommand = serializeAws_restXmlGetOriginRequestPolicyCommand;
const serializeAws_restXmlGetOriginRequestPolicyConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-request-policy/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetOriginRequestPolicyConfigCommand =
  serializeAws_restXmlGetOriginRequestPolicyConfigCommand;
const serializeAws_restXmlGetPublicKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/public-key/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetPublicKeyCommand = serializeAws_restXmlGetPublicKeyCommand;
const serializeAws_restXmlGetPublicKeyConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/public-key/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetPublicKeyConfigCommand = serializeAws_restXmlGetPublicKeyConfigCommand;
const serializeAws_restXmlGetRealtimeLogConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/get-realtime-log-config";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("GetRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetRealtimeLogConfigCommand = serializeAws_restXmlGetRealtimeLogConfigCommand;
const serializeAws_restXmlGetStreamingDistributionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/streaming-distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetStreamingDistributionCommand = serializeAws_restXmlGetStreamingDistributionCommand;
const serializeAws_restXmlGetStreamingDistributionConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/streaming-distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlGetStreamingDistributionConfigCommand =
  serializeAws_restXmlGetStreamingDistributionConfigCommand;
const serializeAws_restXmlListCachePoliciesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/cache-policy";
  const query = {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListCachePoliciesCommand = serializeAws_restXmlListCachePoliciesCommand;
const serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand =
  serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand;
const serializeAws_restXmlListDistributionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distribution";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListDistributionsCommand = serializeAws_restXmlListDistributionsCommand;
const serializeAws_restXmlListDistributionsByCachePolicyIdCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}";
  if (input.CachePolicyId !== undefined) {
    const labelValue = input.CachePolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CachePolicyId.");
    }
    resolvedPath = resolvedPath.replace("{CachePolicyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CachePolicyId.");
  }
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListDistributionsByCachePolicyIdCommand =
  serializeAws_restXmlListDistributionsByCachePolicyIdCommand;
const serializeAws_restXmlListDistributionsByKeyGroupCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}";
  if (input.KeyGroupId !== undefined) {
    const labelValue = input.KeyGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KeyGroupId.");
    }
    resolvedPath = resolvedPath.replace("{KeyGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KeyGroupId.");
  }
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListDistributionsByKeyGroupCommand = serializeAws_restXmlListDistributionsByKeyGroupCommand;
const serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}";
  if (input.OriginRequestPolicyId !== undefined) {
    const labelValue = input.OriginRequestPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OriginRequestPolicyId.");
    }
    resolvedPath = resolvedPath.replace(
      "{OriginRequestPolicyId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OriginRequestPolicyId.");
  }
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand =
  serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand;
const serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/distributionsByRealtimeLogConfig";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("ListDistributionsByRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.Marker !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Marker))
      .withName("Marker");
    bodyNode.addChildNode(node);
  }
  if (input.MaxItems !== undefined) {
    const node = new xml_builder_1.XmlNode("Integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.MaxItems)))
      .withName("MaxItems");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigName !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.RealtimeLogConfigName))
      .withName("RealtimeLogConfigName");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand =
  serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand;
const serializeAws_restXmlListDistributionsByWebACLIdCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distributionsByWebACLId/{WebACLId}";
  if (input.WebACLId !== undefined) {
    const labelValue = input.WebACLId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WebACLId.");
    }
    resolvedPath = resolvedPath.replace("{WebACLId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WebACLId.");
  }
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListDistributionsByWebACLIdCommand = serializeAws_restXmlListDistributionsByWebACLIdCommand;
const serializeAws_restXmlListFieldLevelEncryptionConfigsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListFieldLevelEncryptionConfigsCommand =
  serializeAws_restXmlListFieldLevelEncryptionConfigsCommand;
const serializeAws_restXmlListFieldLevelEncryptionProfilesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/field-level-encryption-profile";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListFieldLevelEncryptionProfilesCommand =
  serializeAws_restXmlListFieldLevelEncryptionProfilesCommand;
const serializeAws_restXmlListFunctionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/function";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Stage !== undefined && { Stage: input.Stage }),
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
exports.serializeAws_restXmlListFunctionsCommand = serializeAws_restXmlListFunctionsCommand;
const serializeAws_restXmlListInvalidationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/distribution/{DistributionId}/invalidation";
  if (input.DistributionId !== undefined) {
    const labelValue = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListInvalidationsCommand = serializeAws_restXmlListInvalidationsCommand;
const serializeAws_restXmlListKeyGroupsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/key-group";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListKeyGroupsCommand = serializeAws_restXmlListKeyGroupsCommand;
const serializeAws_restXmlListOriginRequestPoliciesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/origin-request-policy";
  const query = {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListOriginRequestPoliciesCommand = serializeAws_restXmlListOriginRequestPoliciesCommand;
const serializeAws_restXmlListPublicKeysCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/public-key";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListPublicKeysCommand = serializeAws_restXmlListPublicKeysCommand;
const serializeAws_restXmlListRealtimeLogConfigsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/realtime-log-config";
  const query = {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
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
exports.serializeAws_restXmlListRealtimeLogConfigsCommand = serializeAws_restXmlListRealtimeLogConfigsCommand;
const serializeAws_restXmlListStreamingDistributionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/streaming-distribution";
  const query = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListStreamingDistributionsCommand = serializeAws_restXmlListStreamingDistributionsCommand;
const serializeAws_restXmlListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/2020-05-31/tagging";
  const query = {
    ...(input.Resource !== undefined && { Resource: input.Resource }),
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
exports.serializeAws_restXmlListTagsForResourceCommand = serializeAws_restXmlListTagsForResourceCommand;
const serializeAws_restXmlPublishFunctionCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/function/{Name}/publish";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlPublishFunctionCommand = serializeAws_restXmlPublishFunctionCommand;
const serializeAws_restXmlTagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/tagging";
  const query = {
    Operation: "Tag",
    ...(input.Resource !== undefined && { Resource: input.Resource }),
  };
  let body;
  if (input.Tags !== undefined) {
    body = serializeAws_restXmlTags(input.Tags, context);
  }
  let contents;
  if (input.Tags !== undefined) {
    contents = serializeAws_restXmlTags(input.Tags, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restXmlTagResourceCommand = serializeAws_restXmlTagResourceCommand;
const serializeAws_restXmlTestFunctionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/function/{Name}/test";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("TestFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.EventObject !== undefined) {
    const node = new xml_builder_1.XmlNode("FunctionEventObject")
      .addChildNode(new xml_builder_1.XmlText(context.base64Encoder(input.EventObject)))
      .withName("EventObject");
    bodyNode.addChildNode(node);
  }
  if (input.Stage !== undefined) {
    const node = new xml_builder_1.XmlNode("FunctionStage")
      .addChildNode(new xml_builder_1.XmlText(input.Stage))
      .withName("Stage");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restXmlTestFunctionCommand = serializeAws_restXmlTestFunctionCommand;
const serializeAws_restXmlUntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/tagging";
  const query = {
    Operation: "Untag",
    ...(input.Resource !== undefined && { Resource: input.Resource }),
  };
  let body;
  if (input.TagKeys !== undefined) {
    body = serializeAws_restXmlTagKeys(input.TagKeys, context);
  }
  let contents;
  if (input.TagKeys !== undefined) {
    contents = serializeAws_restXmlTagKeys(input.TagKeys, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restXmlUntagResourceCommand = serializeAws_restXmlUntagResourceCommand;
const serializeAws_restXmlUpdateCachePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.CachePolicyConfig !== undefined) {
    body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents;
  if (input.CachePolicyConfig !== undefined) {
    contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateCachePolicyCommand = serializeAws_restXmlUpdateCachePolicyCommand;
const serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
  }
  let contents;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand =
  serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand;
const serializeAws_restXmlUpdateDistributionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.DistributionConfig !== undefined) {
    body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
  }
  let contents;
  if (input.DistributionConfig !== undefined) {
    contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateDistributionCommand = serializeAws_restXmlUpdateDistributionCommand;
const serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/field-level-encryption/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand =
  serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand;
const serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/field-level-encryption-profile/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand =
  serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand;
const serializeAws_restXmlUpdateFunctionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("UpdateFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.FunctionCode !== undefined) {
    const node = new xml_builder_1.XmlNode("FunctionBlob")
      .addChildNode(new xml_builder_1.XmlText(context.base64Encoder(input.FunctionCode)))
      .withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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
exports.serializeAws_restXmlUpdateFunctionCommand = serializeAws_restXmlUpdateFunctionCommand;
const serializeAws_restXmlUpdateKeyGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.KeyGroupConfig !== undefined) {
    body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents;
  if (input.KeyGroupConfig !== undefined) {
    contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateKeyGroupCommand = serializeAws_restXmlUpdateKeyGroupCommand;
const serializeAws_restXmlUpdateOriginRequestPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.OriginRequestPolicyConfig !== undefined) {
    body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateOriginRequestPolicyCommand = serializeAws_restXmlUpdateOriginRequestPolicyCommand;
const serializeAws_restXmlUpdatePublicKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/public-key/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.PublicKeyConfig !== undefined) {
    body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents;
  if (input.PublicKeyConfig !== undefined) {
    contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdatePublicKeyCommand = serializeAws_restXmlUpdatePublicKeyCommand;
const serializeAws_restXmlUpdateRealtimeLogConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
  };
  let resolvedPath = "/2020-05-31/realtime-log-config";
  let body;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new xml_builder_1.XmlNode("UpdateRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.EndPoints !== undefined) {
    const nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
    const containerNode = new xml_builder_1.XmlNode("EndPoints");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlFieldList(input.Fields, context);
    const containerNode = new xml_builder_1.XmlNode("Fields");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.SamplingRate)))
      .withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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
exports.serializeAws_restXmlUpdateRealtimeLogConfigCommand = serializeAws_restXmlUpdateRealtimeLogConfigCommand;
const serializeAws_restXmlUpdateStreamingDistributionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch }),
  };
  let resolvedPath = "/2020-05-31/streaming-distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body;
  if (input.StreamingDistributionConfig !== undefined) {
    body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
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
exports.serializeAws_restXmlUpdateStreamingDistributionCommand = serializeAws_restXmlUpdateStreamingDistributionCommand;
const deserializeAws_restXmlCreateCachePolicyCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateCachePolicyCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateCachePolicyCommand = deserializeAws_restXmlCreateCachePolicyCommand;
const deserializeAws_restXmlCreateCachePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCachePolicies":
    case "com.amazonaws.cloudfront#TooManyCachePolicies":
      response = {
        ...(await deserializeAws_restXmlTooManyCachePoliciesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand =
  deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand;
const deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudFrontOriginAccessIdentityAlreadyExists":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCloudFrontOriginAccessIdentities":
    case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
      response = {
        ...(await deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateDistributionCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateDistributionCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateDistributionCommand = deserializeAws_restXmlCreateDistributionCommand;
const deserializeAws_restXmlCreateDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      response = {
        ...(await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      response = {
        ...(await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      response = {
        ...(await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      response = {
        ...(await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      response = {
        ...(await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      response = {
        ...(await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      response = {
        ...(await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidProtocolSettings":
    case "com.amazonaws.cloudfront#InvalidProtocolSettings":
      response = {
        ...(await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      response = {
        ...(await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      response = {
        ...(await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      response = {
        ...(await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      response = {
        ...(await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      response = {
        ...(await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      response = {
        ...(await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      response = {
        ...(await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      response = {
        ...(await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      response = {
        ...(await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      response = {
        ...(await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributions":
    case "com.amazonaws.cloudfront#TooManyDistributions":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateDistributionWithTagsCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateDistributionWithTagsCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateDistributionWithTagsCommand =
  deserializeAws_restXmlCreateDistributionWithTagsCommand;
const deserializeAws_restXmlCreateDistributionWithTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      response = {
        ...(await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      response = {
        ...(await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      response = {
        ...(await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      response = {
        ...(await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      response = {
        ...(await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      response = {
        ...(await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      response = {
        ...(await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidProtocolSettings":
    case "com.amazonaws.cloudfront#InvalidProtocolSettings":
      response = {
        ...(await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      response = {
        ...(await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      response = {
        ...(await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      response = {
        ...(await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      response = {
        ...(await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      response = {
        ...(await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      response = {
        ...(await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      response = {
        ...(await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      response = {
        ...(await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      response = {
        ...(await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      response = {
        ...(await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      response = {
        ...(await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributions":
    case "com.amazonaws.cloudfront#TooManyDistributions":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand =
  deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand;
const deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionConfigAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      response = {
        ...(await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionConfigs":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionConfigs":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand =
  deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand;
const deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionProfiles":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateFunctionCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFunctionCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateFunctionCommand = deserializeAws_restXmlCreateFunctionCommand;
const deserializeAws_restXmlCreateFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionAlreadyExists":
    case "com.amazonaws.cloudfront#FunctionAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlFunctionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      response = {
        ...(await deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFunctions":
    case "com.amazonaws.cloudfront#TooManyFunctions":
      response = {
        ...(await deserializeAws_restXmlTooManyFunctionsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateInvalidationCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateInvalidationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Invalidation: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data = await parseBody(output.body, context);
  contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateInvalidationCommand = deserializeAws_restXmlCreateInvalidationCommand;
const deserializeAws_restXmlCreateInvalidationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchTooLarge":
    case "com.amazonaws.cloudfront#BatchTooLarge":
      response = {
        ...(await deserializeAws_restXmlBatchTooLargeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyInvalidationsInProgress":
    case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
      response = {
        ...(await deserializeAws_restXmlTooManyInvalidationsInProgressResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateKeyGroupCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateKeyGroupCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateKeyGroupCommand = deserializeAws_restXmlCreateKeyGroupCommand;
const deserializeAws_restXmlCreateKeyGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyKeyGroups":
    case "com.amazonaws.cloudfront#TooManyKeyGroups":
      response = {
        ...(await deserializeAws_restXmlTooManyKeyGroupsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      response = {
        ...(await deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateMonitoringSubscriptionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMonitoringSubscriptionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    MonitoringSubscription: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateMonitoringSubscriptionCommand =
  deserializeAws_restXmlCreateMonitoringSubscriptionCommand;
const deserializeAws_restXmlCreateMonitoringSubscriptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      response = {
        ...(await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateOriginRequestPolicyCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateOriginRequestPolicyCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateOriginRequestPolicyCommand = deserializeAws_restXmlCreateOriginRequestPolicyCommand;
const deserializeAws_restXmlCreateOriginRequestPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginRequestPolicies":
    case "com.amazonaws.cloudfront#TooManyOriginRequestPolicies":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginRequestPoliciesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreatePublicKeyCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreatePublicKeyCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreatePublicKeyCommand = deserializeAws_restXmlCreatePublicKeyCommand;
const deserializeAws_restXmlCreatePublicKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PublicKeyAlreadyExists":
    case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlPublicKeyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyPublicKeys":
    case "com.amazonaws.cloudfront#TooManyPublicKeys":
      response = {
        ...(await deserializeAws_restXmlTooManyPublicKeysResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateRealtimeLogConfigCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateRealtimeLogConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateRealtimeLogConfigCommand = deserializeAws_restXmlCreateRealtimeLogConfigCommand;
const deserializeAws_restXmlCreateRealtimeLogConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RealtimeLogConfigAlreadyExists":
    case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRealtimeLogConfigs":
    case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
      response = {
        ...(await deserializeAws_restXmlTooManyRealtimeLogConfigsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateStreamingDistributionCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateStreamingDistributionCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateStreamingDistributionCommand =
  deserializeAws_restXmlCreateStreamingDistributionCommand;
const deserializeAws_restXmlCreateStreamingDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      response = {
        ...(await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError(output, context);
  }
  const contents = {
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
  const data = await parseBody(output.body, context);
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand =
  deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand;
const deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      response = {
        ...(await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      response = {
        ...(await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteCachePolicyCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteCachePolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteCachePolicyCommand = deserializeAws_restXmlDeleteCachePolicyCommand;
const deserializeAws_restXmlDeleteCachePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CachePolicyInUse":
    case "com.amazonaws.cloudfront#CachePolicyInUse":
      response = {
        ...(await deserializeAws_restXmlCachePolicyInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      response = {
        ...(await deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand =
  deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand;
const deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudFrontOriginAccessIdentityInUse":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
      response = {
        ...(await deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteDistributionCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteDistributionCommand = deserializeAws_restXmlDeleteDistributionCommand;
const deserializeAws_restXmlDeleteDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DistributionNotDisabled":
    case "com.amazonaws.cloudfront#DistributionNotDisabled":
      response = {
        ...(await deserializeAws_restXmlDistributionNotDisabledResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand =
  deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand;
const deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FieldLevelEncryptionConfigInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand =
  deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand;
const deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FieldLevelEncryptionProfileInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteFunctionCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteFunctionCommand = deserializeAws_restXmlDeleteFunctionCommand;
const deserializeAws_restXmlDeleteFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionInUse":
    case "com.amazonaws.cloudfront#FunctionInUse":
      response = {
        ...(await deserializeAws_restXmlFunctionInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteKeyGroupCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteKeyGroupCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteKeyGroupCommand = deserializeAws_restXmlDeleteKeyGroupCommand;
const deserializeAws_restXmlDeleteKeyGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.cloudfront#ResourceInUse":
      response = {
        ...(await deserializeAws_restXmlResourceInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteMonitoringSubscriptionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteMonitoringSubscriptionCommand =
  deserializeAws_restXmlDeleteMonitoringSubscriptionCommand;
const deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      response = {
        ...(await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteOriginRequestPolicyCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteOriginRequestPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteOriginRequestPolicyCommand = deserializeAws_restXmlDeleteOriginRequestPolicyCommand;
const deserializeAws_restXmlDeleteOriginRequestPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      response = {
        ...(await deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OriginRequestPolicyInUse":
    case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
      response = {
        ...(await deserializeAws_restXmlOriginRequestPolicyInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeletePublicKeyCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeletePublicKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeletePublicKeyCommand = deserializeAws_restXmlDeletePublicKeyCommand;
const deserializeAws_restXmlDeletePublicKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PublicKeyInUse":
    case "com.amazonaws.cloudfront#PublicKeyInUse":
      response = {
        ...(await deserializeAws_restXmlPublicKeyInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteRealtimeLogConfigCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteRealtimeLogConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteRealtimeLogConfigCommand = deserializeAws_restXmlDeleteRealtimeLogConfigCommand;
const deserializeAws_restXmlDeleteRealtimeLogConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RealtimeLogConfigInUse":
    case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
      response = {
        ...(await deserializeAws_restXmlRealtimeLogConfigInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDeleteStreamingDistributionCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStreamingDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteStreamingDistributionCommand =
  deserializeAws_restXmlDeleteStreamingDistributionCommand;
const deserializeAws_restXmlDeleteStreamingDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StreamingDistributionNotDisabled":
    case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
      response = {
        ...(await deserializeAws_restXmlStreamingDistributionNotDisabledResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlDescribeFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDescribeFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FunctionSummary: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDescribeFunctionCommand = deserializeAws_restXmlDescribeFunctionCommand;
const deserializeAws_restXmlDescribeFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetCachePolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCachePolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CachePolicy: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetCachePolicyCommand = deserializeAws_restXmlGetCachePolicyCommand;
const deserializeAws_restXmlGetCachePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetCachePolicyConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCachePolicyConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CachePolicyConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CachePolicyConfig = deserializeAws_restXmlCachePolicyConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetCachePolicyConfigCommand = deserializeAws_restXmlGetCachePolicyConfigCommand;
const deserializeAws_restXmlGetCachePolicyConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentity: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand =
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand;
const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentityConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
    data,
    context
  );
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand =
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand;
const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetDistributionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetDistributionCommand = deserializeAws_restXmlGetDistributionCommand;
const deserializeAws_restXmlGetDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetDistributionConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDistributionConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetDistributionConfigCommand = deserializeAws_restXmlGetDistributionConfigCommand;
const deserializeAws_restXmlGetDistributionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetFieldLevelEncryptionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryption: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetFieldLevelEncryptionCommand = deserializeAws_restXmlGetFieldLevelEncryptionCommand;
const deserializeAws_restXmlGetFieldLevelEncryptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand =
  deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand;
const deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfile: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand =
  deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand;
const deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfileConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand =
  deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand;
const deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFunctionCommandError(output, context);
  }
  const contents = {
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
  const data = await collectBody(output.body, context);
  contents.FunctionCode = data;
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetFunctionCommand = deserializeAws_restXmlGetFunctionCommand;
const deserializeAws_restXmlGetFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetInvalidationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetInvalidationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Invalidation: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetInvalidationCommand = deserializeAws_restXmlGetInvalidationCommand;
const deserializeAws_restXmlGetInvalidationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchInvalidation":
    case "com.amazonaws.cloudfront#NoSuchInvalidation":
      response = {
        ...(await deserializeAws_restXmlNoSuchInvalidationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetKeyGroupCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetKeyGroupCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroup: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetKeyGroupCommand = deserializeAws_restXmlGetKeyGroupCommand;
const deserializeAws_restXmlGetKeyGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetKeyGroupConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetKeyGroupConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroupConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.KeyGroupConfig = deserializeAws_restXmlKeyGroupConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetKeyGroupConfigCommand = deserializeAws_restXmlGetKeyGroupConfigCommand;
const deserializeAws_restXmlGetKeyGroupConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetMonitoringSubscriptionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMonitoringSubscriptionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    MonitoringSubscription: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetMonitoringSubscriptionCommand = deserializeAws_restXmlGetMonitoringSubscriptionCommand;
const deserializeAws_restXmlGetMonitoringSubscriptionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      response = {
        ...(await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetOriginRequestPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetOriginRequestPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetOriginRequestPolicyCommand = deserializeAws_restXmlGetOriginRequestPolicyCommand;
const deserializeAws_restXmlGetOriginRequestPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetOriginRequestPolicyConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicyConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.OriginRequestPolicyConfig = deserializeAws_restXmlOriginRequestPolicyConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetOriginRequestPolicyConfigCommand =
  deserializeAws_restXmlGetOriginRequestPolicyConfigCommand;
const deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetPublicKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKey: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetPublicKeyCommand = deserializeAws_restXmlGetPublicKeyCommand;
const deserializeAws_restXmlGetPublicKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetPublicKeyConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicKeyConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKeyConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetPublicKeyConfigCommand = deserializeAws_restXmlGetPublicKeyConfigCommand;
const deserializeAws_restXmlGetPublicKeyConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetRealtimeLogConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetRealtimeLogConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetRealtimeLogConfigCommand = deserializeAws_restXmlGetRealtimeLogConfigCommand;
const deserializeAws_restXmlGetRealtimeLogConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetStreamingDistributionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStreamingDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetStreamingDistributionCommand = deserializeAws_restXmlGetStreamingDistributionCommand;
const deserializeAws_restXmlGetStreamingDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlGetStreamingDistributionConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStreamingDistributionConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistributionConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetStreamingDistributionConfigCommand =
  deserializeAws_restXmlGetStreamingDistributionConfigCommand;
const deserializeAws_restXmlGetStreamingDistributionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListCachePoliciesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCachePoliciesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CachePolicyList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.CachePolicyList = deserializeAws_restXmlCachePolicyList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListCachePoliciesCommand = deserializeAws_restXmlListCachePoliciesCommand;
const deserializeAws_restXmlListCachePoliciesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentityList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.CloudFrontOriginAccessIdentityList = deserializeAws_restXmlCloudFrontOriginAccessIdentityList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand =
  deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand;
const deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsCommand = deserializeAws_restXmlListDistributionsCommand;
const deserializeAws_restXmlListDistributionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsByCachePolicyIdCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsByCachePolicyIdCommand =
  deserializeAws_restXmlListDistributionsByCachePolicyIdCommand;
const deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsByKeyGroupCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByKeyGroupCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsByKeyGroupCommand =
  deserializeAws_restXmlListDistributionsByKeyGroupCommand;
const deserializeAws_restXmlListDistributionsByKeyGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand =
  deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand;
const deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand =
  deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand;
const deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListDistributionsByWebACLIdCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListDistributionsByWebACLIdCommand =
  deserializeAws_restXmlListDistributionsByWebACLIdCommand;
const deserializeAws_restXmlListDistributionsByWebACLIdCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      response = {
        ...(await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FieldLevelEncryptionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionList = deserializeAws_restXmlFieldLevelEncryptionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand =
  deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand;
const deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FieldLevelEncryptionProfileList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionProfileList = deserializeAws_restXmlFieldLevelEncryptionProfileList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand =
  deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand;
const deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListFunctionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFunctionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FunctionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.FunctionList = deserializeAws_restXmlFunctionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListFunctionsCommand = deserializeAws_restXmlListFunctionsCommand;
const deserializeAws_restXmlListFunctionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListInvalidationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListInvalidationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    InvalidationList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.InvalidationList = deserializeAws_restXmlInvalidationList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListInvalidationsCommand = deserializeAws_restXmlListInvalidationsCommand;
const deserializeAws_restXmlListInvalidationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListKeyGroupsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListKeyGroupsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    KeyGroupList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.KeyGroupList = deserializeAws_restXmlKeyGroupList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListKeyGroupsCommand = deserializeAws_restXmlListKeyGroupsCommand;
const deserializeAws_restXmlListKeyGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListOriginRequestPoliciesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListOriginRequestPoliciesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    OriginRequestPolicyList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.OriginRequestPolicyList = deserializeAws_restXmlOriginRequestPolicyList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListOriginRequestPoliciesCommand = deserializeAws_restXmlListOriginRequestPoliciesCommand;
const deserializeAws_restXmlListOriginRequestPoliciesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListPublicKeysCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListPublicKeysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    PublicKeyList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.PublicKeyList = deserializeAws_restXmlPublicKeyList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListPublicKeysCommand = deserializeAws_restXmlListPublicKeysCommand;
const deserializeAws_restXmlListPublicKeysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListRealtimeLogConfigsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListRealtimeLogConfigsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfigs: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.RealtimeLogConfigs = deserializeAws_restXmlRealtimeLogConfigs(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListRealtimeLogConfigsCommand = deserializeAws_restXmlListRealtimeLogConfigsCommand;
const deserializeAws_restXmlListRealtimeLogConfigsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListStreamingDistributionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListStreamingDistributionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    StreamingDistributionList: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.StreamingDistributionList = deserializeAws_restXmlStreamingDistributionList(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListStreamingDistributionsCommand =
  deserializeAws_restXmlListStreamingDistributionsCommand;
const deserializeAws_restXmlListStreamingDistributionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlListTagsForResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTagsForResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.Tags = deserializeAws_restXmlTags(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTagsForResourceCommand = deserializeAws_restXmlListTagsForResourceCommand;
const deserializeAws_restXmlListTagsForResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      response = {
        ...(await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlPublishFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPublishFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FunctionSummary: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlPublishFunctionCommand = deserializeAws_restXmlPublishFunctionCommand;
const deserializeAws_restXmlPublishFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlTagResourceCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlTagResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlTagResourceCommand = deserializeAws_restXmlTagResourceCommand;
const deserializeAws_restXmlTagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      response = {
        ...(await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlTestFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlTestFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    TestResult: undefined,
  };
  const data = await parseBody(output.body, context);
  contents.TestResult = deserializeAws_restXmlTestResult(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlTestFunctionCommand = deserializeAws_restXmlTestFunctionCommand;
const deserializeAws_restXmlTestFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TestFunctionFailed":
    case "com.amazonaws.cloudfront#TestFunctionFailed":
      response = {
        ...(await deserializeAws_restXmlTestFunctionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUntagResourceCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlUntagResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUntagResourceCommand = deserializeAws_restXmlUntagResourceCommand;
const deserializeAws_restXmlUntagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      response = {
        ...(await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateCachePolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateCachePolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CachePolicy: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateCachePolicyCommand = deserializeAws_restXmlUpdateCachePolicyCommand;
const deserializeAws_restXmlUpdateCachePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentity: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand =
  deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand;
const deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateDistributionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateDistributionCommand = deserializeAws_restXmlUpdateDistributionCommand;
const deserializeAws_restXmlUpdateDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      response = {
        ...(await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      response = {
        ...(await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      response = {
        ...(await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      response = {
        ...(await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      response = {
        ...(await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      response = {
        ...(await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      response = {
        ...(await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      response = {
        ...(await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      response = {
        ...(await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      response = {
        ...(await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      response = {
        ...(await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      response = {
        ...(await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      response = {
        ...(await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      response = {
        ...(await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      response = {
        ...(await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      response = {
        ...(await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      response = {
        ...(await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      response = {
        ...(await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      response = {
        ...(await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      response = {
        ...(await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      response = {
        ...(await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryption: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand =
  deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand;
const deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      response = {
        ...(await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfile: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand =
  deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand;
const deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      response = {
        ...(await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      response = {
        ...(await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      response = {
        ...(await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FunctionSummary: undefined,
  };
  if (output.headers["ettag"] !== undefined) {
    contents.ETag = output.headers["ettag"];
  }
  const data = await parseBody(output.body, context);
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateFunctionCommand = deserializeAws_restXmlUpdateFunctionCommand;
const deserializeAws_restXmlUpdateFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      response = {
        ...(await deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      response = {
        ...(await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateKeyGroupCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateKeyGroupCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroup: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateKeyGroupCommand = deserializeAws_restXmlUpdateKeyGroupCommand;
const deserializeAws_restXmlUpdateKeyGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      response = {
        ...(await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      response = {
        ...(await deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateOriginRequestPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateOriginRequestPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateOriginRequestPolicyCommand = deserializeAws_restXmlUpdateOriginRequestPolicyCommand;
const deserializeAws_restXmlUpdateOriginRequestPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdatePublicKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdatePublicKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKey: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdatePublicKeyCommand = deserializeAws_restXmlUpdatePublicKeyCommand;
const deserializeAws_restXmlUpdatePublicKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CannotChangeImmutablePublicKeyFields":
    case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
      response = {
        ...(await deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateRealtimeLogConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateRealtimeLogConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateRealtimeLogConfigCommand = deserializeAws_restXmlUpdateRealtimeLogConfigCommand;
const deserializeAws_restXmlUpdateRealtimeLogConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlUpdateStreamingDistributionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateStreamingDistributionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data = await parseBody(output.body, context);
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateStreamingDistributionCommand =
  deserializeAws_restXmlUpdateStreamingDistributionCommand;
const deserializeAws_restXmlUpdateStreamingDistributionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      response = {
        ...(await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      response = {
        ...(await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      response = {
        ...(await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      response = {
        ...(await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      response = {
        ...(await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      response = {
        ...(await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      response = {
        ...(await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      response = {
        ...(await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      response = {
        ...(await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      response = {
        ...(await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      response = {
        ...(await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restXmlAccessDeniedResponse = async (parsedOutput, context) => {
  const contents = {
    name: "AccessDenied",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlBatchTooLargeResponse = async (parsedOutput, context) => {
  const contents = {
    name: "BatchTooLarge",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCachePolicyAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CachePolicyAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCachePolicyInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CachePolicyInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CannotChangeImmutablePublicKeyFields",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CloudFrontOriginAccessIdentityAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CloudFrontOriginAccessIdentityInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlCNAMEAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CNAMEAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlDistributionAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DistributionAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlDistributionNotDisabledResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DistributionNotDisabled",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FieldLevelEncryptionConfigAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FieldLevelEncryptionConfigInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FieldLevelEncryptionProfileAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FieldLevelEncryptionProfileInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FieldLevelEncryptionProfileSizeExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFunctionAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FunctionAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFunctionInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FunctionInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlFunctionSizeLimitExceededResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FunctionSizeLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlIllegalDeleteResponse = async (parsedOutput, context) => {
  const contents = {
    name: "IllegalDelete",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse = async (
  parsedOutput,
  context
) => {
  const contents = {
    name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlIllegalUpdateResponse = async (parsedOutput, context) => {
  const contents = {
    name: "IllegalUpdate",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInconsistentQuantitiesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InconsistentQuantities",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidArgumentResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidArgument",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidDefaultRootObjectResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidDefaultRootObject",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidErrorCodeResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidErrorCode",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidForwardCookiesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidForwardCookies",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidFunctionAssociationResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidFunctionAssociation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidGeoRestrictionParameterResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidGeoRestrictionParameter",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidHeadersForS3OriginResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidHeadersForS3Origin",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidIfMatchVersionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidIfMatchVersion",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidLambdaFunctionAssociation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidLocationCodeResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidLocationCode",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidMinimumProtocolVersionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidMinimumProtocolVersion",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidOriginResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidOrigin",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidOriginAccessIdentityResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidOriginAccessIdentity",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidOriginKeepaliveTimeout",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidOriginReadTimeoutResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidOriginReadTimeout",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidProtocolSettingsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidProtocolSettings",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidQueryStringParametersResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidQueryStringParameters",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidRelativePathResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidRelativePath",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidRequiredProtocolResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidRequiredProtocol",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidResponseCodeResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidResponseCode",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidTaggingResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidTagging",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidTTLOrderResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidTTLOrder",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidViewerCertificateResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidViewerCertificate",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlInvalidWebACLIdResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidWebACLId",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlKeyGroupAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "KeyGroupAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlMissingBodyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "MissingBody",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchCachePolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchCachePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchCloudFrontOriginAccessIdentity",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchDistributionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchDistribution",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchFieldLevelEncryptionConfig",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchFieldLevelEncryptionProfile",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchFunctionExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchFunctionExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchInvalidationResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchInvalidation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchOriginResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchOrigin",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchOriginRequestPolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchOriginRequestPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchPublicKeyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchPublicKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchRealtimeLogConfigResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchRealtimeLogConfig",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchResourceResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchResource",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlNoSuchStreamingDistributionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NoSuchStreamingDistribution",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "OriginRequestPolicyAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlOriginRequestPolicyInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "OriginRequestPolicyInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlPreconditionFailedResponse = async (parsedOutput, context) => {
  const contents = {
    name: "PreconditionFailed",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlPublicKeyAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "PublicKeyAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlPublicKeyInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "PublicKeyInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlQueryArgProfileEmptyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "QueryArgProfileEmpty",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "RealtimeLogConfigAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlRealtimeLogConfigInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "RealtimeLogConfigInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse = async (parsedOutput, context) => {
  const contents = {
    name: "RealtimeLogConfigOwnerMismatch",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlResourceInUseResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "StreamingDistributionAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlStreamingDistributionNotDisabledResponse = async (parsedOutput, context) => {
  const contents = {
    name: "StreamingDistributionNotDisabled",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTestFunctionFailedResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TestFunctionFailed",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCacheBehaviorsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCacheBehaviors",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCachePoliciesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCachePolicies",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCertificatesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCertificates",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCloudFrontOriginAccessIdentities",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCookieNamesInWhiteList",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCookiesInCachePolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCookiesInCachePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyCookiesInOriginRequestPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionCNAMEsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionCNAMEs",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributions",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionsAssociatedToCachePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse = async (
  parsedOutput,
  context
) => {
  const contents = {
    name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionsAssociatedToKeyGroup",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse = async (
  parsedOutput,
  context
) => {
  const contents = {
    name: "TooManyDistributionsAssociatedToOriginRequestPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionsWithFunctionAssociations",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionsWithLambdaAssociations",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyDistributionsWithSingleFunctionARN",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionConfigs",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionContentTypeProfiles",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionEncryptionEntities",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionFieldPatterns",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionProfiles",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFieldLevelEncryptionQueryArgProfiles",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFunctionAssociationsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFunctionAssociations",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyFunctionsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyFunctions",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyHeadersInCachePolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyHeadersInCachePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyHeadersInForwardedValues",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyHeadersInOriginRequestPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyInvalidationsInProgressResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyInvalidationsInProgress",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyKeyGroupsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyKeyGroups",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyKeyGroupsAssociatedToDistribution",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyLambdaFunctionAssociations",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyOriginCustomHeadersResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyOriginCustomHeaders",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyOriginGroupsPerDistribution",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyOriginRequestPoliciesResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyOriginRequestPolicies",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyOriginsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyOrigins",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyPublicKeysResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyPublicKeys",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyPublicKeysInKeyGroup",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyQueryStringParametersResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyQueryStringParameters",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyQueryStringsInCachePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyQueryStringsInOriginRequestPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyRealtimeLogConfigsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyRealtimeLogConfigs",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyStreamingDistributionCNAMEs",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyStreamingDistributionsResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyStreamingDistributions",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTooManyTrustedSignersResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyTrustedSigners",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TrustedKeyGroupDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlTrustedSignerDoesNotExistResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TrustedSignerDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const deserializeAws_restXmlUnsupportedOperationResponse = async (parsedOutput, context) => {
  const contents = {
    name: "UnsupportedOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};
const serializeAws_restXmlAliases = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Aliases");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAliasList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlAliasList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("CNAME");
    });
};
const serializeAws_restXmlAllowedMethods = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("AllowedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlMethodsList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.CachedMethods !== undefined && input.CachedMethods !== null) {
    const node = serializeAws_restXmlCachedMethods(input.CachedMethods, context).withName("CachedMethods");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlAwsAccountNumberList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("AwsAccountNumber");
    });
};
const serializeAws_restXmlCacheBehavior = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CacheBehavior");
  if (input.PathPattern !== undefined && input.PathPattern !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.PathPattern))
      .withName("PathPattern");
    bodyNode.addChildNode(node);
  }
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.TargetOriginId))
      .withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    const node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    const node = new xml_builder_1.XmlNode("ViewerProtocolPolicy")
      .addChildNode(new xml_builder_1.XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    const node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Compress)))
      .withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    const node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    const node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CachePolicyId))
      .withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    const node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MinTTL)))
      .withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.DefaultTTL)))
      .withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MaxTTL)))
      .withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCacheBehaviorList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlCacheBehavior(entry, context);
      return node.withName("CacheBehavior");
    });
};
const serializeAws_restXmlCacheBehaviors = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CacheBehaviors");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCacheBehaviorList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCachedMethods = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CachedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlMethodsList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCachePolicyConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CachePolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.DefaultTTL)))
      .withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MaxTTL)))
      .withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MinTTL)))
      .withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (
    input.ParametersInCacheKeyAndForwardedToOrigin !== undefined &&
    input.ParametersInCacheKeyAndForwardedToOrigin !== null
  ) {
    const node = serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin(
      input.ParametersInCacheKeyAndForwardedToOrigin,
      context
    ).withName("ParametersInCacheKeyAndForwardedToOrigin");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCachePolicyCookiesConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CachePolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    const node = new xml_builder_1.XmlNode("CachePolicyCookieBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCachePolicyHeadersConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CachePolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    const node = new xml_builder_1.XmlNode("CachePolicyHeaderBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCachePolicyQueryStringsConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CachePolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    const node = new xml_builder_1.XmlNode("CachePolicyQueryStringBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    const node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CloudFrontOriginAccessIdentityConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlContentTypeProfile = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfile");
  if (input.Format !== undefined && input.Format !== null) {
    const node = new xml_builder_1.XmlNode("Format")
      .addChildNode(new xml_builder_1.XmlText(input.Format))
      .withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ProfileId))
      .withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined && input.ContentType !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ContentType))
      .withName("ContentType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlContentTypeProfileConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfileConfig");
  if (input.ForwardWhenContentTypeIsUnknown !== undefined && input.ForwardWhenContentTypeIsUnknown !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.ForwardWhenContentTypeIsUnknown)))
      .withName("ForwardWhenContentTypeIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfiles !== undefined && input.ContentTypeProfiles !== null) {
    const node = serializeAws_restXmlContentTypeProfiles(input.ContentTypeProfiles, context).withName(
      "ContentTypeProfiles"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlContentTypeProfileList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlContentTypeProfile(entry, context);
      return node.withName("ContentTypeProfile");
    });
};
const serializeAws_restXmlContentTypeProfiles = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlContentTypeProfileList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCookieNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Name");
    });
};
const serializeAws_restXmlCookieNames = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CookieNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCookieNameList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCookiePreference = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CookiePreference");
  if (input.Forward !== undefined && input.Forward !== null) {
    const node = new xml_builder_1.XmlNode("ItemSelection")
      .addChildNode(new xml_builder_1.XmlText(input.Forward))
      .withName("Forward");
    bodyNode.addChildNode(node);
  }
  if (input.WhitelistedNames !== undefined && input.WhitelistedNames !== null) {
    const node = serializeAws_restXmlCookieNames(input.WhitelistedNames, context).withName("WhitelistedNames");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCustomErrorResponse = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponse");
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.ErrorCode)))
      .withName("ErrorCode");
    bodyNode.addChildNode(node);
  }
  if (input.ResponsePagePath !== undefined && input.ResponsePagePath !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ResponsePagePath))
      .withName("ResponsePagePath");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseCode !== undefined && input.ResponseCode !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ResponseCode))
      .withName("ResponseCode");
    bodyNode.addChildNode(node);
  }
  if (input.ErrorCachingMinTTL !== undefined && input.ErrorCachingMinTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.ErrorCachingMinTTL)))
      .withName("ErrorCachingMinTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlCustomErrorResponseList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlCustomErrorResponse(entry, context);
      return node.withName("CustomErrorResponse");
    });
};
const serializeAws_restXmlCustomErrorResponses = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponses");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCustomErrorResponseList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCustomHeaders = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CustomHeaders");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginCustomHeadersList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlCustomOriginConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("CustomOriginConfig");
  if (input.HTTPPort !== undefined && input.HTTPPort !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.HTTPPort)))
      .withName("HTTPPort");
    bodyNode.addChildNode(node);
  }
  if (input.HTTPSPort !== undefined && input.HTTPSPort !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.HTTPSPort)))
      .withName("HTTPSPort");
    bodyNode.addChildNode(node);
  }
  if (input.OriginProtocolPolicy !== undefined && input.OriginProtocolPolicy !== null) {
    const node = new xml_builder_1.XmlNode("OriginProtocolPolicy")
      .addChildNode(new xml_builder_1.XmlText(input.OriginProtocolPolicy))
      .withName("OriginProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.OriginSslProtocols !== undefined && input.OriginSslProtocols !== null) {
    const node = serializeAws_restXmlOriginSslProtocols(input.OriginSslProtocols, context).withName(
      "OriginSslProtocols"
    );
    bodyNode.addChildNode(node);
  }
  if (input.OriginReadTimeout !== undefined && input.OriginReadTimeout !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.OriginReadTimeout)))
      .withName("OriginReadTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginKeepaliveTimeout !== undefined && input.OriginKeepaliveTimeout !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.OriginKeepaliveTimeout)))
      .withName("OriginKeepaliveTimeout");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlDefaultCacheBehavior = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("DefaultCacheBehavior");
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.TargetOriginId))
      .withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    const node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    const node = new xml_builder_1.XmlNode("ViewerProtocolPolicy")
      .addChildNode(new xml_builder_1.XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    const node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Compress)))
      .withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    const node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    const node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CachePolicyId))
      .withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    const node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MinTTL)))
      .withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.DefaultTTL)))
      .withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new xml_builder_1.XmlNode("long")
      .addChildNode(new xml_builder_1.XmlText(String(input.MaxTTL)))
      .withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlDistributionConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("DistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    const node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultRootObject !== undefined && input.DefaultRootObject !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.DefaultRootObject))
      .withName("DefaultRootObject");
    bodyNode.addChildNode(node);
  }
  if (input.Origins !== undefined && input.Origins !== null) {
    const node = serializeAws_restXmlOrigins(input.Origins, context).withName("Origins");
    bodyNode.addChildNode(node);
  }
  if (input.OriginGroups !== undefined && input.OriginGroups !== null) {
    const node = serializeAws_restXmlOriginGroups(input.OriginGroups, context).withName("OriginGroups");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultCacheBehavior !== undefined && input.DefaultCacheBehavior !== null) {
    const node = serializeAws_restXmlDefaultCacheBehavior(input.DefaultCacheBehavior, context).withName(
      "DefaultCacheBehavior"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CacheBehaviors !== undefined && input.CacheBehaviors !== null) {
    const node = serializeAws_restXmlCacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors");
    bodyNode.addChildNode(node);
  }
  if (input.CustomErrorResponses !== undefined && input.CustomErrorResponses !== null) {
    const node = serializeAws_restXmlCustomErrorResponses(input.CustomErrorResponses, context).withName(
      "CustomErrorResponses"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("CommentType")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    const node = serializeAws_restXmlLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    const node = new xml_builder_1.XmlNode("PriceClass")
      .addChildNode(new xml_builder_1.XmlText(input.PriceClass))
      .withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerCertificate !== undefined && input.ViewerCertificate !== null) {
    const node = serializeAws_restXmlViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.Restrictions !== undefined && input.Restrictions !== null) {
    const node = serializeAws_restXmlRestrictions(input.Restrictions, context).withName("Restrictions");
    bodyNode.addChildNode(node);
  }
  if (input.WebACLId !== undefined && input.WebACLId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.WebACLId))
      .withName("WebACLId");
    bodyNode.addChildNode(node);
  }
  if (input.HttpVersion !== undefined && input.HttpVersion !== null) {
    const node = new xml_builder_1.XmlNode("HttpVersion")
      .addChildNode(new xml_builder_1.XmlText(input.HttpVersion))
      .withName("HttpVersion");
    bodyNode.addChildNode(node);
  }
  if (input.IsIPV6Enabled !== undefined && input.IsIPV6Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.IsIPV6Enabled)))
      .withName("IsIPV6Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlDistributionConfigWithTags = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("DistributionConfigWithTags");
  if (input.DistributionConfig !== undefined && input.DistributionConfig !== null) {
    const node = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context).withName(
      "DistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlEncryptionEntities = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("EncryptionEntities");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlEncryptionEntityList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlEncryptionEntity = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("EncryptionEntity");
  if (input.PublicKeyId !== undefined && input.PublicKeyId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.PublicKeyId))
      .withName("PublicKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.ProviderId !== undefined && input.ProviderId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ProviderId))
      .withName("ProviderId");
    bodyNode.addChildNode(node);
  }
  if (input.FieldPatterns !== undefined && input.FieldPatterns !== null) {
    const node = serializeAws_restXmlFieldPatterns(input.FieldPatterns, context).withName("FieldPatterns");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlEncryptionEntityList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlEncryptionEntity(entry, context);
      return node.withName("EncryptionEntity");
    });
};
const serializeAws_restXmlEndPoint = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("EndPoint");
  if (input.StreamType !== undefined && input.StreamType !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.StreamType))
      .withName("StreamType");
    bodyNode.addChildNode(node);
  }
  if (input.KinesisStreamConfig !== undefined && input.KinesisStreamConfig !== null) {
    const node = serializeAws_restXmlKinesisStreamConfig(input.KinesisStreamConfig, context).withName(
      "KinesisStreamConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlEndPointList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlEndPoint(entry, context);
      return node.withName("member");
    });
};
const serializeAws_restXmlFieldLevelEncryptionConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfileConfig !== undefined && input.QueryArgProfileConfig !== null) {
    const node = serializeAws_restXmlQueryArgProfileConfig(input.QueryArgProfileConfig, context).withName(
      "QueryArgProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfileConfig !== undefined && input.ContentTypeProfileConfig !== null) {
    const node = serializeAws_restXmlContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName(
      "ContentTypeProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlFieldLevelEncryptionProfileConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionProfileConfig");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionEntities !== undefined && input.EncryptionEntities !== null) {
    const node = serializeAws_restXmlEncryptionEntities(input.EncryptionEntities, context).withName(
      "EncryptionEntities"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlFieldList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Field");
    });
};
const serializeAws_restXmlFieldPatternList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("FieldPattern");
    });
};
const serializeAws_restXmlFieldPatterns = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FieldPatterns");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlFieldPatternList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlForwardedValues = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ForwardedValues");
  if (input.QueryString !== undefined && input.QueryString !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.QueryString)))
      .withName("QueryString");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookiePreference(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringCacheKeys !== undefined && input.QueryStringCacheKeys !== null) {
    const node = serializeAws_restXmlQueryStringCacheKeys(input.QueryStringCacheKeys, context).withName(
      "QueryStringCacheKeys"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlFunctionAssociation = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FunctionAssociation");
  if (input.FunctionARN !== undefined && input.FunctionARN !== null) {
    const node = new xml_builder_1.XmlNode("FunctionARN")
      .addChildNode(new xml_builder_1.XmlText(input.FunctionARN))
      .withName("FunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    const node = new xml_builder_1.XmlNode("EventType")
      .addChildNode(new xml_builder_1.XmlText(input.EventType))
      .withName("EventType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlFunctionAssociationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlFunctionAssociation(entry, context);
      return node.withName("FunctionAssociation");
    });
};
const serializeAws_restXmlFunctionAssociations = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlFunctionAssociationList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlFunctionConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("FunctionConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Runtime !== undefined && input.Runtime !== null) {
    const node = new xml_builder_1.XmlNode("FunctionRuntime")
      .addChildNode(new xml_builder_1.XmlText(input.Runtime))
      .withName("Runtime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlGeoRestriction = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("GeoRestriction");
  if (input.RestrictionType !== undefined && input.RestrictionType !== null) {
    const node = new xml_builder_1.XmlNode("GeoRestrictionType")
      .addChildNode(new xml_builder_1.XmlText(input.RestrictionType))
      .withName("RestrictionType");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlLocationList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlHeaderList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Name");
    });
};
const serializeAws_restXmlHeaders = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Headers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlHeaderList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlInvalidationBatch = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("InvalidationBatch");
  if (input.Paths !== undefined && input.Paths !== null) {
    const node = serializeAws_restXmlPaths(input.Paths, context).withName("Paths");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlKeyGroupConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("KeyGroupConfig");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlPublicKeyIdList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlKinesisStreamConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("KinesisStreamConfig");
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.RoleARN))
      .withName("RoleARN");
    bodyNode.addChildNode(node);
  }
  if (input.StreamARN !== undefined && input.StreamARN !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.StreamARN))
      .withName("StreamARN");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlLambdaFunctionAssociation = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociation");
  if (input.LambdaFunctionARN !== undefined && input.LambdaFunctionARN !== null) {
    const node = new xml_builder_1.XmlNode("LambdaFunctionARN")
      .addChildNode(new xml_builder_1.XmlText(input.LambdaFunctionARN))
      .withName("LambdaFunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    const node = new xml_builder_1.XmlNode("EventType")
      .addChildNode(new xml_builder_1.XmlText(input.EventType))
      .withName("EventType");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeBody !== undefined && input.IncludeBody !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.IncludeBody)))
      .withName("IncludeBody");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlLambdaFunctionAssociationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlLambdaFunctionAssociation(entry, context);
      return node.withName("LambdaFunctionAssociation");
    });
};
const serializeAws_restXmlLambdaFunctionAssociations = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlLambdaFunctionAssociationList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlLocationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Location");
    });
};
const serializeAws_restXmlLoggingConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("LoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeCookies !== undefined && input.IncludeCookies !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.IncludeCookies)))
      .withName("IncludeCookies");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Bucket))
      .withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Prefix))
      .withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlMethodsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("Method").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Method");
    });
};
const serializeAws_restXmlMonitoringSubscription = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("MonitoringSubscription");
  if (input.RealtimeMetricsSubscriptionConfig !== undefined && input.RealtimeMetricsSubscriptionConfig !== null) {
    const node = serializeAws_restXmlRealtimeMetricsSubscriptionConfig(
      input.RealtimeMetricsSubscriptionConfig,
      context
    ).withName("RealtimeMetricsSubscriptionConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOrigin = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Origin");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.DomainName !== undefined && input.DomainName !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.DomainName))
      .withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginPath !== undefined && input.OriginPath !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginPath))
      .withName("OriginPath");
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeaders !== undefined && input.CustomHeaders !== null) {
    const node = serializeAws_restXmlCustomHeaders(input.CustomHeaders, context).withName("CustomHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.S3OriginConfig !== undefined && input.S3OriginConfig !== null) {
    const node = serializeAws_restXmlS3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CustomOriginConfig !== undefined && input.CustomOriginConfig !== null) {
    const node = serializeAws_restXmlCustomOriginConfig(input.CustomOriginConfig, context).withName(
      "CustomOriginConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionAttempts !== undefined && input.ConnectionAttempts !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.ConnectionAttempts)))
      .withName("ConnectionAttempts");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionTimeout !== undefined && input.ConnectionTimeout !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.ConnectionTimeout)))
      .withName("ConnectionTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShield !== undefined && input.OriginShield !== null) {
    const node = serializeAws_restXmlOriginShield(input.OriginShield, context).withName("OriginShield");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginCustomHeader = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginCustomHeader");
  if (input.HeaderName !== undefined && input.HeaderName !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.HeaderName))
      .withName("HeaderName");
    bodyNode.addChildNode(node);
  }
  if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.HeaderValue))
      .withName("HeaderValue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginCustomHeadersList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlOriginCustomHeader(entry, context);
      return node.withName("OriginCustomHeader");
    });
};
const serializeAws_restXmlOriginGroup = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginGroup");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.FailoverCriteria !== undefined && input.FailoverCriteria !== null) {
    const node = serializeAws_restXmlOriginGroupFailoverCriteria(input.FailoverCriteria, context).withName(
      "FailoverCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Members !== undefined && input.Members !== null) {
    const node = serializeAws_restXmlOriginGroupMembers(input.Members, context).withName("Members");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginGroupFailoverCriteria = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginGroupFailoverCriteria");
  if (input.StatusCodes !== undefined && input.StatusCodes !== null) {
    const node = serializeAws_restXmlStatusCodes(input.StatusCodes, context).withName("StatusCodes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginGroupList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlOriginGroup(entry, context);
      return node.withName("OriginGroup");
    });
};
const serializeAws_restXmlOriginGroupMember = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginGroupMember");
  if (input.OriginId !== undefined && input.OriginId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginId))
      .withName("OriginId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginGroupMemberList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlOriginGroupMember(entry, context);
      return node.withName("OriginGroupMember");
    });
};
const serializeAws_restXmlOriginGroupMembers = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginGroupMembers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginGroupMemberList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginGroups = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginGroups");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginGroupList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlOrigin(entry, context);
      return node.withName("Origin");
    });
};
const serializeAws_restXmlOriginRequestPolicyConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyHeadersConfig(input.HeadersConfig, context).withName(
      "HeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyCookiesConfig(input.CookiesConfig, context).withName(
      "CookiesConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginRequestPolicyCookiesConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    const node = new xml_builder_1.XmlNode("OriginRequestPolicyCookieBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginRequestPolicyHeadersConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    const node = new xml_builder_1.XmlNode("OriginRequestPolicyHeaderBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginRequestPolicyQueryStringsConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    const node = new xml_builder_1.XmlNode("OriginRequestPolicyQueryStringBehavior")
      .addChildNode(new xml_builder_1.XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    const node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOrigins = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Origins");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginShield = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginShield");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShieldRegion !== undefined && input.OriginShieldRegion !== null) {
    const node = new xml_builder_1.XmlNode("OriginShieldRegion")
      .addChildNode(new xml_builder_1.XmlText(input.OriginShieldRegion))
      .withName("OriginShieldRegion");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlOriginSslProtocols = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("OriginSslProtocols");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlSslProtocolsList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ParametersInCacheKeyAndForwardedToOrigin");
  if (input.EnableAcceptEncodingGzip !== undefined && input.EnableAcceptEncodingGzip !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.EnableAcceptEncodingGzip)))
      .withName("EnableAcceptEncodingGzip");
    bodyNode.addChildNode(node);
  }
  if (input.EnableAcceptEncodingBrotli !== undefined && input.EnableAcceptEncodingBrotli !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.EnableAcceptEncodingBrotli)))
      .withName("EnableAcceptEncodingBrotli");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    const node = serializeAws_restXmlCachePolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    const node = serializeAws_restXmlCachePolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    const node = serializeAws_restXmlCachePolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlPathList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Path");
    });
};
const serializeAws_restXmlPaths = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Paths");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlPathList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlPublicKeyConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("PublicKeyConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Name))
      .withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.EncodedKey !== undefined && input.EncodedKey !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.EncodedKey))
      .withName("EncodedKey");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlPublicKeyIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("PublicKey");
    });
};
const serializeAws_restXmlQueryArgProfile = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("QueryArgProfile");
  if (input.QueryArg !== undefined && input.QueryArg !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.QueryArg))
      .withName("QueryArg");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ProfileId))
      .withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlQueryArgProfileConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("QueryArgProfileConfig");
  if (input.ForwardWhenQueryArgProfileIsUnknown !== undefined && input.ForwardWhenQueryArgProfileIsUnknown !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.ForwardWhenQueryArgProfileIsUnknown)))
      .withName("ForwardWhenQueryArgProfileIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfiles !== undefined && input.QueryArgProfiles !== null) {
    const node = serializeAws_restXmlQueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlQueryArgProfileList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlQueryArgProfile(entry, context);
      return node.withName("QueryArgProfile");
    });
};
const serializeAws_restXmlQueryArgProfiles = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("QueryArgProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryArgProfileList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlQueryStringCacheKeys = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("QueryStringCacheKeys");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryStringCacheKeysList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlQueryStringCacheKeysList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Name");
    });
};
const serializeAws_restXmlQueryStringNames = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("QueryStringNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryStringNamesList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlQueryStringNamesList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Name");
    });
};
const serializeAws_restXmlRealtimeMetricsSubscriptionConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("RealtimeMetricsSubscriptionConfig");
  if (input.RealtimeMetricsSubscriptionStatus !== undefined && input.RealtimeMetricsSubscriptionStatus !== null) {
    const node = new xml_builder_1.XmlNode("RealtimeMetricsSubscriptionStatus")
      .addChildNode(new xml_builder_1.XmlText(input.RealtimeMetricsSubscriptionStatus))
      .withName("RealtimeMetricsSubscriptionStatus");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlRestrictions = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Restrictions");
  if (input.GeoRestriction !== undefined && input.GeoRestriction !== null) {
    const node = serializeAws_restXmlGeoRestriction(input.GeoRestriction, context).withName("GeoRestriction");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlS3Origin = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("S3Origin");
  if (input.DomainName !== undefined && input.DomainName !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.DomainName))
      .withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlS3OriginConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("S3OriginConfig");
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlSslProtocolsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("SslProtocol").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("SslProtocol");
    });
};
const serializeAws_restXmlStatusCodeList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("integer").addChildNode(new xml_builder_1.XmlText(String(entry)));
      return node.withName("StatusCode");
    });
};
const serializeAws_restXmlStatusCodes = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("StatusCodes");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlStatusCodeList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlStreamingDistributionConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
      .withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.S3Origin !== undefined && input.S3Origin !== null) {
    const node = serializeAws_restXmlS3Origin(input.S3Origin, context).withName("S3Origin");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    const node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Comment))
      .withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    const node = serializeAws_restXmlStreamingLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    const node = new xml_builder_1.XmlNode("PriceClass")
      .addChildNode(new xml_builder_1.XmlText(input.PriceClass))
      .withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlStreamingDistributionConfigWithTags = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfigWithTags");
  if (input.StreamingDistributionConfig !== undefined && input.StreamingDistributionConfig !== null) {
    const node = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context).withName(
      "StreamingDistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlStreamingLoggingConfig = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("StreamingLoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Bucket))
      .withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Prefix))
      .withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlTag = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Tag");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new xml_builder_1.XmlNode("TagKey").addChildNode(new xml_builder_1.XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new xml_builder_1.XmlNode("TagValue")
      .addChildNode(new xml_builder_1.XmlText(input.Value))
      .withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const serializeAws_restXmlTagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("TagKey").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("Key");
    });
};
const serializeAws_restXmlTagKeys = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("TagKeys");
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTagKeyList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlTagList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};
const serializeAws_restXmlTags = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("Tags");
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTagList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlTrustedKeyGroupIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      const node = new xml_builder_1.XmlNode("string").addChildNode(new xml_builder_1.XmlText(entry));
      return node.withName("KeyGroup");
    });
};
const serializeAws_restXmlTrustedKeyGroups = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("TrustedKeyGroups");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTrustedKeyGroupIdList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlTrustedSigners = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("TrustedSigners");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new xml_builder_1.XmlNode("integer")
      .addChildNode(new xml_builder_1.XmlText(String(input.Quantity)))
      .withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAwsAccountNumberList(input.Items, context);
    const containerNode = new xml_builder_1.XmlNode("Items");
    nodes.map((node) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};
const serializeAws_restXmlViewerCertificate = (input, context) => {
  const bodyNode = new xml_builder_1.XmlNode("ViewerCertificate");
  if (input.CloudFrontDefaultCertificate !== undefined && input.CloudFrontDefaultCertificate !== null) {
    const node = new xml_builder_1.XmlNode("boolean")
      .addChildNode(new xml_builder_1.XmlText(String(input.CloudFrontDefaultCertificate)))
      .withName("CloudFrontDefaultCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.IAMCertificateId !== undefined && input.IAMCertificateId !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.IAMCertificateId))
      .withName("IAMCertificateId");
    bodyNode.addChildNode(node);
  }
  if (input.ACMCertificateArn !== undefined && input.ACMCertificateArn !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.ACMCertificateArn))
      .withName("ACMCertificateArn");
    bodyNode.addChildNode(node);
  }
  if (input.SSLSupportMethod !== undefined && input.SSLSupportMethod !== null) {
    const node = new xml_builder_1.XmlNode("SSLSupportMethod")
      .addChildNode(new xml_builder_1.XmlText(input.SSLSupportMethod))
      .withName("SSLSupportMethod");
    bodyNode.addChildNode(node);
  }
  if (input.MinimumProtocolVersion !== undefined && input.MinimumProtocolVersion !== null) {
    const node = new xml_builder_1.XmlNode("MinimumProtocolVersion")
      .addChildNode(new xml_builder_1.XmlText(input.MinimumProtocolVersion))
      .withName("MinimumProtocolVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Certificate !== undefined && input.Certificate !== null) {
    const node = new xml_builder_1.XmlNode("string")
      .addChildNode(new xml_builder_1.XmlText(input.Certificate))
      .withName("Certificate");
    bodyNode.addChildNode(node);
  }
  if (input.CertificateSource !== undefined && input.CertificateSource !== null) {
    const node = new xml_builder_1.XmlNode("CertificateSource")
      .addChildNode(new xml_builder_1.XmlText(input.CertificateSource))
      .withName("CertificateSource");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};
const deserializeAws_restXmlActiveTrustedKeyGroups = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlActiveTrustedSigners = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlSignerList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Signer"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlAliases = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlAliasList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["CNAME"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlAliasICPRecordal = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlAliasICPRecordals = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlAliasICPRecordal(entry, context);
    });
};
const deserializeAws_restXmlAliasList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlAllowedMethods = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlMethodsList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Method"]),
      context
    );
  }
  if (output["CachedMethods"] !== undefined) {
    contents.CachedMethods = deserializeAws_restXmlCachedMethods(output["CachedMethods"], context);
  }
  return contents;
};
const deserializeAws_restXmlAwsAccountNumberList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlCacheBehavior = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCacheBehaviorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCacheBehavior(entry, context);
    });
};
const deserializeAws_restXmlCacheBehaviors = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["CacheBehavior"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCachedMethods = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlMethodsList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Method"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCachePolicy = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicyConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicyCookiesConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicyHeadersConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicyList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["CachePolicySummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCachePolicyQueryStringsConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicySummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCachePolicySummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCachePolicySummary(entry, context);
    });
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentity = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCloudFrontOriginAccessIdentityList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["CloudFrontOriginAccessIdentitySummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary(entry, context);
    });
};
const deserializeAws_restXmlContentTypeProfile = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlContentTypeProfileConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlContentTypeProfileList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlContentTypeProfile(entry, context);
    });
};
const deserializeAws_restXmlContentTypeProfiles = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["ContentTypeProfile"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCookieNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlCookieNames = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlCookieNameList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCookiePreference = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCustomErrorResponse = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlCustomErrorResponseList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlCustomErrorResponse(entry, context);
    });
};
const deserializeAws_restXmlCustomErrorResponses = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["CustomErrorResponse"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCustomHeaders = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["OriginCustomHeader"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlCustomOriginConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlDefaultCacheBehavior = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlDistribution = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlDistributionConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlDistributionIdList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["DistributionId"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlDistributionIdListSummary = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlDistributionList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["DistributionSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlDistributionSummary = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlDistributionSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlDistributionSummary(entry, context);
    });
};
const deserializeAws_restXmlEncryptionEntities = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["EncryptionEntity"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlEncryptionEntity = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlEncryptionEntityList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlEncryptionEntity(entry, context);
    });
};
const deserializeAws_restXmlEndPoint = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlEndPointList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlEndPoint(entry, context);
    });
};
const deserializeAws_restXmlFieldLevelEncryption = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfile = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionProfileConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionProfileList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionProfileSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlFieldLevelEncryptionProfileSummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFieldLevelEncryptionProfileSummary(entry, context);
    });
};
const deserializeAws_restXmlFieldLevelEncryptionSummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFieldLevelEncryptionSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFieldLevelEncryptionSummary(entry, context);
    });
};
const deserializeAws_restXmlFieldList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlFieldPatternList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlFieldPatterns = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["FieldPattern"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlForwardedValues = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFunctionAssociation = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFunctionAssociationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFunctionAssociation(entry, context);
    });
};
const deserializeAws_restXmlFunctionAssociations = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["FunctionAssociation"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlFunctionConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFunctionExecutionLogList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlFunctionList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["FunctionSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlFunctionMetadata = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFunctionSummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlFunctionSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlFunctionSummary(entry, context);
    });
};
const deserializeAws_restXmlGeoRestriction = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlLocationList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Location"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlHeaderList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlHeaders = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlHeaderList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlInvalidation = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlInvalidationBatch = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlInvalidationList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["InvalidationSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlInvalidationSummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlInvalidationSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlInvalidationSummary(entry, context);
    });
};
const deserializeAws_restXmlKeyGroup = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlKeyGroupConfig = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["PublicKey"]),
      context
    );
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};
const deserializeAws_restXmlKeyGroupList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["KeyGroupSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlKeyGroupSummary = (output, context) => {
  let contents = {
    KeyGroup: undefined,
  };
  if (output["KeyGroup"] !== undefined) {
    contents.KeyGroup = deserializeAws_restXmlKeyGroup(output["KeyGroup"], context);
  }
  return contents;
};
const deserializeAws_restXmlKeyGroupSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlKeyGroupSummary(entry, context);
    });
};
const deserializeAws_restXmlKeyPairIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlKeyPairIds = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlKeyPairIdList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["KeyPairId"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlKGKeyPairIds = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlKGKeyPairIdsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlKGKeyPairIds(entry, context);
    });
};
const deserializeAws_restXmlKinesisStreamConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlLambdaFunctionAssociation = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlLambdaFunctionAssociationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlLambdaFunctionAssociation(entry, context);
    });
};
const deserializeAws_restXmlLambdaFunctionAssociations = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["LambdaFunctionAssociation"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlLocationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlLoggingConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlMethodsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlMonitoringSubscription = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOrigin = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginCustomHeader = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginCustomHeadersList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginCustomHeader(entry, context);
    });
};
const deserializeAws_restXmlOriginGroup = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginGroupFailoverCriteria = (output, context) => {
  let contents = {
    StatusCodes: undefined,
  };
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = deserializeAws_restXmlStatusCodes(output["StatusCodes"], context);
  }
  return contents;
};
const deserializeAws_restXmlOriginGroupList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginGroup(entry, context);
    });
};
const deserializeAws_restXmlOriginGroupMember = (output, context) => {
  let contents = {
    OriginId: undefined,
  };
  if (output["OriginId"] !== undefined) {
    contents.OriginId = output["OriginId"];
  }
  return contents;
};
const deserializeAws_restXmlOriginGroupMemberList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginGroupMember(entry, context);
    });
};
const deserializeAws_restXmlOriginGroupMembers = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["OriginGroupMember"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlOriginGroups = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["OriginGroup"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlOriginList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOrigin(entry, context);
    });
};
const deserializeAws_restXmlOriginRequestPolicy = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicyConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicyCookiesConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicyHeadersConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicyList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["OriginRequestPolicySummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicySummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginRequestPolicySummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlOriginRequestPolicySummary(entry, context);
    });
};
const deserializeAws_restXmlOrigins = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlOriginList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Origin"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlOriginShield = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlOriginSslProtocols = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["SslProtocol"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlPathList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlPaths = (output, context) => {
  let contents = {
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
    contents.Items = deserializeAws_restXmlPathList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Path"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlPublicKey = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlPublicKeyConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlPublicKeyIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlPublicKeyList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["PublicKeySummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlPublicKeySummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlPublicKeySummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlPublicKeySummary(entry, context);
    });
};
const deserializeAws_restXmlQueryArgProfile = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlQueryArgProfileConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlQueryArgProfileList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlQueryArgProfile(entry, context);
    });
};
const deserializeAws_restXmlQueryArgProfiles = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["QueryArgProfile"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlQueryStringCacheKeys = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlQueryStringCacheKeysList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlQueryStringNames = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlQueryStringNamesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlRealtimeLogConfig = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["EndPoints"]["member"]),
      context
    );
  }
  if (output.Fields === "") {
    contents.Fields = [];
  }
  if (output["Fields"] !== undefined && output["Fields"]["Field"] !== undefined) {
    contents.Fields = deserializeAws_restXmlFieldList(
      smithy_client_1.getArrayIfSingleItem(output["Fields"]["Field"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlRealtimeLogConfigList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlRealtimeLogConfig(entry, context);
    });
};
const deserializeAws_restXmlRealtimeLogConfigs = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["member"]),
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
const deserializeAws_restXmlRealtimeMetricsSubscriptionConfig = (output, context) => {
  let contents = {
    RealtimeMetricsSubscriptionStatus: undefined,
  };
  if (output["RealtimeMetricsSubscriptionStatus"] !== undefined) {
    contents.RealtimeMetricsSubscriptionStatus = output["RealtimeMetricsSubscriptionStatus"];
  }
  return contents;
};
const deserializeAws_restXmlRestrictions = (output, context) => {
  let contents = {
    GeoRestriction: undefined,
  };
  if (output["GeoRestriction"] !== undefined) {
    contents.GeoRestriction = deserializeAws_restXmlGeoRestriction(output["GeoRestriction"], context);
  }
  return contents;
};
const deserializeAws_restXmlS3Origin = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlS3OriginConfig = (output, context) => {
  let contents = {
    OriginAccessIdentity: undefined,
  };
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = output["OriginAccessIdentity"];
  }
  return contents;
};
const deserializeAws_restXmlSigner = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlSignerList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlSigner(entry, context);
    });
};
const deserializeAws_restXmlSslProtocolsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlStatusCodeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return parseInt(entry);
    });
};
const deserializeAws_restXmlStatusCodes = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["StatusCode"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlStreamingDistribution = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlStreamingDistributionConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlStreamingDistributionList = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["StreamingDistributionSummary"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlStreamingDistributionSummary = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlStreamingDistributionSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlStreamingDistributionSummary(entry, context);
    });
};
const deserializeAws_restXmlStreamingLoggingConfig = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlTag = (output, context) => {
  let contents = {
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
const deserializeAws_restXmlTagList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restXmlTag(entry, context);
    });
};
const deserializeAws_restXmlTags = (output, context) => {
  let contents = {
    Items: undefined,
  };
  if (output.Items === "") {
    contents.Items = [];
  }
  if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
    contents.Items = deserializeAws_restXmlTagList(
      smithy_client_1.getArrayIfSingleItem(output["Items"]["Tag"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlTestResult = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["FunctionExecutionLogs"]["member"]),
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
const deserializeAws_restXmlTrustedKeyGroupIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restXmlTrustedKeyGroups = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlTrustedSigners = (output, context) => {
  let contents = {
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
      smithy_client_1.getArrayIfSingleItem(output["Items"]["AwsAccountNumber"]),
      context
    );
  }
  return contents;
};
const deserializeAws_restXmlViewerCertificate = (output, context) => {
  let contents = {
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
      const parsedObj = fast_xml_parser_1.parse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });
const loadRestXmlErrorCode = (output, data) => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
//# sourceMappingURL=Aws_restXml.js.map
