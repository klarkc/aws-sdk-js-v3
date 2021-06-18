"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartPolicyGenerationCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListPolicyGenerationsCommand =
  exports.deserializeAws_restJson1ListFindingsCommand =
  exports.deserializeAws_restJson1ListArchiveRulesCommand =
  exports.deserializeAws_restJson1ListAnalyzersCommand =
  exports.deserializeAws_restJson1ListAnalyzedResourcesCommand =
  exports.deserializeAws_restJson1ListAccessPreviewsCommand =
  exports.deserializeAws_restJson1ListAccessPreviewFindingsCommand =
  exports.deserializeAws_restJson1GetGeneratedPolicyCommand =
  exports.deserializeAws_restJson1GetFindingCommand =
  exports.deserializeAws_restJson1GetArchiveRuleCommand =
  exports.deserializeAws_restJson1GetAnalyzerCommand =
  exports.deserializeAws_restJson1GetAnalyzedResourceCommand =
  exports.deserializeAws_restJson1GetAccessPreviewCommand =
  exports.deserializeAws_restJson1DeleteArchiveRuleCommand =
  exports.deserializeAws_restJson1DeleteAnalyzerCommand =
  exports.deserializeAws_restJson1CreateArchiveRuleCommand =
  exports.deserializeAws_restJson1CreateAnalyzerCommand =
  exports.deserializeAws_restJson1CreateAccessPreviewCommand =
  exports.deserializeAws_restJson1CancelPolicyGenerationCommand =
  exports.deserializeAws_restJson1ApplyArchiveRuleCommand =
  exports.serializeAws_restJson1ValidatePolicyCommand =
  exports.serializeAws_restJson1UpdateFindingsCommand =
  exports.serializeAws_restJson1UpdateArchiveRuleCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1StartResourceScanCommand =
  exports.serializeAws_restJson1StartPolicyGenerationCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListPolicyGenerationsCommand =
  exports.serializeAws_restJson1ListFindingsCommand =
  exports.serializeAws_restJson1ListArchiveRulesCommand =
  exports.serializeAws_restJson1ListAnalyzersCommand =
  exports.serializeAws_restJson1ListAnalyzedResourcesCommand =
  exports.serializeAws_restJson1ListAccessPreviewsCommand =
  exports.serializeAws_restJson1ListAccessPreviewFindingsCommand =
  exports.serializeAws_restJson1GetGeneratedPolicyCommand =
  exports.serializeAws_restJson1GetFindingCommand =
  exports.serializeAws_restJson1GetArchiveRuleCommand =
  exports.serializeAws_restJson1GetAnalyzerCommand =
  exports.serializeAws_restJson1GetAnalyzedResourceCommand =
  exports.serializeAws_restJson1GetAccessPreviewCommand =
  exports.serializeAws_restJson1DeleteArchiveRuleCommand =
  exports.serializeAws_restJson1DeleteAnalyzerCommand =
  exports.serializeAws_restJson1CreateArchiveRuleCommand =
  exports.serializeAws_restJson1CreateAnalyzerCommand =
  exports.serializeAws_restJson1CreateAccessPreviewCommand =
  exports.serializeAws_restJson1CancelPolicyGenerationCommand =
  exports.serializeAws_restJson1ApplyArchiveRuleCommand =
    void 0;
exports.deserializeAws_restJson1ValidatePolicyCommand =
  exports.deserializeAws_restJson1UpdateFindingsCommand =
  exports.deserializeAws_restJson1UpdateArchiveRuleCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1StartResourceScanCommand =
    void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1ApplyArchiveRuleCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/archive-rule";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
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
exports.serializeAws_restJson1ApplyArchiveRuleCommand = serializeAws_restJson1ApplyArchiveRuleCommand;
const serializeAws_restJson1CancelPolicyGenerationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/policy/generation/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body;
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
exports.serializeAws_restJson1CancelPolicyGenerationCommand = serializeAws_restJson1CancelPolicyGenerationCommand;
const serializeAws_restJson1CreateAccessPreviewCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/access-preview";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.configurations !== undefined &&
      input.configurations !== null && {
        configurations: serializeAws_restJson1ConfigurationsMap(input.configurations, context),
      }),
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
exports.serializeAws_restJson1CreateAccessPreviewCommand = serializeAws_restJson1CreateAccessPreviewCommand;
const serializeAws_restJson1CreateAnalyzerCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/analyzer";
  let body;
  body = JSON.stringify({
    ...(input.analyzerName !== undefined && input.analyzerName !== null && { analyzerName: input.analyzerName }),
    ...(input.archiveRules !== undefined &&
      input.archiveRules !== null && {
        archiveRules: serializeAws_restJson1InlineArchiveRulesList(input.archiveRules, context),
      }),
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
exports.serializeAws_restJson1CreateAnalyzerCommand = serializeAws_restJson1CreateAnalyzerCommand;
const serializeAws_restJson1CreateArchiveRuleCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
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
exports.serializeAws_restJson1CreateArchiveRuleCommand = serializeAws_restJson1CreateArchiveRuleCommand;
const serializeAws_restJson1DeleteAnalyzerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
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
exports.serializeAws_restJson1DeleteAnalyzerCommand = serializeAws_restJson1DeleteAnalyzerCommand;
const serializeAws_restJson1DeleteArchiveRuleCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  const query = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
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
exports.serializeAws_restJson1DeleteArchiveRuleCommand = serializeAws_restJson1DeleteArchiveRuleCommand;
const serializeAws_restJson1GetAccessPreviewCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/access-preview/{accessPreviewId}";
  if (input.accessPreviewId !== undefined) {
    const labelValue = input.accessPreviewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPreviewId.");
    }
    resolvedPath = resolvedPath.replace("{accessPreviewId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPreviewId.");
  }
  const query = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
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
exports.serializeAws_restJson1GetAccessPreviewCommand = serializeAws_restJson1GetAccessPreviewCommand;
const serializeAws_restJson1GetAnalyzedResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzed-resource";
  const query = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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
exports.serializeAws_restJson1GetAnalyzedResourceCommand = serializeAws_restJson1GetAnalyzedResourceCommand;
const serializeAws_restJson1GetAnalyzerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
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
exports.serializeAws_restJson1GetAnalyzerCommand = serializeAws_restJson1GetAnalyzerCommand;
const serializeAws_restJson1GetArchiveRuleCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
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
exports.serializeAws_restJson1GetArchiveRuleCommand = serializeAws_restJson1GetArchiveRuleCommand;
const serializeAws_restJson1GetFindingCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/finding/{id}";
  if (input.id !== undefined) {
    const labelValue = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
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
exports.serializeAws_restJson1GetFindingCommand = serializeAws_restJson1GetFindingCommand;
const serializeAws_restJson1GetGeneratedPolicyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/policy/generation/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  const query = {
    ...(input.includeResourcePlaceholders !== undefined && {
      includeResourcePlaceholders: input.includeResourcePlaceholders.toString(),
    }),
    ...(input.includeServiceLevelTemplate !== undefined && {
      includeServiceLevelTemplate: input.includeServiceLevelTemplate.toString(),
    }),
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
exports.serializeAws_restJson1GetGeneratedPolicyCommand = serializeAws_restJson1GetGeneratedPolicyCommand;
const serializeAws_restJson1ListAccessPreviewFindingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/access-preview/{accessPreviewId}";
  if (input.accessPreviewId !== undefined) {
    const labelValue = input.accessPreviewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPreviewId.");
    }
    resolvedPath = resolvedPath.replace("{accessPreviewId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPreviewId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
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
exports.serializeAws_restJson1ListAccessPreviewFindingsCommand = serializeAws_restJson1ListAccessPreviewFindingsCommand;
const serializeAws_restJson1ListAccessPreviewsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/access-preview";
  const query = {
    ...(input.analyzerArn !== undefined && { analyzerArn: input.analyzerArn }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAccessPreviewsCommand = serializeAws_restJson1ListAccessPreviewsCommand;
const serializeAws_restJson1ListAnalyzedResourcesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/analyzed-resource";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
  });
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
exports.serializeAws_restJson1ListAnalyzedResourcesCommand = serializeAws_restJson1ListAnalyzedResourcesCommand;
const serializeAws_restJson1ListAnalyzersCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.type !== undefined && { type: input.type }),
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
exports.serializeAws_restJson1ListAnalyzersCommand = serializeAws_restJson1ListAnalyzersCommand;
const serializeAws_restJson1ListArchiveRulesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListArchiveRulesCommand = serializeAws_restJson1ListArchiveRulesCommand;
const serializeAws_restJson1ListFindingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/finding";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sort !== undefined &&
      input.sort !== null && { sort: serializeAws_restJson1SortCriteria(input.sort, context) }),
  });
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
exports.serializeAws_restJson1ListFindingsCommand = serializeAws_restJson1ListFindingsCommand;
const serializeAws_restJson1ListPolicyGenerationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/policy/generation";
  const query = {
    ...(input.principalArn !== undefined && { principalArn: input.principalArn }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListPolicyGenerationsCommand = serializeAws_restJson1ListPolicyGenerationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1StartPolicyGenerationCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/policy/generation";
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.cloudTrailDetails !== undefined &&
      input.cloudTrailDetails !== null && {
        cloudTrailDetails: serializeAws_restJson1CloudTrailDetails(input.cloudTrailDetails, context),
      }),
    ...(input.policyGenerationDetails !== undefined &&
      input.policyGenerationDetails !== null && {
        policyGenerationDetails: serializeAws_restJson1PolicyGenerationDetails(input.policyGenerationDetails, context),
      }),
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
exports.serializeAws_restJson1StartPolicyGenerationCommand = serializeAws_restJson1StartPolicyGenerationCommand;
const serializeAws_restJson1StartResourceScanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/resource/scan";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  });
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
exports.serializeAws_restJson1StartResourceScanCommand = serializeAws_restJson1StartResourceScanCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
  });
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateArchiveRuleCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analyzerName.");
    }
    resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
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
exports.serializeAws_restJson1UpdateArchiveRuleCommand = serializeAws_restJson1UpdateArchiveRuleCommand;
const serializeAws_restJson1UpdateFindingsCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/finding";
  let body;
  body = JSON.stringify({
    ...(input.analyzerArn !== undefined && input.analyzerArn !== null && { analyzerArn: input.analyzerArn }),
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.ids !== undefined &&
      input.ids !== null && { ids: serializeAws_restJson1FindingIdList(input.ids, context) }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1UpdateFindingsCommand = serializeAws_restJson1UpdateFindingsCommand;
const serializeAws_restJson1ValidatePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/policy/validation";
  const query = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body;
  body = JSON.stringify({
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.policyDocument !== undefined &&
      input.policyDocument !== null && { policyDocument: input.policyDocument }),
    ...(input.policyType !== undefined && input.policyType !== null && { policyType: input.policyType }),
  });
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
exports.serializeAws_restJson1ValidatePolicyCommand = serializeAws_restJson1ValidatePolicyCommand;
const deserializeAws_restJson1ApplyArchiveRuleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ApplyArchiveRuleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ApplyArchiveRuleCommand = deserializeAws_restJson1ApplyArchiveRuleCommand;
const deserializeAws_restJson1ApplyArchiveRuleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelPolicyGenerationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelPolicyGenerationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelPolicyGenerationCommand = deserializeAws_restJson1CancelPolicyGenerationCommand;
const deserializeAws_restJson1CancelPolicyGenerationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAccessPreviewCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessPreviewCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAccessPreviewCommand = deserializeAws_restJson1CreateAccessPreviewCommand;
const deserializeAws_restJson1CreateAccessPreviewCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAnalyzerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnalyzerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAnalyzerCommand = deserializeAws_restJson1CreateAnalyzerCommand;
const deserializeAws_restJson1CreateAnalyzerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateArchiveRuleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateArchiveRuleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateArchiveRuleCommand = deserializeAws_restJson1CreateArchiveRuleCommand;
const deserializeAws_restJson1CreateArchiveRuleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAnalyzerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnalyzerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAnalyzerCommand = deserializeAws_restJson1DeleteAnalyzerCommand;
const deserializeAws_restJson1DeleteAnalyzerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteArchiveRuleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteArchiveRuleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteArchiveRuleCommand = deserializeAws_restJson1DeleteArchiveRuleCommand;
const deserializeAws_restJson1DeleteArchiveRuleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAccessPreviewCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccessPreviewCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    accessPreview: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessPreview !== undefined && data.accessPreview !== null) {
    contents.accessPreview = deserializeAws_restJson1AccessPreview(data.accessPreview, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAccessPreviewCommand = deserializeAws_restJson1GetAccessPreviewCommand;
const deserializeAws_restJson1GetAccessPreviewCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAnalyzedResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzedResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    resource: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.resource !== undefined && data.resource !== null) {
    contents.resource = deserializeAws_restJson1AnalyzedResource(data.resource, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAnalyzedResourceCommand = deserializeAws_restJson1GetAnalyzedResourceCommand;
const deserializeAws_restJson1GetAnalyzedResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAnalyzerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnalyzerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    analyzer: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.analyzer !== undefined && data.analyzer !== null) {
    contents.analyzer = deserializeAws_restJson1AnalyzerSummary(data.analyzer, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAnalyzerCommand = deserializeAws_restJson1GetAnalyzerCommand;
const deserializeAws_restJson1GetAnalyzerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetArchiveRuleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetArchiveRuleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    archiveRule: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.archiveRule !== undefined && data.archiveRule !== null) {
    contents.archiveRule = deserializeAws_restJson1ArchiveRuleSummary(data.archiveRule, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetArchiveRuleCommand = deserializeAws_restJson1GetArchiveRuleCommand;
const deserializeAws_restJson1GetArchiveRuleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    finding: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.finding !== undefined && data.finding !== null) {
    contents.finding = deserializeAws_restJson1Finding(data.finding, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingCommand = deserializeAws_restJson1GetFindingCommand;
const deserializeAws_restJson1GetFindingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGeneratedPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeneratedPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    generatedPolicyResult: undefined,
    jobDetails: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.generatedPolicyResult !== undefined && data.generatedPolicyResult !== null) {
    contents.generatedPolicyResult = deserializeAws_restJson1GeneratedPolicyResult(data.generatedPolicyResult, context);
  }
  if (data.jobDetails !== undefined && data.jobDetails !== null) {
    contents.jobDetails = deserializeAws_restJson1JobDetails(data.jobDetails, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGeneratedPolicyCommand = deserializeAws_restJson1GetGeneratedPolicyCommand;
const deserializeAws_restJson1GetGeneratedPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAccessPreviewFindingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewFindingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    findings: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1AccessPreviewFindingsList(data.findings, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccessPreviewFindingsCommand =
  deserializeAws_restJson1ListAccessPreviewFindingsCommand;
const deserializeAws_restJson1ListAccessPreviewFindingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAccessPreviewsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPreviewsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    accessPreviews: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessPreviews !== undefined && data.accessPreviews !== null) {
    contents.accessPreviews = deserializeAws_restJson1AccessPreviewsList(data.accessPreviews, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccessPreviewsCommand = deserializeAws_restJson1ListAccessPreviewsCommand;
const deserializeAws_restJson1ListAccessPreviewsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAnalyzedResourcesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzedResourcesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    analyzedResources: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.analyzedResources !== undefined && data.analyzedResources !== null) {
    contents.analyzedResources = deserializeAws_restJson1AnalyzedResourcesList(data.analyzedResources, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnalyzedResourcesCommand = deserializeAws_restJson1ListAnalyzedResourcesCommand;
const deserializeAws_restJson1ListAnalyzedResourcesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAnalyzersCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalyzersCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    analyzers: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.analyzers !== undefined && data.analyzers !== null) {
    contents.analyzers = deserializeAws_restJson1AnalyzersList(data.analyzers, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnalyzersCommand = deserializeAws_restJson1ListAnalyzersCommand;
const deserializeAws_restJson1ListAnalyzersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListArchiveRulesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListArchiveRulesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    archiveRules: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.archiveRules !== undefined && data.archiveRules !== null) {
    contents.archiveRules = deserializeAws_restJson1ArchiveRulesList(data.archiveRules, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListArchiveRulesCommand = deserializeAws_restJson1ListArchiveRulesCommand;
const deserializeAws_restJson1ListArchiveRulesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFindingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    findings: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1FindingsList(data.findings, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFindingsCommand = deserializeAws_restJson1ListFindingsCommand;
const deserializeAws_restJson1ListFindingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPolicyGenerationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPolicyGenerationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    policyGenerations: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.policyGenerations !== undefined && data.policyGenerations !== null) {
    contents.policyGenerations = deserializeAws_restJson1PolicyGenerationList(data.policyGenerations, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPolicyGenerationsCommand = deserializeAws_restJson1ListPolicyGenerationsCommand;
const deserializeAws_restJson1ListPolicyGenerationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartPolicyGenerationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartPolicyGenerationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartPolicyGenerationCommand = deserializeAws_restJson1StartPolicyGenerationCommand;
const deserializeAws_restJson1StartPolicyGenerationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartResourceScanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartResourceScanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartResourceScanCommand = deserializeAws_restJson1StartResourceScanCommand;
const deserializeAws_restJson1StartResourceScanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateArchiveRuleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateArchiveRuleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateArchiveRuleCommand = deserializeAws_restJson1UpdateArchiveRuleCommand;
const deserializeAws_restJson1UpdateArchiveRuleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFindingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFindingsCommand = deserializeAws_restJson1UpdateFindingsCommand;
const deserializeAws_restJson1UpdateFindingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ValidatePolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidatePolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    findings: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1ValidatePolicyFindingList(data.findings, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ValidatePolicyCommand = deserializeAws_restJson1ValidatePolicyCommand;
const deserializeAws_restJson1ValidatePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "AccessDeniedException",
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
    resourceId: undefined,
    resourceType: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServerException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ThrottlingException",
    $fault: "client",
    $retryable: {
      throttling: true,
    },
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    fieldList: undefined,
    message: undefined,
    reason: undefined,
  };
  const data = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = data.reason;
  }
  return contents;
};
const serializeAws_restJson1AclGrantee = (input, context) => {
  return models_0_1.AclGrantee.visit(input, {
    id: (value) => ({ id: value }),
    uri: (value) => ({ uri: value }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1CloudTrailDetails = (input, context) => {
  return {
    ...(input.accessRole !== undefined && input.accessRole !== null && { accessRole: input.accessRole }),
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: input.endTime.toISOString().split(".")[0] + "Z" }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: input.startTime.toISOString().split(".")[0] + "Z" }),
    ...(input.trails !== undefined &&
      input.trails !== null && { trails: serializeAws_restJson1TrailList(input.trails, context) }),
  };
};
const serializeAws_restJson1Configuration = (input, context) => {
  return models_0_1.Configuration.visit(input, {
    iamRole: (value) => ({ iamRole: serializeAws_restJson1IamRoleConfiguration(value, context) }),
    kmsKey: (value) => ({ kmsKey: serializeAws_restJson1KmsKeyConfiguration(value, context) }),
    s3Bucket: (value) => ({ s3Bucket: serializeAws_restJson1S3BucketConfiguration(value, context) }),
    secretsManagerSecret: (value) => ({
      secretsManagerSecret: serializeAws_restJson1SecretsManagerSecretConfiguration(value, context),
    }),
    sqsQueue: (value) => ({ sqsQueue: serializeAws_restJson1SqsQueueConfiguration(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1ConfigurationsMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Configuration(value, context),
    };
  }, {});
};
const serializeAws_restJson1Criterion = (input, context) => {
  return {
    ...(input.contains !== undefined &&
      input.contains !== null && { contains: serializeAws_restJson1ValueList(input.contains, context) }),
    ...(input.eq !== undefined && input.eq !== null && { eq: serializeAws_restJson1ValueList(input.eq, context) }),
    ...(input.exists !== undefined && input.exists !== null && { exists: input.exists }),
    ...(input.neq !== undefined && input.neq !== null && { neq: serializeAws_restJson1ValueList(input.neq, context) }),
  };
};
const serializeAws_restJson1FilterCriteriaMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Criterion(value, context),
    };
  }, {});
};
const serializeAws_restJson1FindingIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1IamRoleConfiguration = (input, context) => {
  return {
    ...(input.trustPolicy !== undefined && input.trustPolicy !== null && { trustPolicy: input.trustPolicy }),
  };
};
const serializeAws_restJson1InlineArchiveRule = (input, context) => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1FilterCriteriaMap(input.filter, context) }),
    ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
  };
};
const serializeAws_restJson1InlineArchiveRulesList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1InlineArchiveRule(entry, context);
    });
};
const serializeAws_restJson1InternetConfiguration = (input, context) => {
  return {};
};
const serializeAws_restJson1KmsConstraintsMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1KmsGrantConfiguration = (input, context) => {
  return {
    ...(input.constraints !== undefined &&
      input.constraints !== null && {
        constraints: serializeAws_restJson1KmsGrantConstraints(input.constraints, context),
      }),
    ...(input.granteePrincipal !== undefined &&
      input.granteePrincipal !== null && { granteePrincipal: input.granteePrincipal }),
    ...(input.issuingAccount !== undefined &&
      input.issuingAccount !== null && { issuingAccount: input.issuingAccount }),
    ...(input.operations !== undefined &&
      input.operations !== null && {
        operations: serializeAws_restJson1KmsGrantOperationsList(input.operations, context),
      }),
    ...(input.retiringPrincipal !== undefined &&
      input.retiringPrincipal !== null && { retiringPrincipal: input.retiringPrincipal }),
  };
};
const serializeAws_restJson1KmsGrantConfigurationsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
};
const serializeAws_restJson1KmsGrantConstraints = (input, context) => {
  return {
    ...(input.encryptionContextEquals !== undefined &&
      input.encryptionContextEquals !== null && {
        encryptionContextEquals: serializeAws_restJson1KmsConstraintsMap(input.encryptionContextEquals, context),
      }),
    ...(input.encryptionContextSubset !== undefined &&
      input.encryptionContextSubset !== null && {
        encryptionContextSubset: serializeAws_restJson1KmsConstraintsMap(input.encryptionContextSubset, context),
      }),
  };
};
const serializeAws_restJson1KmsGrantOperationsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1KmsKeyConfiguration = (input, context) => {
  return {
    ...(input.grants !== undefined &&
      input.grants !== null && { grants: serializeAws_restJson1KmsGrantConfigurationsList(input.grants, context) }),
    ...(input.keyPolicies !== undefined &&
      input.keyPolicies !== null && {
        keyPolicies: serializeAws_restJson1KmsKeyPoliciesMap(input.keyPolicies, context),
      }),
  };
};
const serializeAws_restJson1KmsKeyPoliciesMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1NetworkOriginConfiguration = (input, context) => {
  return models_0_1.NetworkOriginConfiguration.visit(input, {
    internetConfiguration: (value) => ({
      internetConfiguration: serializeAws_restJson1InternetConfiguration(value, context),
    }),
    vpcConfiguration: (value) => ({ vpcConfiguration: serializeAws_restJson1VpcConfiguration(value, context) }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1PolicyGenerationDetails = (input, context) => {
  return {
    ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
  };
};
const serializeAws_restJson1RegionList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1S3AccessPointConfiguration = (input, context) => {
  return {
    ...(input.accessPointPolicy !== undefined &&
      input.accessPointPolicy !== null && { accessPointPolicy: input.accessPointPolicy }),
    ...(input.networkOrigin !== undefined &&
      input.networkOrigin !== null && {
        networkOrigin: serializeAws_restJson1NetworkOriginConfiguration(input.networkOrigin, context),
      }),
    ...(input.publicAccessBlock !== undefined &&
      input.publicAccessBlock !== null && {
        publicAccessBlock: serializeAws_restJson1S3PublicAccessBlockConfiguration(input.publicAccessBlock, context),
      }),
  };
};
const serializeAws_restJson1S3AccessPointConfigurationsMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1S3AccessPointConfiguration(value, context),
    };
  }, {});
};
const serializeAws_restJson1S3BucketAclGrantConfiguration = (input, context) => {
  return {
    ...(input.grantee !== undefined &&
      input.grantee !== null && { grantee: serializeAws_restJson1AclGrantee(input.grantee, context) }),
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
  };
};
const serializeAws_restJson1S3BucketAclGrantConfigurationsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
};
const serializeAws_restJson1S3BucketConfiguration = (input, context) => {
  return {
    ...(input.accessPoints !== undefined &&
      input.accessPoints !== null && {
        accessPoints: serializeAws_restJson1S3AccessPointConfigurationsMap(input.accessPoints, context),
      }),
    ...(input.bucketAclGrants !== undefined &&
      input.bucketAclGrants !== null && {
        bucketAclGrants: serializeAws_restJson1S3BucketAclGrantConfigurationsList(input.bucketAclGrants, context),
      }),
    ...(input.bucketPolicy !== undefined && input.bucketPolicy !== null && { bucketPolicy: input.bucketPolicy }),
    ...(input.bucketPublicAccessBlock !== undefined &&
      input.bucketPublicAccessBlock !== null && {
        bucketPublicAccessBlock: serializeAws_restJson1S3PublicAccessBlockConfiguration(
          input.bucketPublicAccessBlock,
          context
        ),
      }),
  };
};
const serializeAws_restJson1S3PublicAccessBlockConfiguration = (input, context) => {
  return {
    ...(input.ignorePublicAcls !== undefined &&
      input.ignorePublicAcls !== null && { ignorePublicAcls: input.ignorePublicAcls }),
    ...(input.restrictPublicBuckets !== undefined &&
      input.restrictPublicBuckets !== null && { restrictPublicBuckets: input.restrictPublicBuckets }),
  };
};
const serializeAws_restJson1SecretsManagerSecretConfiguration = (input, context) => {
  return {
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
    ...(input.secretPolicy !== undefined && input.secretPolicy !== null && { secretPolicy: input.secretPolicy }),
  };
};
const serializeAws_restJson1SortCriteria = (input, context) => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
  };
};
const serializeAws_restJson1SqsQueueConfiguration = (input, context) => {
  return {
    ...(input.queuePolicy !== undefined && input.queuePolicy !== null && { queuePolicy: input.queuePolicy }),
  };
};
const serializeAws_restJson1TagsMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1Trail = (input, context) => {
  return {
    ...(input.allRegions !== undefined && input.allRegions !== null && { allRegions: input.allRegions }),
    ...(input.cloudTrailArn !== undefined && input.cloudTrailArn !== null && { cloudTrailArn: input.cloudTrailArn }),
    ...(input.regions !== undefined &&
      input.regions !== null && { regions: serializeAws_restJson1RegionList(input.regions, context) }),
  };
};
const serializeAws_restJson1TrailList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Trail(entry, context);
    });
};
const serializeAws_restJson1ValueList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1VpcConfiguration = (input, context) => {
  return {
    ...(input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }),
  };
};
const deserializeAws_restJson1AccessPreview = (output, context) => {
  return {
    analyzerArn: output.analyzerArn !== undefined && output.analyzerArn !== null ? output.analyzerArn : undefined,
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_restJson1ConfigurationsMap(output.configurations, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? deserializeAws_restJson1AccessPreviewStatusReason(output.statusReason, context)
        : undefined,
  };
};
const deserializeAws_restJson1AccessPreviewFinding = (output, context) => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    changeType: output.changeType !== undefined && output.changeType !== null ? output.changeType : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    existingFindingId:
      output.existingFindingId !== undefined && output.existingFindingId !== null
        ? output.existingFindingId
        : undefined,
    existingFindingStatus:
      output.existingFindingStatus !== undefined && output.existingFindingStatus !== null
        ? output.existingFindingStatus
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    isPublic: output.isPublic !== undefined && output.isPublic !== null ? output.isPublic : undefined,
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceOwnerAccount:
      output.resourceOwnerAccount !== undefined && output.resourceOwnerAccount !== null
        ? output.resourceOwnerAccount
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AccessPreviewFindingsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AccessPreviewFinding(entry, context);
    });
};
const deserializeAws_restJson1AccessPreviewsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AccessPreviewSummary(entry, context);
    });
};
const deserializeAws_restJson1AccessPreviewStatusReason = (output, context) => {
  return {
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
  };
};
const deserializeAws_restJson1AccessPreviewSummary = (output, context) => {
  return {
    analyzerArn: output.analyzerArn !== undefined && output.analyzerArn !== null ? output.analyzerArn : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? deserializeAws_restJson1AccessPreviewStatusReason(output.statusReason, context)
        : undefined,
  };
};
const deserializeAws_restJson1AclGrantee = (output, context) => {
  if (output.id !== undefined && output.id !== null) {
    return {
      id: output.id,
    };
  }
  if (output.uri !== undefined && output.uri !== null) {
    return {
      uri: output.uri,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ActionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1AnalyzedResource = (output, context) => {
  return {
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1ActionList(output.actions, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    isPublic: output.isPublic !== undefined && output.isPublic !== null ? output.isPublic : undefined,
    resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    resourceOwnerAccount:
      output.resourceOwnerAccount !== undefined && output.resourceOwnerAccount !== null
        ? output.resourceOwnerAccount
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sharedVia:
      output.sharedVia !== undefined && output.sharedVia !== null
        ? deserializeAws_restJson1SharedViaList(output.sharedVia, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  };
};
const deserializeAws_restJson1AnalyzedResourcesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AnalyzedResourceSummary(entry, context);
    });
};
const deserializeAws_restJson1AnalyzedResourceSummary = (output, context) => {
  return {
    resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    resourceOwnerAccount:
      output.resourceOwnerAccount !== undefined && output.resourceOwnerAccount !== null
        ? output.resourceOwnerAccount
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  };
};
const deserializeAws_restJson1AnalyzersList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AnalyzerSummary(entry, context);
    });
};
const deserializeAws_restJson1AnalyzerSummary = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    lastResourceAnalyzed:
      output.lastResourceAnalyzed !== undefined && output.lastResourceAnalyzed !== null
        ? output.lastResourceAnalyzed
        : undefined,
    lastResourceAnalyzedAt:
      output.lastResourceAnalyzedAt !== undefined && output.lastResourceAnalyzedAt !== null
        ? new Date(output.lastResourceAnalyzedAt)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? deserializeAws_restJson1StatusReason(output.statusReason, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1ArchiveRulesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ArchiveRuleSummary(entry, context);
    });
};
const deserializeAws_restJson1ArchiveRuleSummary = (output, context) => {
  return {
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    filter:
      output.filter !== undefined && output.filter !== null
        ? deserializeAws_restJson1FilterCriteriaMap(output.filter, context)
        : undefined,
    ruleName: output.ruleName !== undefined && output.ruleName !== null ? output.ruleName : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  };
};
const deserializeAws_restJson1CloudTrailProperties = (output, context) => {
  return {
    endTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
    startTime: output.startTime !== undefined && output.startTime !== null ? new Date(output.startTime) : undefined,
    trailProperties:
      output.trailProperties !== undefined && output.trailProperties !== null
        ? deserializeAws_restJson1TrailPropertiesList(output.trailProperties, context)
        : undefined,
  };
};
const deserializeAws_restJson1ConditionKeyMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1Configuration = (output, context) => {
  if (output.iamRole !== undefined && output.iamRole !== null) {
    return {
      iamRole: deserializeAws_restJson1IamRoleConfiguration(output.iamRole, context),
    };
  }
  if (output.kmsKey !== undefined && output.kmsKey !== null) {
    return {
      kmsKey: deserializeAws_restJson1KmsKeyConfiguration(output.kmsKey, context),
    };
  }
  if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
    return {
      s3Bucket: deserializeAws_restJson1S3BucketConfiguration(output.s3Bucket, context),
    };
  }
  if (output.secretsManagerSecret !== undefined && output.secretsManagerSecret !== null) {
    return {
      secretsManagerSecret: deserializeAws_restJson1SecretsManagerSecretConfiguration(
        output.secretsManagerSecret,
        context
      ),
    };
  }
  if (output.sqsQueue !== undefined && output.sqsQueue !== null) {
    return {
      sqsQueue: deserializeAws_restJson1SqsQueueConfiguration(output.sqsQueue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ConfigurationsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Configuration(value, context),
    };
  }, {});
};
const deserializeAws_restJson1Criterion = (output, context) => {
  return {
    contains:
      output.contains !== undefined && output.contains !== null
        ? deserializeAws_restJson1ValueList(output.contains, context)
        : undefined,
    eq:
      output.eq !== undefined && output.eq !== null ? deserializeAws_restJson1ValueList(output.eq, context) : undefined,
    exists: output.exists !== undefined && output.exists !== null ? output.exists : undefined,
    neq:
      output.neq !== undefined && output.neq !== null
        ? deserializeAws_restJson1ValueList(output.neq, context)
        : undefined,
  };
};
const deserializeAws_restJson1FilterCriteriaMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Criterion(value, context),
    };
  }, {});
};
const deserializeAws_restJson1Finding = (output, context) => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    isPublic: output.isPublic !== undefined && output.isPublic !== null ? output.isPublic : undefined,
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceOwnerAccount:
      output.resourceOwnerAccount !== undefined && output.resourceOwnerAccount !== null
        ? output.resourceOwnerAccount
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  };
};
const deserializeAws_restJson1FindingsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FindingSummary(entry, context);
    });
};
const deserializeAws_restJson1FindingSource = (output, context) => {
  return {
    detail:
      output.detail !== undefined && output.detail !== null
        ? deserializeAws_restJson1FindingSourceDetail(output.detail, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1FindingSourceDetail = (output, context) => {
  return {
    accessPointArn:
      output.accessPointArn !== undefined && output.accessPointArn !== null ? output.accessPointArn : undefined,
  };
};
const deserializeAws_restJson1FindingSourceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FindingSource(entry, context);
    });
};
const deserializeAws_restJson1FindingSummary = (output, context) => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1ActionList(output.action, context)
        : undefined,
    analyzedAt: output.analyzedAt !== undefined && output.analyzedAt !== null ? new Date(output.analyzedAt) : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? deserializeAws_restJson1ConditionKeyMap(output.condition, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    isPublic: output.isPublic !== undefined && output.isPublic !== null ? output.isPublic : undefined,
    principal:
      output.principal !== undefined && output.principal !== null
        ? deserializeAws_restJson1PrincipalMap(output.principal, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceOwnerAccount:
      output.resourceOwnerAccount !== undefined && output.resourceOwnerAccount !== null
        ? output.resourceOwnerAccount
        : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1FindingSourceList(output.sources, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  };
};
const deserializeAws_restJson1GeneratedPolicy = (output, context) => {
  return {
    policy: output.policy !== undefined && output.policy !== null ? output.policy : undefined,
  };
};
const deserializeAws_restJson1GeneratedPolicyList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GeneratedPolicy(entry, context);
    });
};
const deserializeAws_restJson1GeneratedPolicyProperties = (output, context) => {
  return {
    cloudTrailProperties:
      output.cloudTrailProperties !== undefined && output.cloudTrailProperties !== null
        ? deserializeAws_restJson1CloudTrailProperties(output.cloudTrailProperties, context)
        : undefined,
    isComplete: output.isComplete !== undefined && output.isComplete !== null ? output.isComplete : undefined,
    principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
  };
};
const deserializeAws_restJson1GeneratedPolicyResult = (output, context) => {
  return {
    generatedPolicies:
      output.generatedPolicies !== undefined && output.generatedPolicies !== null
        ? deserializeAws_restJson1GeneratedPolicyList(output.generatedPolicies, context)
        : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1GeneratedPolicyProperties(output.properties, context)
        : undefined,
  };
};
const deserializeAws_restJson1IamRoleConfiguration = (output, context) => {
  return {
    trustPolicy: output.trustPolicy !== undefined && output.trustPolicy !== null ? output.trustPolicy : undefined,
  };
};
const deserializeAws_restJson1InternetConfiguration = (output, context) => {
  return {};
};
const deserializeAws_restJson1JobDetails = (output, context) => {
  return {
    completedOn:
      output.completedOn !== undefined && output.completedOn !== null ? new Date(output.completedOn) : undefined,
    jobError:
      output.jobError !== undefined && output.jobError !== null
        ? deserializeAws_restJson1JobError(output.jobError, context)
        : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    startedOn: output.startedOn !== undefined && output.startedOn !== null ? new Date(output.startedOn) : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1JobError = (output, context) => {
  return {
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_restJson1KmsConstraintsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1KmsGrantConfiguration = (output, context) => {
  return {
    constraints:
      output.constraints !== undefined && output.constraints !== null
        ? deserializeAws_restJson1KmsGrantConstraints(output.constraints, context)
        : undefined,
    granteePrincipal:
      output.granteePrincipal !== undefined && output.granteePrincipal !== null ? output.granteePrincipal : undefined,
    issuingAccount:
      output.issuingAccount !== undefined && output.issuingAccount !== null ? output.issuingAccount : undefined,
    operations:
      output.operations !== undefined && output.operations !== null
        ? deserializeAws_restJson1KmsGrantOperationsList(output.operations, context)
        : undefined,
    retiringPrincipal:
      output.retiringPrincipal !== undefined && output.retiringPrincipal !== null
        ? output.retiringPrincipal
        : undefined,
  };
};
const deserializeAws_restJson1KmsGrantConfigurationsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1KmsGrantConfiguration(entry, context);
    });
};
const deserializeAws_restJson1KmsGrantConstraints = (output, context) => {
  return {
    encryptionContextEquals:
      output.encryptionContextEquals !== undefined && output.encryptionContextEquals !== null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextEquals, context)
        : undefined,
    encryptionContextSubset:
      output.encryptionContextSubset !== undefined && output.encryptionContextSubset !== null
        ? deserializeAws_restJson1KmsConstraintsMap(output.encryptionContextSubset, context)
        : undefined,
  };
};
const deserializeAws_restJson1KmsGrantOperationsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1KmsKeyConfiguration = (output, context) => {
  return {
    grants:
      output.grants !== undefined && output.grants !== null
        ? deserializeAws_restJson1KmsGrantConfigurationsList(output.grants, context)
        : undefined,
    keyPolicies:
      output.keyPolicies !== undefined && output.keyPolicies !== null
        ? deserializeAws_restJson1KmsKeyPoliciesMap(output.keyPolicies, context)
        : undefined,
  };
};
const deserializeAws_restJson1KmsKeyPoliciesMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1Location = (output, context) => {
  return {
    path:
      output.path !== undefined && output.path !== null
        ? deserializeAws_restJson1PathElementList(output.path, context)
        : undefined,
    span:
      output.span !== undefined && output.span !== null
        ? deserializeAws_restJson1Span(output.span, context)
        : undefined,
  };
};
const deserializeAws_restJson1LocationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Location(entry, context);
    });
};
const deserializeAws_restJson1NetworkOriginConfiguration = (output, context) => {
  if (output.internetConfiguration !== undefined && output.internetConfiguration !== null) {
    return {
      internetConfiguration: deserializeAws_restJson1InternetConfiguration(output.internetConfiguration, context),
    };
  }
  if (output.vpcConfiguration !== undefined && output.vpcConfiguration !== null) {
    return {
      vpcConfiguration: deserializeAws_restJson1VpcConfiguration(output.vpcConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1PathElement = (output, context) => {
  if (output.index !== undefined && output.index !== null) {
    return {
      index: output.index,
    };
  }
  if (output.key !== undefined && output.key !== null) {
    return {
      key: output.key,
    };
  }
  if (output.substring !== undefined && output.substring !== null) {
    return {
      substring: deserializeAws_restJson1Substring(output.substring, context),
    };
  }
  if (output.value !== undefined && output.value !== null) {
    return {
      value: output.value,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1PathElementList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PathElement(entry, context);
    });
};
const deserializeAws_restJson1PolicyGeneration = (output, context) => {
  return {
    completedOn:
      output.completedOn !== undefined && output.completedOn !== null ? new Date(output.completedOn) : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
    startedOn: output.startedOn !== undefined && output.startedOn !== null ? new Date(output.startedOn) : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1PolicyGenerationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PolicyGeneration(entry, context);
    });
};
const deserializeAws_restJson1Position = (output, context) => {
  return {
    column: output.column !== undefined && output.column !== null ? output.column : undefined,
    line: output.line !== undefined && output.line !== null ? output.line : undefined,
    offset: output.offset !== undefined && output.offset !== null ? output.offset : undefined,
  };
};
const deserializeAws_restJson1PrincipalMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1RegionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1S3AccessPointConfiguration = (output, context) => {
  return {
    accessPointPolicy:
      output.accessPointPolicy !== undefined && output.accessPointPolicy !== null
        ? output.accessPointPolicy
        : undefined,
    networkOrigin:
      output.networkOrigin !== undefined && output.networkOrigin !== null
        ? deserializeAws_restJson1NetworkOriginConfiguration(output.networkOrigin, context)
        : undefined,
    publicAccessBlock:
      output.publicAccessBlock !== undefined && output.publicAccessBlock !== null
        ? deserializeAws_restJson1S3PublicAccessBlockConfiguration(output.publicAccessBlock, context)
        : undefined,
  };
};
const deserializeAws_restJson1S3AccessPointConfigurationsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1S3AccessPointConfiguration(value, context),
    };
  }, {});
};
const deserializeAws_restJson1S3BucketAclGrantConfiguration = (output, context) => {
  return {
    grantee:
      output.grantee !== undefined && output.grantee !== null
        ? deserializeAws_restJson1AclGrantee(output.grantee, context)
        : undefined,
    permission: output.permission !== undefined && output.permission !== null ? output.permission : undefined,
  };
};
const deserializeAws_restJson1S3BucketAclGrantConfigurationsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1S3BucketAclGrantConfiguration(entry, context);
    });
};
const deserializeAws_restJson1S3BucketConfiguration = (output, context) => {
  return {
    accessPoints:
      output.accessPoints !== undefined && output.accessPoints !== null
        ? deserializeAws_restJson1S3AccessPointConfigurationsMap(output.accessPoints, context)
        : undefined,
    bucketAclGrants:
      output.bucketAclGrants !== undefined && output.bucketAclGrants !== null
        ? deserializeAws_restJson1S3BucketAclGrantConfigurationsList(output.bucketAclGrants, context)
        : undefined,
    bucketPolicy: output.bucketPolicy !== undefined && output.bucketPolicy !== null ? output.bucketPolicy : undefined,
    bucketPublicAccessBlock:
      output.bucketPublicAccessBlock !== undefined && output.bucketPublicAccessBlock !== null
        ? deserializeAws_restJson1S3PublicAccessBlockConfiguration(output.bucketPublicAccessBlock, context)
        : undefined,
  };
};
const deserializeAws_restJson1S3PublicAccessBlockConfiguration = (output, context) => {
  return {
    ignorePublicAcls:
      output.ignorePublicAcls !== undefined && output.ignorePublicAcls !== null ? output.ignorePublicAcls : undefined,
    restrictPublicBuckets:
      output.restrictPublicBuckets !== undefined && output.restrictPublicBuckets !== null
        ? output.restrictPublicBuckets
        : undefined,
  };
};
const deserializeAws_restJson1SecretsManagerSecretConfiguration = (output, context) => {
  return {
    kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
    secretPolicy: output.secretPolicy !== undefined && output.secretPolicy !== null ? output.secretPolicy : undefined,
  };
};
const deserializeAws_restJson1SharedViaList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1Span = (output, context) => {
  return {
    end:
      output.end !== undefined && output.end !== null
        ? deserializeAws_restJson1Position(output.end, context)
        : undefined,
    start:
      output.start !== undefined && output.start !== null
        ? deserializeAws_restJson1Position(output.start, context)
        : undefined,
  };
};
const deserializeAws_restJson1SqsQueueConfiguration = (output, context) => {
  return {
    queuePolicy: output.queuePolicy !== undefined && output.queuePolicy !== null ? output.queuePolicy : undefined,
  };
};
const deserializeAws_restJson1StatusReason = (output, context) => {
  return {
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
  };
};
const deserializeAws_restJson1Substring = (output, context) => {
  return {
    length: output.length !== undefined && output.length !== null ? output.length : undefined,
    start: output.start !== undefined && output.start !== null ? output.start : undefined,
  };
};
const deserializeAws_restJson1TagsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1TrailProperties = (output, context) => {
  return {
    allRegions: output.allRegions !== undefined && output.allRegions !== null ? output.allRegions : undefined,
    cloudTrailArn:
      output.cloudTrailArn !== undefined && output.cloudTrailArn !== null ? output.cloudTrailArn : undefined,
    regions:
      output.regions !== undefined && output.regions !== null
        ? deserializeAws_restJson1RegionList(output.regions, context)
        : undefined,
  };
};
const deserializeAws_restJson1TrailPropertiesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TrailProperties(entry, context);
    });
};
const deserializeAws_restJson1ValidatePolicyFinding = (output, context) => {
  return {
    findingDetails:
      output.findingDetails !== undefined && output.findingDetails !== null ? output.findingDetails : undefined,
    findingType: output.findingType !== undefined && output.findingType !== null ? output.findingType : undefined,
    issueCode: output.issueCode !== undefined && output.issueCode !== null ? output.issueCode : undefined,
    learnMoreLink:
      output.learnMoreLink !== undefined && output.learnMoreLink !== null ? output.learnMoreLink : undefined,
    locations:
      output.locations !== undefined && output.locations !== null
        ? deserializeAws_restJson1LocationList(output.locations, context)
        : undefined,
  };
};
const deserializeAws_restJson1ValidatePolicyFindingList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ValidatePolicyFinding(entry, context);
    });
};
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};
const deserializeAws_restJson1ValueList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1VpcConfiguration = (output, context) => {
  return {
    vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
  };
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
