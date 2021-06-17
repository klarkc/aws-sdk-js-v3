"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restXmlListResourceRecordSetsCommand = exports.serializeAws_restXmlListQueryLoggingConfigsCommand = exports.serializeAws_restXmlListHostedZonesByVPCCommand = exports.serializeAws_restXmlListHostedZonesByNameCommand = exports.serializeAws_restXmlListHostedZonesCommand = exports.serializeAws_restXmlListHealthChecksCommand = exports.serializeAws_restXmlListGeoLocationsCommand = exports.serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = exports.serializeAws_restXmlGetTrafficPolicyInstanceCommand = exports.serializeAws_restXmlGetTrafficPolicyCommand = exports.serializeAws_restXmlGetReusableDelegationSetLimitCommand = exports.serializeAws_restXmlGetReusableDelegationSetCommand = exports.serializeAws_restXmlGetQueryLoggingConfigCommand = exports.serializeAws_restXmlGetHostedZoneLimitCommand = exports.serializeAws_restXmlGetHostedZoneCountCommand = exports.serializeAws_restXmlGetHostedZoneCommand = exports.serializeAws_restXmlGetHealthCheckStatusCommand = exports.serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = exports.serializeAws_restXmlGetHealthCheckCountCommand = exports.serializeAws_restXmlGetHealthCheckCommand = exports.serializeAws_restXmlGetGeoLocationCommand = exports.serializeAws_restXmlGetDNSSECCommand = exports.serializeAws_restXmlGetCheckerIpRangesCommand = exports.serializeAws_restXmlGetChangeCommand = exports.serializeAws_restXmlGetAccountLimitCommand = exports.serializeAws_restXmlEnableHostedZoneDNSSECCommand = exports.serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = exports.serializeAws_restXmlDisableHostedZoneDNSSECCommand = exports.serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = exports.serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = exports.serializeAws_restXmlDeleteTrafficPolicyCommand = exports.serializeAws_restXmlDeleteReusableDelegationSetCommand = exports.serializeAws_restXmlDeleteQueryLoggingConfigCommand = exports.serializeAws_restXmlDeleteKeySigningKeyCommand = exports.serializeAws_restXmlDeleteHostedZoneCommand = exports.serializeAws_restXmlDeleteHealthCheckCommand = exports.serializeAws_restXmlDeactivateKeySigningKeyCommand = exports.serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = exports.serializeAws_restXmlCreateTrafficPolicyVersionCommand = exports.serializeAws_restXmlCreateTrafficPolicyInstanceCommand = exports.serializeAws_restXmlCreateTrafficPolicyCommand = exports.serializeAws_restXmlCreateReusableDelegationSetCommand = exports.serializeAws_restXmlCreateQueryLoggingConfigCommand = exports.serializeAws_restXmlCreateKeySigningKeyCommand = exports.serializeAws_restXmlCreateHostedZoneCommand = exports.serializeAws_restXmlCreateHealthCheckCommand = exports.serializeAws_restXmlChangeTagsForResourceCommand = exports.serializeAws_restXmlChangeResourceRecordSetsCommand = exports.serializeAws_restXmlAssociateVPCWithHostedZoneCommand = exports.serializeAws_restXmlActivateKeySigningKeyCommand = void 0;
exports.deserializeAws_restXmlGetHostedZoneCountCommand = exports.deserializeAws_restXmlGetHostedZoneCommand = exports.deserializeAws_restXmlGetHealthCheckStatusCommand = exports.deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = exports.deserializeAws_restXmlGetHealthCheckCountCommand = exports.deserializeAws_restXmlGetHealthCheckCommand = exports.deserializeAws_restXmlGetGeoLocationCommand = exports.deserializeAws_restXmlGetDNSSECCommand = exports.deserializeAws_restXmlGetCheckerIpRangesCommand = exports.deserializeAws_restXmlGetChangeCommand = exports.deserializeAws_restXmlGetAccountLimitCommand = exports.deserializeAws_restXmlEnableHostedZoneDNSSECCommand = exports.deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = exports.deserializeAws_restXmlDisableHostedZoneDNSSECCommand = exports.deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = exports.deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = exports.deserializeAws_restXmlDeleteTrafficPolicyCommand = exports.deserializeAws_restXmlDeleteReusableDelegationSetCommand = exports.deserializeAws_restXmlDeleteQueryLoggingConfigCommand = exports.deserializeAws_restXmlDeleteKeySigningKeyCommand = exports.deserializeAws_restXmlDeleteHostedZoneCommand = exports.deserializeAws_restXmlDeleteHealthCheckCommand = exports.deserializeAws_restXmlDeactivateKeySigningKeyCommand = exports.deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = exports.deserializeAws_restXmlCreateTrafficPolicyVersionCommand = exports.deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = exports.deserializeAws_restXmlCreateTrafficPolicyCommand = exports.deserializeAws_restXmlCreateReusableDelegationSetCommand = exports.deserializeAws_restXmlCreateQueryLoggingConfigCommand = exports.deserializeAws_restXmlCreateKeySigningKeyCommand = exports.deserializeAws_restXmlCreateHostedZoneCommand = exports.deserializeAws_restXmlCreateHealthCheckCommand = exports.deserializeAws_restXmlChangeTagsForResourceCommand = exports.deserializeAws_restXmlChangeResourceRecordSetsCommand = exports.deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = exports.deserializeAws_restXmlActivateKeySigningKeyCommand = exports.serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = exports.serializeAws_restXmlUpdateTrafficPolicyCommentCommand = exports.serializeAws_restXmlUpdateHostedZoneCommentCommand = exports.serializeAws_restXmlUpdateHealthCheckCommand = exports.serializeAws_restXmlTestDNSAnswerCommand = exports.serializeAws_restXmlListVPCAssociationAuthorizationsCommand = exports.serializeAws_restXmlListTrafficPolicyVersionsCommand = exports.serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = exports.serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = exports.serializeAws_restXmlListTrafficPolicyInstancesCommand = exports.serializeAws_restXmlListTrafficPoliciesCommand = exports.serializeAws_restXmlListTagsForResourcesCommand = exports.serializeAws_restXmlListTagsForResourceCommand = exports.serializeAws_restXmlListReusableDelegationSetsCommand = void 0;
exports.deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = exports.deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = exports.deserializeAws_restXmlUpdateHostedZoneCommentCommand = exports.deserializeAws_restXmlUpdateHealthCheckCommand = exports.deserializeAws_restXmlTestDNSAnswerCommand = exports.deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = exports.deserializeAws_restXmlListTrafficPolicyVersionsCommand = exports.deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = exports.deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = exports.deserializeAws_restXmlListTrafficPolicyInstancesCommand = exports.deserializeAws_restXmlListTrafficPoliciesCommand = exports.deserializeAws_restXmlListTagsForResourcesCommand = exports.deserializeAws_restXmlListTagsForResourceCommand = exports.deserializeAws_restXmlListReusableDelegationSetsCommand = exports.deserializeAws_restXmlListResourceRecordSetsCommand = exports.deserializeAws_restXmlListQueryLoggingConfigsCommand = exports.deserializeAws_restXmlListHostedZonesByVPCCommand = exports.deserializeAws_restXmlListHostedZonesByNameCommand = exports.deserializeAws_restXmlListHostedZonesCommand = exports.deserializeAws_restXmlListHealthChecksCommand = exports.deserializeAws_restXmlListGeoLocationsCommand = exports.deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = exports.deserializeAws_restXmlGetTrafficPolicyInstanceCommand = exports.deserializeAws_restXmlGetTrafficPolicyCommand = exports.deserializeAws_restXmlGetReusableDelegationSetLimitCommand = exports.deserializeAws_restXmlGetReusableDelegationSetCommand = exports.deserializeAws_restXmlGetQueryLoggingConfigCommand = exports.deserializeAws_restXmlGetHostedZoneLimitCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_restXmlActivateKeySigningKeyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlActivateKeySigningKeyCommand = serializeAws_restXmlActivateKeySigningKeyCommand;
const serializeAws_restXmlAssociateVPCWithHostedZoneCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("AssociateVPCWithHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("AssociateVPCComment").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.VPC !== undefined) {
        const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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
exports.serializeAws_restXmlAssociateVPCWithHostedZoneCommand = serializeAws_restXmlAssociateVPCWithHostedZoneCommand;
const serializeAws_restXmlChangeResourceRecordSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ChangeResourceRecordSetsRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.ChangeBatch !== undefined) {
        const node = serializeAws_restXmlChangeBatch(input.ChangeBatch, context).withName("ChangeBatch");
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
exports.serializeAws_restXmlChangeResourceRecordSetsCommand = serializeAws_restXmlChangeResourceRecordSetsCommand;
const serializeAws_restXmlChangeTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ChangeTagsForResourceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.AddTags !== undefined) {
        const nodes = serializeAws_restXmlTagList(input.AddTags, context);
        const containerNode = new xml_builder_1.XmlNode("AddTags");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.RemoveTagKeys !== undefined) {
        const nodes = serializeAws_restXmlTagKeyList(input.RemoveTagKeys, context);
        const containerNode = new xml_builder_1.XmlNode("RemoveTagKeys");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
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
exports.serializeAws_restXmlChangeTagsForResourceCommand = serializeAws_restXmlChangeTagsForResourceCommand;
const serializeAws_restXmlCreateHealthCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/healthcheck";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateHealthCheckRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        const node = new xml_builder_1.XmlNode("HealthCheckNonce")
            .addChildNode(new xml_builder_1.XmlText(input.CallerReference))
            .withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.HealthCheckConfig !== undefined) {
        const node = serializeAws_restXmlHealthCheckConfig(input.HealthCheckConfig, context).withName("HealthCheckConfig");
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
exports.serializeAws_restXmlCreateHealthCheckCommand = serializeAws_restXmlCreateHealthCheckCommand;
const serializeAws_restXmlCreateHostedZoneCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        const node = new xml_builder_1.XmlNode("Nonce").addChildNode(new xml_builder_1.XmlText(input.CallerReference)).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.DelegationSetId !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceId")
            .addChildNode(new xml_builder_1.XmlText(input.DelegationSetId))
            .withName("DelegationSetId");
        bodyNode.addChildNode(node);
    }
    if (input.HostedZoneConfig !== undefined) {
        const node = serializeAws_restXmlHostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = new xml_builder_1.XmlNode("DNSName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.VPC !== undefined) {
        const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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
exports.serializeAws_restXmlCreateHostedZoneCommand = serializeAws_restXmlCreateHostedZoneCommand;
const serializeAws_restXmlCreateKeySigningKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/keysigningkey";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateKeySigningKeyRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        const node = new xml_builder_1.XmlNode("Nonce").addChildNode(new xml_builder_1.XmlText(input.CallerReference)).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.HostedZoneId !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceId").addChildNode(new xml_builder_1.XmlText(input.HostedZoneId)).withName("HostedZoneId");
        bodyNode.addChildNode(node);
    }
    if (input.KeyManagementServiceArn !== undefined) {
        const node = new xml_builder_1.XmlNode("SigningKeyString")
            .addChildNode(new xml_builder_1.XmlText(input.KeyManagementServiceArn))
            .withName("KeyManagementServiceArn");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = new xml_builder_1.XmlNode("SigningKeyName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Status !== undefined) {
        const node = new xml_builder_1.XmlNode("SigningKeyStatus").addChildNode(new xml_builder_1.XmlText(input.Status)).withName("Status");
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
exports.serializeAws_restXmlCreateKeySigningKeyCommand = serializeAws_restXmlCreateKeySigningKeyCommand;
const serializeAws_restXmlCreateQueryLoggingConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/queryloggingconfig";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateQueryLoggingConfigRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CloudWatchLogsLogGroupArn !== undefined) {
        const node = new xml_builder_1.XmlNode("CloudWatchLogsLogGroupArn")
            .addChildNode(new xml_builder_1.XmlText(input.CloudWatchLogsLogGroupArn))
            .withName("CloudWatchLogsLogGroupArn");
        bodyNode.addChildNode(node);
    }
    if (input.HostedZoneId !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceId").addChildNode(new xml_builder_1.XmlText(input.HostedZoneId)).withName("HostedZoneId");
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
exports.serializeAws_restXmlCreateQueryLoggingConfigCommand = serializeAws_restXmlCreateQueryLoggingConfigCommand;
const serializeAws_restXmlCreateReusableDelegationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/delegationset";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateReusableDelegationSetRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.CallerReference !== undefined) {
        const node = new xml_builder_1.XmlNode("Nonce").addChildNode(new xml_builder_1.XmlText(input.CallerReference)).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.HostedZoneId !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceId").addChildNode(new xml_builder_1.XmlText(input.HostedZoneId)).withName("HostedZoneId");
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
exports.serializeAws_restXmlCreateReusableDelegationSetCommand = serializeAws_restXmlCreateReusableDelegationSetCommand;
const serializeAws_restXmlCreateTrafficPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicy";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyComment").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Document !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyDocument")
            .addChildNode(new xml_builder_1.XmlText(input.Document))
            .withName("Document");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
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
exports.serializeAws_restXmlCreateTrafficPolicyCommand = serializeAws_restXmlCreateTrafficPolicyCommand;
const serializeAws_restXmlCreateTrafficPolicyInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicyinstance";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyInstanceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.HostedZoneId !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceId").addChildNode(new xml_builder_1.XmlText(input.HostedZoneId)).withName("HostedZoneId");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = new xml_builder_1.XmlNode("DNSName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.TTL !== undefined) {
        const node = new xml_builder_1.XmlNode("TTL").addChildNode(new xml_builder_1.XmlText(String(input.TTL))).withName("TTL");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyId !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyId))
            .withName("TrafficPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyVersion !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.TrafficPolicyVersion)))
            .withName("TrafficPolicyVersion");
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
exports.serializeAws_restXmlCreateTrafficPolicyInstanceCommand = serializeAws_restXmlCreateTrafficPolicyInstanceCommand;
const serializeAws_restXmlCreateTrafficPolicyVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateTrafficPolicyVersionRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyComment").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Document !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyDocument")
            .addChildNode(new xml_builder_1.XmlText(input.Document))
            .withName("Document");
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
exports.serializeAws_restXmlCreateTrafficPolicyVersionCommand = serializeAws_restXmlCreateTrafficPolicyVersionCommand;
const serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateVPCAssociationAuthorizationRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.VPC !== undefined) {
        const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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
exports.serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = serializeAws_restXmlCreateVPCAssociationAuthorizationCommand;
const serializeAws_restXmlDeactivateKeySigningKeyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeactivateKeySigningKeyCommand = serializeAws_restXmlDeactivateKeySigningKeyCommand;
const serializeAws_restXmlDeleteHealthCheckCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
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
exports.serializeAws_restXmlDeleteHealthCheckCommand = serializeAws_restXmlDeleteHealthCheckCommand;
const serializeAws_restXmlDeleteHostedZoneCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeleteHostedZoneCommand = serializeAws_restXmlDeleteHostedZoneCommand;
const serializeAws_restXmlDeleteKeySigningKeyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeleteKeySigningKeyCommand = serializeAws_restXmlDeleteKeySigningKeyCommand;
const serializeAws_restXmlDeleteQueryLoggingConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeleteQueryLoggingConfigCommand = serializeAws_restXmlDeleteQueryLoggingConfigCommand;
const serializeAws_restXmlDeleteReusableDelegationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/delegationset/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeleteReusableDelegationSetCommand = serializeAws_restXmlDeleteReusableDelegationSetCommand;
const serializeAws_restXmlDeleteTrafficPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
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
exports.serializeAws_restXmlDeleteTrafficPolicyCommand = serializeAws_restXmlDeleteTrafficPolicyCommand;
const serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = serializeAws_restXmlDeleteTrafficPolicyInstanceCommand;
const serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("DeleteVPCAssociationAuthorizationRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.VPC !== undefined) {
        const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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
exports.serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand;
const serializeAws_restXmlDisableHostedZoneDNSSECCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
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
exports.serializeAws_restXmlDisableHostedZoneDNSSECCommand = serializeAws_restXmlDisableHostedZoneDNSSECCommand;
const serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("DisassociateVPCFromHostedZoneRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("DisassociateVPCComment").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.VPC !== undefined) {
        const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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
exports.serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = serializeAws_restXmlDisassociateVPCFromHostedZoneCommand;
const serializeAws_restXmlEnableHostedZoneDNSSECCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
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
exports.serializeAws_restXmlEnableHostedZoneDNSSECCommand = serializeAws_restXmlEnableHostedZoneDNSSECCommand;
const serializeAws_restXmlGetAccountLimitCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/accountlimit/{Type}";
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
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
exports.serializeAws_restXmlGetAccountLimitCommand = serializeAws_restXmlGetAccountLimitCommand;
const serializeAws_restXmlGetChangeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/change/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlGetChangeCommand = serializeAws_restXmlGetChangeCommand;
const serializeAws_restXmlGetCheckerIpRangesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/checkeripranges";
    let body;
    body = "";
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
exports.serializeAws_restXmlGetCheckerIpRangesCommand = serializeAws_restXmlGetCheckerIpRangesCommand;
const serializeAws_restXmlGetDNSSECCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/dnssec";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
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
exports.serializeAws_restXmlGetDNSSECCommand = serializeAws_restXmlGetDNSSECCommand;
const serializeAws_restXmlGetGeoLocationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/geolocation";
    const query = {
        ...(input.ContinentCode !== undefined && { continentcode: input.ContinentCode }),
        ...(input.CountryCode !== undefined && { countrycode: input.CountryCode }),
        ...(input.SubdivisionCode !== undefined && { subdivisioncode: input.SubdivisionCode }),
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
exports.serializeAws_restXmlGetGeoLocationCommand = serializeAws_restXmlGetGeoLocationCommand;
const serializeAws_restXmlGetHealthCheckCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
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
exports.serializeAws_restXmlGetHealthCheckCommand = serializeAws_restXmlGetHealthCheckCommand;
const serializeAws_restXmlGetHealthCheckCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/healthcheckcount";
    let body;
    body = "";
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
exports.serializeAws_restXmlGetHealthCheckCountCommand = serializeAws_restXmlGetHealthCheckCountCommand;
const serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
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
exports.serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = serializeAws_restXmlGetHealthCheckLastFailureReasonCommand;
const serializeAws_restXmlGetHealthCheckStatusCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}/status";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
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
exports.serializeAws_restXmlGetHealthCheckStatusCommand = serializeAws_restXmlGetHealthCheckStatusCommand;
const serializeAws_restXmlGetHostedZoneCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlGetHostedZoneCommand = serializeAws_restXmlGetHostedZoneCommand;
const serializeAws_restXmlGetHostedZoneCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzonecount";
    let body;
    body = "";
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
exports.serializeAws_restXmlGetHostedZoneCountCommand = serializeAws_restXmlGetHostedZoneCountCommand;
const serializeAws_restXmlGetHostedZoneLimitCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}";
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
    }
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
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
exports.serializeAws_restXmlGetHostedZoneLimitCommand = serializeAws_restXmlGetHostedZoneLimitCommand;
const serializeAws_restXmlGetQueryLoggingConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/queryloggingconfig/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlGetQueryLoggingConfigCommand = serializeAws_restXmlGetQueryLoggingConfigCommand;
const serializeAws_restXmlGetReusableDelegationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/delegationset/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlGetReusableDelegationSetCommand = serializeAws_restXmlGetReusableDelegationSetCommand;
const serializeAws_restXmlGetReusableDelegationSetLimitCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}";
    if (input.Type !== undefined) {
        const labelValue = input.Type;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Type.");
        }
        resolvedPath = resolvedPath.replace("{Type}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Type.");
    }
    if (input.DelegationSetId !== undefined) {
        const labelValue = input.DelegationSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DelegationSetId.");
        }
        resolvedPath = resolvedPath.replace("{DelegationSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DelegationSetId.");
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
exports.serializeAws_restXmlGetReusableDelegationSetLimitCommand = serializeAws_restXmlGetReusableDelegationSetLimitCommand;
const serializeAws_restXmlGetTrafficPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
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
exports.serializeAws_restXmlGetTrafficPolicyCommand = serializeAws_restXmlGetTrafficPolicyCommand;
const serializeAws_restXmlGetTrafficPolicyInstanceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
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
exports.serializeAws_restXmlGetTrafficPolicyInstanceCommand = serializeAws_restXmlGetTrafficPolicyInstanceCommand;
const serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicyinstancecount";
    let body;
    body = "";
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
exports.serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = serializeAws_restXmlGetTrafficPolicyInstanceCountCommand;
const serializeAws_restXmlListGeoLocationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/geolocations";
    const query = {
        ...(input.StartContinentCode !== undefined && { startcontinentcode: input.StartContinentCode }),
        ...(input.StartCountryCode !== undefined && { startcountrycode: input.StartCountryCode }),
        ...(input.StartSubdivisionCode !== undefined && { startsubdivisioncode: input.StartSubdivisionCode }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListGeoLocationsCommand = serializeAws_restXmlListGeoLocationsCommand;
const serializeAws_restXmlListHealthChecksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/healthcheck";
    const query = {
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListHealthChecksCommand = serializeAws_restXmlListHealthChecksCommand;
const serializeAws_restXmlListHostedZonesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone";
    const query = {
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
        ...(input.DelegationSetId !== undefined && { delegationsetid: input.DelegationSetId }),
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
exports.serializeAws_restXmlListHostedZonesCommand = serializeAws_restXmlListHostedZonesCommand;
const serializeAws_restXmlListHostedZonesByNameCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzonesbyname";
    const query = {
        ...(input.DNSName !== undefined && { dnsname: input.DNSName }),
        ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListHostedZonesByNameCommand = serializeAws_restXmlListHostedZonesByNameCommand;
const serializeAws_restXmlListHostedZonesByVPCCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzonesbyvpc";
    const query = {
        ...(input.VPCId !== undefined && { vpcid: input.VPCId }),
        ...(input.VPCRegion !== undefined && { vpcregion: input.VPCRegion }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
        ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
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
exports.serializeAws_restXmlListHostedZonesByVPCCommand = serializeAws_restXmlListHostedZonesByVPCCommand;
const serializeAws_restXmlListQueryLoggingConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/queryloggingconfig";
    const query = {
        ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
        ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }),
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
exports.serializeAws_restXmlListQueryLoggingConfigsCommand = serializeAws_restXmlListQueryLoggingConfigsCommand;
const serializeAws_restXmlListResourceRecordSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    const query = {
        ...(input.StartRecordName !== undefined && { name: input.StartRecordName }),
        ...(input.StartRecordType !== undefined && { type: input.StartRecordType }),
        ...(input.StartRecordIdentifier !== undefined && { identifier: input.StartRecordIdentifier }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListResourceRecordSetsCommand = serializeAws_restXmlListResourceRecordSetsCommand;
const serializeAws_restXmlListReusableDelegationSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/delegationset";
    const query = {
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListReusableDelegationSetsCommand = serializeAws_restXmlListReusableDelegationSetsCommand;
const serializeAws_restXmlListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/tags/{ResourceType}/{ResourceId}";
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
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
exports.serializeAws_restXmlListTagsForResourceCommand = serializeAws_restXmlListTagsForResourceCommand;
const serializeAws_restXmlListTagsForResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/tags/{ResourceType}";
    if (input.ResourceType !== undefined) {
        const labelValue = input.ResourceType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceType.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ListTagsForResourcesRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.ResourceIds !== undefined) {
        const nodes = serializeAws_restXmlTagResourceIdList(input.ResourceIds, context);
        const containerNode = new xml_builder_1.XmlNode("ResourceIds");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
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
exports.serializeAws_restXmlListTagsForResourcesCommand = serializeAws_restXmlListTagsForResourcesCommand;
const serializeAws_restXmlListTrafficPoliciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicies";
    const query = {
        ...(input.TrafficPolicyIdMarker !== undefined && { trafficpolicyid: input.TrafficPolicyIdMarker }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListTrafficPoliciesCommand = serializeAws_restXmlListTrafficPoliciesCommand;
const serializeAws_restXmlListTrafficPolicyInstancesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicyinstances";
    const query = {
        ...(input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker }),
        ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
            trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
        }),
        ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
            trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
        }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListTrafficPolicyInstancesCommand = serializeAws_restXmlListTrafficPolicyInstancesCommand;
const serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicyinstances/hostedzone";
    const query = {
        ...(input.HostedZoneId !== undefined && { id: input.HostedZoneId }),
        ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
            trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
        }),
        ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
            trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
        }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand;
const serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicyinstances/trafficpolicy";
    const query = {
        ...(input.TrafficPolicyId !== undefined && { id: input.TrafficPolicyId }),
        ...(input.TrafficPolicyVersion !== undefined && { version: input.TrafficPolicyVersion.toString() }),
        ...(input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker }),
        ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
            trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
        }),
        ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
            trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
        }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand;
const serializeAws_restXmlListTrafficPolicyVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/trafficpolicies/{Id}/versions";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    const query = {
        ...(input.TrafficPolicyVersionMarker !== undefined && { trafficpolicyversion: input.TrafficPolicyVersionMarker }),
        ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
exports.serializeAws_restXmlListTrafficPolicyVersionsCommand = serializeAws_restXmlListTrafficPolicyVersionsCommand;
const serializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
    if (input.HostedZoneId !== undefined) {
        const labelValue = input.HostedZoneId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
        }
        resolvedPath = resolvedPath.replace("{HostedZoneId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HostedZoneId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }),
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
exports.serializeAws_restXmlListVPCAssociationAuthorizationsCommand = serializeAws_restXmlListVPCAssociationAuthorizationsCommand;
const serializeAws_restXmlTestDNSAnswerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-04-01/testdnsanswer";
    const query = {
        ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
        ...(input.RecordName !== undefined && { recordname: input.RecordName }),
        ...(input.RecordType !== undefined && { recordtype: input.RecordType }),
        ...(input.ResolverIP !== undefined && { resolverip: input.ResolverIP }),
        ...(input.EDNS0ClientSubnetIP !== undefined && { edns0clientsubnetip: input.EDNS0ClientSubnetIP }),
        ...(input.EDNS0ClientSubnetMask !== undefined && { edns0clientsubnetmask: input.EDNS0ClientSubnetMask }),
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
exports.serializeAws_restXmlTestDNSAnswerCommand = serializeAws_restXmlTestDNSAnswerCommand;
const serializeAws_restXmlUpdateHealthCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/healthcheck/{HealthCheckId}";
    if (input.HealthCheckId !== undefined) {
        const labelValue = input.HealthCheckId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
        }
        resolvedPath = resolvedPath.replace("{HealthCheckId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: HealthCheckId.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateHealthCheckRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.AlarmIdentifier !== undefined) {
        const node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.ChildHealthChecks !== undefined) {
        const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
        const containerNode = new xml_builder_1.XmlNode("ChildHealthChecks");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Disabled !== undefined) {
        const node = new xml_builder_1.XmlNode("Disabled").addChildNode(new xml_builder_1.XmlText(String(input.Disabled))).withName("Disabled");
        bodyNode.addChildNode(node);
    }
    if (input.EnableSNI !== undefined) {
        const node = new xml_builder_1.XmlNode("EnableSNI").addChildNode(new xml_builder_1.XmlText(String(input.EnableSNI))).withName("EnableSNI");
        bodyNode.addChildNode(node);
    }
    if (input.FailureThreshold !== undefined) {
        const node = new xml_builder_1.XmlNode("FailureThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.FailureThreshold)))
            .withName("FailureThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.FullyQualifiedDomainName !== undefined) {
        const node = new xml_builder_1.XmlNode("FullyQualifiedDomainName")
            .addChildNode(new xml_builder_1.XmlText(input.FullyQualifiedDomainName))
            .withName("FullyQualifiedDomainName");
        bodyNode.addChildNode(node);
    }
    if (input.HealthCheckVersion !== undefined) {
        const node = new xml_builder_1.XmlNode("HealthCheckVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthCheckVersion)))
            .withName("HealthCheckVersion");
        bodyNode.addChildNode(node);
    }
    if (input.HealthThreshold !== undefined) {
        const node = new xml_builder_1.XmlNode("HealthThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthThreshold)))
            .withName("HealthThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.IPAddress !== undefined) {
        const node = new xml_builder_1.XmlNode("IPAddress").addChildNode(new xml_builder_1.XmlText(input.IPAddress)).withName("IPAddress");
        bodyNode.addChildNode(node);
    }
    if (input.InsufficientDataHealthStatus !== undefined) {
        const node = new xml_builder_1.XmlNode("InsufficientDataHealthStatus")
            .addChildNode(new xml_builder_1.XmlText(input.InsufficientDataHealthStatus))
            .withName("InsufficientDataHealthStatus");
        bodyNode.addChildNode(node);
    }
    if (input.Inverted !== undefined) {
        const node = new xml_builder_1.XmlNode("Inverted").addChildNode(new xml_builder_1.XmlText(String(input.Inverted))).withName("Inverted");
        bodyNode.addChildNode(node);
    }
    if (input.Port !== undefined) {
        const node = new xml_builder_1.XmlNode("Port").addChildNode(new xml_builder_1.XmlText(String(input.Port))).withName("Port");
        bodyNode.addChildNode(node);
    }
    if (input.Regions !== undefined) {
        const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ResetElements !== undefined) {
        const nodes = serializeAws_restXmlResettableElementNameList(input.ResetElements, context);
        const containerNode = new xml_builder_1.XmlNode("ResetElements");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.ResourcePath !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourcePath").addChildNode(new xml_builder_1.XmlText(input.ResourcePath)).withName("ResourcePath");
        bodyNode.addChildNode(node);
    }
    if (input.SearchString !== undefined) {
        const node = new xml_builder_1.XmlNode("SearchString").addChildNode(new xml_builder_1.XmlText(input.SearchString)).withName("SearchString");
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
exports.serializeAws_restXmlUpdateHealthCheckCommand = serializeAws_restXmlUpdateHealthCheckCommand;
const serializeAws_restXmlUpdateHostedZoneCommentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/hostedzone/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateHostedZoneCommentRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("ResourceDescription").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
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
exports.serializeAws_restXmlUpdateHostedZoneCommentCommand = serializeAws_restXmlUpdateHostedZoneCommentCommand;
const serializeAws_restXmlUpdateTrafficPolicyCommentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicy/{Id}/{Version}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    if (input.Version !== undefined) {
        const labelValue = input.Version.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateTrafficPolicyCommentRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.Comment !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyComment").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
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
exports.serializeAws_restXmlUpdateTrafficPolicyCommentCommand = serializeAws_restXmlUpdateTrafficPolicyCommentCommand;
const serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = "/2013-04-01/trafficpolicyinstance/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateTrafficPolicyInstanceRequest");
    bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input.TTL !== undefined) {
        const node = new xml_builder_1.XmlNode("TTL").addChildNode(new xml_builder_1.XmlText(String(input.TTL))).withName("TTL");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyId !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyId))
            .withName("TrafficPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyVersion !== undefined) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyVersion")
            .addChildNode(new xml_builder_1.XmlText(String(input.TrafficPolicyVersion)))
            .withName("TrafficPolicyVersion");
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
exports.serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = serializeAws_restXmlUpdateTrafficPolicyInstanceCommand;
const deserializeAws_restXmlActivateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlActivateKeySigningKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlActivateKeySigningKeyCommand = deserializeAws_restXmlActivateKeySigningKeyCommand;
const deserializeAws_restXmlActivateKeySigningKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            response = {
                ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSigningStatus":
        case "com.amazonaws.route53#InvalidSigningStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchKeySigningKey":
        case "com.amazonaws.route53#NoSuchKeySigningKey":
            response = {
                ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = deserializeAws_restXmlAssociateVPCWithHostedZoneCommand;
const deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingDomainExists":
        case "com.amazonaws.route53#ConflictingDomainExists":
            response = {
                ...(await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            response = {
                ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceeded":
        case "com.amazonaws.route53#LimitsExceeded":
            response = {
                ...(await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.route53#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restXmlNotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PublicZoneVPCAssociation":
        case "com.amazonaws.route53#PublicZoneVPCAssociation":
            response = {
                ...(await deserializeAws_restXmlPublicZoneVPCAssociationResponse(parsedOutput, context)),
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
const deserializeAws_restXmlChangeResourceRecordSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlChangeResourceRecordSetsCommand = deserializeAws_restXmlChangeResourceRecordSetsCommand;
const deserializeAws_restXmlChangeResourceRecordSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidChangeBatch":
        case "com.amazonaws.route53#InvalidChangeBatch":
            response = {
                ...(await deserializeAws_restXmlInvalidChangeBatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
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
const deserializeAws_restXmlChangeTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlChangeTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlChangeTagsForResourceCommand = deserializeAws_restXmlChangeTagsForResourceCommand;
const deserializeAws_restXmlChangeTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53#ThrottlingException":
            response = {
                ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheck: undefined,
        Location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateHealthCheckCommand = deserializeAws_restXmlCreateHealthCheckCommand;
const deserializeAws_restXmlCreateHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckAlreadyExists":
        case "com.amazonaws.route53#HealthCheckAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlHealthCheckAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyHealthChecks":
        case "com.amazonaws.route53#TooManyHealthChecks":
            response = {
                ...(await deserializeAws_restXmlTooManyHealthChecksResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
        DelegationSet: undefined,
        HostedZone: undefined,
        Location: undefined,
        VPC: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    if (data["VPC"] !== undefined) {
        contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateHostedZoneCommand = deserializeAws_restXmlCreateHostedZoneCommand;
const deserializeAws_restXmlCreateHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingDomainExists":
        case "com.amazonaws.route53#ConflictingDomainExists":
            response = {
                ...(await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DelegationSetNotAvailable":
        case "com.amazonaws.route53#DelegationSetNotAvailable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DelegationSetNotReusable":
        case "com.amazonaws.route53#DelegationSetNotReusable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HostedZoneAlreadyExists":
        case "com.amazonaws.route53#HostedZoneAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlHostedZoneAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDomainName":
        case "com.amazonaws.route53#InvalidDomainName":
            response = {
                ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            response = {
                ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            response = {
                ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyHostedZones":
        case "com.amazonaws.route53#TooManyHostedZones":
            response = {
                ...(await deserializeAws_restXmlTooManyHostedZonesResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateKeySigningKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
        KeySigningKey: undefined,
        Location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    if (data["KeySigningKey"] !== undefined) {
        contents.KeySigningKey = deserializeAws_restXmlKeySigningKey(data["KeySigningKey"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateKeySigningKeyCommand = deserializeAws_restXmlCreateKeySigningKeyCommand;
const deserializeAws_restXmlCreateKeySigningKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            response = {
                ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyName":
        case "com.amazonaws.route53#InvalidKeySigningKeyName":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            response = {
                ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSigningStatus":
        case "com.amazonaws.route53#InvalidSigningStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeySigningKeyAlreadyExists":
        case "com.amazonaws.route53#KeySigningKeyAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyKeySigningKeys":
        case "com.amazonaws.route53#TooManyKeySigningKeys":
            response = {
                ...(await deserializeAws_restXmlTooManyKeySigningKeysResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Location: undefined,
        QueryLoggingConfig: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["QueryLoggingConfig"] !== undefined) {
        contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateQueryLoggingConfigCommand = deserializeAws_restXmlCreateQueryLoggingConfigCommand;
const deserializeAws_restXmlCreateQueryLoggingConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCloudWatchLogsResourcePolicy":
        case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy":
            response = {
                ...(await deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchCloudWatchLogsLogGroup":
        case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup":
            response = {
                ...(await deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QueryLoggingConfigAlreadyExists":
        case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DelegationSet: undefined,
        Location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateReusableDelegationSetCommand = deserializeAws_restXmlCreateReusableDelegationSetCommand;
const deserializeAws_restXmlCreateReusableDelegationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetAlreadyCreated":
        case "com.amazonaws.route53#DelegationSetAlreadyCreated":
            response = {
                ...(await deserializeAws_restXmlDelegationSetAlreadyCreatedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DelegationSetAlreadyReusable":
        case "com.amazonaws.route53#DelegationSetAlreadyReusable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetAlreadyReusableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DelegationSetNotAvailable":
        case "com.amazonaws.route53#DelegationSetNotAvailable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HostedZoneNotFound":
        case "com.amazonaws.route53#HostedZoneNotFound":
            response = {
                ...(await deserializeAws_restXmlHostedZoneNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            response = {
                ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceeded":
        case "com.amazonaws.route53#LimitsExceeded":
            response = {
                ...(await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Location: undefined,
        TrafficPolicy: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateTrafficPolicyCommand = deserializeAws_restXmlCreateTrafficPolicyCommand;
const deserializeAws_restXmlCreateTrafficPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficPolicyDocument":
        case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
            response = {
                ...(await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTrafficPolicies":
        case "com.amazonaws.route53#TooManyTrafficPolicies":
            response = {
                ...(await deserializeAws_restXmlTooManyTrafficPoliciesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrafficPolicyAlreadyExists":
        case "com.amazonaws.route53#TrafficPolicyAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Location: undefined,
        TrafficPolicyInstance: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = deserializeAws_restXmlCreateTrafficPolicyInstanceCommand;
const deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTrafficPolicyInstances":
        case "com.amazonaws.route53#TooManyTrafficPolicyInstances":
            response = {
                ...(await deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrafficPolicyInstanceAlreadyExists":
        case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists":
            response = {
                ...(await deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateTrafficPolicyVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Location: undefined,
        TrafficPolicy: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.Location = output.headers["location"];
    }
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateTrafficPolicyVersionCommand = deserializeAws_restXmlCreateTrafficPolicyVersionCommand;
const deserializeAws_restXmlCreateTrafficPolicyVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficPolicyDocument":
        case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
            response = {
                ...(await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTrafficPolicyVersionsForCurrentPolicy":
        case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy":
            response = {
                ...(await deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneId: undefined,
        VPC: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data["VPC"] !== undefined) {
        contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand;
const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            response = {
                ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyVPCAssociationAuthorizations":
        case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations":
            response = {
                ...(await deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeactivateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeactivateKeySigningKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeactivateKeySigningKeyCommand = deserializeAws_restXmlDeactivateKeySigningKeyCommand;
const deserializeAws_restXmlDeactivateKeySigningKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSigningStatus":
        case "com.amazonaws.route53#InvalidSigningStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeySigningKeyInParentDSRecord":
        case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
            response = {
                ...(await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeySigningKeyInUse":
        case "com.amazonaws.route53#KeySigningKeyInUse":
            response = {
                ...(await deserializeAws_restXmlKeySigningKeyInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchKeySigningKey":
        case "com.amazonaws.route53#NoSuchKeySigningKey":
            response = {
                ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteHealthCheckCommand = deserializeAws_restXmlDeleteHealthCheckCommand;
const deserializeAws_restXmlDeleteHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckInUse":
        case "com.amazonaws.route53#HealthCheckInUse":
            response = {
                ...(await deserializeAws_restXmlHealthCheckInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteHostedZoneCommand = deserializeAws_restXmlDeleteHostedZoneCommand;
const deserializeAws_restXmlDeleteHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HostedZoneNotEmpty":
        case "com.amazonaws.route53#HostedZoneNotEmpty":
            response = {
                ...(await deserializeAws_restXmlHostedZoneNotEmptyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDomainName":
        case "com.amazonaws.route53#InvalidDomainName":
            response = {
                ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteKeySigningKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteKeySigningKeyCommand = deserializeAws_restXmlDeleteKeySigningKeyCommand;
const deserializeAws_restXmlDeleteKeySigningKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            response = {
                ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSigningStatus":
        case "com.amazonaws.route53#InvalidSigningStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchKeySigningKey":
        case "com.amazonaws.route53#NoSuchKeySigningKey":
            response = {
                ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteQueryLoggingConfigCommand = deserializeAws_restXmlDeleteQueryLoggingConfigCommand;
const deserializeAws_restXmlDeleteQueryLoggingConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchQueryLoggingConfig":
        case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
            response = {
                ...(await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteReusableDelegationSetCommand = deserializeAws_restXmlDeleteReusableDelegationSetCommand;
const deserializeAws_restXmlDeleteReusableDelegationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetInUse":
        case "com.amazonaws.route53#DelegationSetInUse":
            response = {
                ...(await deserializeAws_restXmlDelegationSetInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DelegationSetNotReusable":
        case "com.amazonaws.route53#DelegationSetNotReusable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            response = {
                ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteTrafficPolicyCommand = deserializeAws_restXmlDeleteTrafficPolicyCommand;
const deserializeAws_restXmlDeleteTrafficPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrafficPolicyInUse":
        case "com.amazonaws.route53#TrafficPolicyInUse":
            response = {
                ...(await deserializeAws_restXmlTrafficPolicyInUseResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand;
const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand;
const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            response = {
                ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VPCAssociationAuthorizationNotFound":
        case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound":
            response = {
                ...(await deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDisableHostedZoneDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDisableHostedZoneDNSSECCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDisableHostedZoneDNSSECCommand = deserializeAws_restXmlDisableHostedZoneDNSSECCommand;
const deserializeAws_restXmlDisableHostedZoneDNSSECCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DNSSECNotFound":
        case "com.amazonaws.route53#DNSSECNotFound":
            response = {
                ...(await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            response = {
                ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            response = {
                ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeySigningKeyInParentDSRecord":
        case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
            response = {
                ...(await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand;
const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            response = {
                ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LastVPCAssociation":
        case "com.amazonaws.route53#LastVPCAssociation":
            response = {
                ...(await deserializeAws_restXmlLastVPCAssociationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VPCAssociationNotFound":
        case "com.amazonaws.route53#VPCAssociationNotFound":
            response = {
                ...(await deserializeAws_restXmlVPCAssociationNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_restXmlEnableHostedZoneDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlEnableHostedZoneDNSSECCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlEnableHostedZoneDNSSECCommand = deserializeAws_restXmlEnableHostedZoneDNSSECCommand;
const deserializeAws_restXmlEnableHostedZoneDNSSECCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DNSSECNotFound":
        case "com.amazonaws.route53#DNSSECNotFound":
            response = {
                ...(await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HostedZonePartiallyDelegated":
        case "com.amazonaws.route53#HostedZonePartiallyDelegated":
            response = {
                ...(await deserializeAws_restXmlHostedZonePartiallyDelegatedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            response = {
                ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            response = {
                ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            response = {
                ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeySigningKeyWithActiveStatusNotFound":
        case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound":
            response = {
                ...(await deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetAccountLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetAccountLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        Limit: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlAccountLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetAccountLimitCommand = deserializeAws_restXmlGetAccountLimitCommand;
const deserializeAws_restXmlGetAccountLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetChangeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetChangeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeInfo: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ChangeInfo"] !== undefined) {
        contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetChangeCommand = deserializeAws_restXmlGetChangeCommand;
const deserializeAws_restXmlGetChangeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchChange":
        case "com.amazonaws.route53#NoSuchChange":
            response = {
                ...(await deserializeAws_restXmlNoSuchChangeResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetCheckerIpRangesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CheckerIpRanges: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CheckerIpRanges === "") {
        contents.CheckerIpRanges = [];
    }
    if (data["CheckerIpRanges"] !== undefined && data["CheckerIpRanges"]["member"] !== undefined) {
        contents.CheckerIpRanges = deserializeAws_restXmlCheckerIpRanges(smithy_client_1.getArrayIfSingleItem(data["CheckerIpRanges"]["member"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetCheckerIpRangesCommand = deserializeAws_restXmlGetCheckerIpRangesCommand;
const deserializeAws_restXmlGetCheckerIpRangesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restXmlGetDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetDNSSECCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        KeySigningKeys: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.KeySigningKeys === "") {
        contents.KeySigningKeys = [];
    }
    if (data["KeySigningKeys"] !== undefined && data["KeySigningKeys"]["member"] !== undefined) {
        contents.KeySigningKeys = deserializeAws_restXmlKeySigningKeys(smithy_client_1.getArrayIfSingleItem(data["KeySigningKeys"]["member"]), context);
    }
    if (data["Status"] !== undefined) {
        contents.Status = deserializeAws_restXmlDNSSECStatus(data["Status"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetDNSSECCommand = deserializeAws_restXmlGetDNSSECCommand;
const deserializeAws_restXmlGetDNSSECCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            response = {
                ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetGeoLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetGeoLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GeoLocationDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["GeoLocationDetails"] !== undefined) {
        contents.GeoLocationDetails = deserializeAws_restXmlGeoLocationDetails(data["GeoLocationDetails"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetGeoLocationCommand = deserializeAws_restXmlGetGeoLocationCommand;
const deserializeAws_restXmlGetGeoLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchGeoLocation":
        case "com.amazonaws.route53#NoSuchGeoLocation":
            response = {
                ...(await deserializeAws_restXmlNoSuchGeoLocationResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheck: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHealthCheckCommand = deserializeAws_restXmlGetHealthCheckCommand;
const deserializeAws_restXmlGetHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleVersion":
        case "com.amazonaws.route53#IncompatibleVersion":
            response = {
                ...(await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHealthCheckCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHealthCheckCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheckCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheckCount"] !== undefined) {
        contents.HealthCheckCount = parseInt(data["HealthCheckCount"]);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHealthCheckCountCommand = deserializeAws_restXmlGetHealthCheckCountCommand;
const deserializeAws_restXmlGetHealthCheckCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheckObservations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HealthCheckObservations === "") {
        contents.HealthCheckObservations = [];
    }
    if (data["HealthCheckObservations"] !== undefined &&
        data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
        contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(smithy_client_1.getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand;
const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHealthCheckStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheckObservations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HealthCheckObservations === "") {
        contents.HealthCheckObservations = [];
    }
    if (data["HealthCheckObservations"] !== undefined &&
        data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined) {
        contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(smithy_client_1.getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHealthCheckStatusCommand = deserializeAws_restXmlGetHealthCheckStatusCommand;
const deserializeAws_restXmlGetHealthCheckStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DelegationSet: undefined,
        HostedZone: undefined,
        VPCs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    if (data.VPCs === "") {
        contents.VPCs = [];
    }
    if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
        contents.VPCs = deserializeAws_restXmlVPCs(smithy_client_1.getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHostedZoneCommand = deserializeAws_restXmlGetHostedZoneCommand;
const deserializeAws_restXmlGetHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHostedZoneCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHostedZoneCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneCount"] !== undefined) {
        contents.HostedZoneCount = parseInt(data["HostedZoneCount"]);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHostedZoneCountCommand = deserializeAws_restXmlGetHostedZoneCountCommand;
const deserializeAws_restXmlGetHostedZoneCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetHostedZoneLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        Limit: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlHostedZoneLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetHostedZoneLimitCommand = deserializeAws_restXmlGetHostedZoneLimitCommand;
const deserializeAws_restXmlGetHostedZoneLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HostedZoneNotPrivate":
        case "com.amazonaws.route53#HostedZoneNotPrivate":
            response = {
                ...(await deserializeAws_restXmlHostedZoneNotPrivateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        QueryLoggingConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["QueryLoggingConfig"] !== undefined) {
        contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetQueryLoggingConfigCommand = deserializeAws_restXmlGetQueryLoggingConfigCommand;
const deserializeAws_restXmlGetQueryLoggingConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchQueryLoggingConfig":
        case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
            response = {
                ...(await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DelegationSet: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["DelegationSet"] !== undefined) {
        contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetReusableDelegationSetCommand = deserializeAws_restXmlGetReusableDelegationSetCommand;
const deserializeAws_restXmlGetReusableDelegationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetNotReusable":
        case "com.amazonaws.route53#DelegationSetNotReusable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            response = {
                ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetReusableDelegationSetLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        Limit: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Count"] !== undefined) {
        contents.Count = parseInt(data["Count"]);
    }
    if (data["Limit"] !== undefined) {
        contents.Limit = deserializeAws_restXmlReusableDelegationSetLimit(data["Limit"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetReusableDelegationSetLimitCommand = deserializeAws_restXmlGetReusableDelegationSetLimitCommand;
const deserializeAws_restXmlGetReusableDelegationSetLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            response = {
                ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetTrafficPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TrafficPolicy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetTrafficPolicyCommand = deserializeAws_restXmlGetTrafficPolicyCommand;
const deserializeAws_restXmlGetTrafficPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TrafficPolicyInstance: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetTrafficPolicyInstanceCommand = deserializeAws_restXmlGetTrafficPolicyInstanceCommand;
const deserializeAws_restXmlGetTrafficPolicyInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
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
const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TrafficPolicyInstanceCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstanceCount"] !== undefined) {
        contents.TrafficPolicyInstanceCount = parseInt(data["TrafficPolicyInstanceCount"]);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand;
const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restXmlListGeoLocationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListGeoLocationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GeoLocationDetailsList: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        NextContinentCode: undefined,
        NextCountryCode: undefined,
        NextSubdivisionCode: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GeoLocationDetailsList === "") {
        contents.GeoLocationDetailsList = [];
    }
    if (data["GeoLocationDetailsList"] !== undefined &&
        data["GeoLocationDetailsList"]["GeoLocationDetails"] !== undefined) {
        contents.GeoLocationDetailsList = deserializeAws_restXmlGeoLocationDetailsList(smithy_client_1.getArrayIfSingleItem(data["GeoLocationDetailsList"]["GeoLocationDetails"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextContinentCode"] !== undefined) {
        contents.NextContinentCode = data["NextContinentCode"];
    }
    if (data["NextCountryCode"] !== undefined) {
        contents.NextCountryCode = data["NextCountryCode"];
    }
    if (data["NextSubdivisionCode"] !== undefined) {
        contents.NextSubdivisionCode = data["NextSubdivisionCode"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListGeoLocationsCommand = deserializeAws_restXmlListGeoLocationsCommand;
const deserializeAws_restXmlListGeoLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListHealthChecksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListHealthChecksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthChecks: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HealthChecks === "") {
        contents.HealthChecks = [];
    }
    if (data["HealthChecks"] !== undefined && data["HealthChecks"]["HealthCheck"] !== undefined) {
        contents.HealthChecks = deserializeAws_restXmlHealthChecks(smithy_client_1.getArrayIfSingleItem(data["HealthChecks"]["HealthCheck"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListHealthChecksCommand = deserializeAws_restXmlListHealthChecksCommand;
const deserializeAws_restXmlListHealthChecksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleVersion":
        case "com.amazonaws.route53#IncompatibleVersion":
            response = {
                ...(await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListHostedZonesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListHostedZonesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZones: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HostedZones === "") {
        contents.HostedZones = [];
    }
    if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
        contents.HostedZones = deserializeAws_restXmlHostedZones(smithy_client_1.getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListHostedZonesCommand = deserializeAws_restXmlListHostedZonesCommand;
const deserializeAws_restXmlListHostedZonesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DelegationSetNotReusable":
        case "com.amazonaws.route53#DelegationSetNotReusable":
            response = {
                ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            response = {
                ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListHostedZonesByNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListHostedZonesByNameCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DNSName: undefined,
        HostedZoneId: undefined,
        HostedZones: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        NextDNSName: undefined,
        NextHostedZoneId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["DNSName"] !== undefined) {
        contents.DNSName = data["DNSName"];
    }
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data.HostedZones === "") {
        contents.HostedZones = [];
    }
    if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
        contents.HostedZones = deserializeAws_restXmlHostedZones(smithy_client_1.getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextDNSName"] !== undefined) {
        contents.NextDNSName = data["NextDNSName"];
    }
    if (data["NextHostedZoneId"] !== undefined) {
        contents.NextHostedZoneId = data["NextHostedZoneId"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListHostedZonesByNameCommand = deserializeAws_restXmlListHostedZonesByNameCommand;
const deserializeAws_restXmlListHostedZonesByNameCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidDomainName":
        case "com.amazonaws.route53#InvalidDomainName":
            response = {
                ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListHostedZonesByVPCCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListHostedZonesByVPCCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneSummaries: undefined,
        MaxItems: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HostedZoneSummaries === "") {
        contents.HostedZoneSummaries = [];
    }
    if (data["HostedZoneSummaries"] !== undefined && data["HostedZoneSummaries"]["HostedZoneSummary"] !== undefined) {
        contents.HostedZoneSummaries = deserializeAws_restXmlHostedZoneSummaries(smithy_client_1.getArrayIfSingleItem(data["HostedZoneSummaries"]["HostedZoneSummary"]), context);
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListHostedZonesByVPCCommand = deserializeAws_restXmlListHostedZonesByVPCCommand;
const deserializeAws_restXmlListHostedZonesByVPCCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationToken":
        case "com.amazonaws.route53#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListQueryLoggingConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        QueryLoggingConfigs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.QueryLoggingConfigs === "") {
        contents.QueryLoggingConfigs = [];
    }
    if (data["QueryLoggingConfigs"] !== undefined && data["QueryLoggingConfigs"]["QueryLoggingConfig"] !== undefined) {
        contents.QueryLoggingConfigs = deserializeAws_restXmlQueryLoggingConfigs(smithy_client_1.getArrayIfSingleItem(data["QueryLoggingConfigs"]["QueryLoggingConfig"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListQueryLoggingConfigsCommand = deserializeAws_restXmlListQueryLoggingConfigsCommand;
const deserializeAws_restXmlListQueryLoggingConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationToken":
        case "com.amazonaws.route53#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListResourceRecordSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListResourceRecordSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IsTruncated: undefined,
        MaxItems: undefined,
        NextRecordIdentifier: undefined,
        NextRecordName: undefined,
        NextRecordType: undefined,
        ResourceRecordSets: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextRecordIdentifier"] !== undefined) {
        contents.NextRecordIdentifier = data["NextRecordIdentifier"];
    }
    if (data["NextRecordName"] !== undefined) {
        contents.NextRecordName = data["NextRecordName"];
    }
    if (data["NextRecordType"] !== undefined) {
        contents.NextRecordType = data["NextRecordType"];
    }
    if (data.ResourceRecordSets === "") {
        contents.ResourceRecordSets = [];
    }
    if (data["ResourceRecordSets"] !== undefined && data["ResourceRecordSets"]["ResourceRecordSet"] !== undefined) {
        contents.ResourceRecordSets = deserializeAws_restXmlResourceRecordSets(smithy_client_1.getArrayIfSingleItem(data["ResourceRecordSets"]["ResourceRecordSet"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListResourceRecordSetsCommand = deserializeAws_restXmlListResourceRecordSetsCommand;
const deserializeAws_restXmlListResourceRecordSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListReusableDelegationSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DelegationSets: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        MaxItems: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DelegationSets === "") {
        contents.DelegationSets = [];
    }
    if (data["DelegationSets"] !== undefined && data["DelegationSets"]["DelegationSet"] !== undefined) {
        contents.DelegationSets = deserializeAws_restXmlDelegationSets(smithy_client_1.getArrayIfSingleItem(data["DelegationSets"]["DelegationSet"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = data["Marker"];
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = data["NextMarker"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListReusableDelegationSetsCommand = deserializeAws_restXmlListReusableDelegationSetsCommand;
const deserializeAws_restXmlListReusableDelegationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
        ResourceTagSet: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["ResourceTagSet"] !== undefined) {
        contents.ResourceTagSet = deserializeAws_restXmlResourceTagSet(data["ResourceTagSet"], context);
    }
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
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53#ThrottlingException":
            response = {
                ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTagsForResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTagsForResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ResourceTagSets: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ResourceTagSets === "") {
        contents.ResourceTagSets = [];
    }
    if (data["ResourceTagSets"] !== undefined && data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
        contents.ResourceTagSets = deserializeAws_restXmlResourceTagSetList(smithy_client_1.getArrayIfSingleItem(data["ResourceTagSets"]["ResourceTagSet"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTagsForResourcesCommand = deserializeAws_restXmlListTagsForResourcesCommand;
const deserializeAws_restXmlListTagsForResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53#ThrottlingException":
            response = {
                ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTrafficPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTrafficPoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyIdMarker: undefined,
        TrafficPolicySummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["TrafficPolicyIdMarker"] !== undefined) {
        contents.TrafficPolicyIdMarker = data["TrafficPolicyIdMarker"];
    }
    if (data.TrafficPolicySummaries === "") {
        contents.TrafficPolicySummaries = [];
    }
    if (data["TrafficPolicySummaries"] !== undefined &&
        data["TrafficPolicySummaries"]["TrafficPolicySummary"] !== undefined) {
        contents.TrafficPolicySummaries = deserializeAws_restXmlTrafficPolicySummaries(smithy_client_1.getArrayIfSingleItem(data["TrafficPolicySummaries"]["TrafficPolicySummary"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTrafficPoliciesCommand = deserializeAws_restXmlListTrafficPoliciesCommand;
const deserializeAws_restXmlListTrafficPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTrafficPolicyInstancesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneIdMarker: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneIdMarker"] !== undefined) {
        contents.HostedZoneIdMarker = data["HostedZoneIdMarker"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker = data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker = data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(smithy_client_1.getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTrafficPolicyInstancesCommand = deserializeAws_restXmlListTrafficPolicyInstancesCommand;
const deserializeAws_restXmlListTrafficPolicyInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker = data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker = data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(smithy_client_1.getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand;
const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneIdMarker: undefined,
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicyInstanceNameMarker: undefined,
        TrafficPolicyInstanceTypeMarker: undefined,
        TrafficPolicyInstances: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneIdMarker"] !== undefined) {
        contents.HostedZoneIdMarker = data["HostedZoneIdMarker"];
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
        contents.TrafficPolicyInstanceNameMarker = data["TrafficPolicyInstanceNameMarker"];
    }
    if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
        contents.TrafficPolicyInstanceTypeMarker = data["TrafficPolicyInstanceTypeMarker"];
    }
    if (data.TrafficPolicyInstances === "") {
        contents.TrafficPolicyInstances = [];
    }
    if (data["TrafficPolicyInstances"] !== undefined &&
        data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(smithy_client_1.getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand;
const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListTrafficPolicyVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IsTruncated: undefined,
        MaxItems: undefined,
        TrafficPolicies: undefined,
        TrafficPolicyVersionMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = data["IsTruncated"] == "true";
    }
    if (data["MaxItems"] !== undefined) {
        contents.MaxItems = parseInt(data["MaxItems"]);
    }
    if (data.TrafficPolicies === "") {
        contents.TrafficPolicies = [];
    }
    if (data["TrafficPolicies"] !== undefined && data["TrafficPolicies"]["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicies = deserializeAws_restXmlTrafficPolicies(smithy_client_1.getArrayIfSingleItem(data["TrafficPolicies"]["TrafficPolicy"]), context);
    }
    if (data["TrafficPolicyVersionMarker"] !== undefined) {
        contents.TrafficPolicyVersionMarker = data["TrafficPolicyVersionMarker"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListTrafficPolicyVersionsCommand = deserializeAws_restXmlListTrafficPolicyVersionsCommand;
const deserializeAws_restXmlListTrafficPolicyVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZoneId: undefined,
        NextToken: undefined,
        VPCs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = data["HostedZoneId"];
    }
    if (data["NextToken"] !== undefined) {
        contents.NextToken = data["NextToken"];
    }
    if (data.VPCs === "") {
        contents.VPCs = [];
    }
    if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
        contents.VPCs = deserializeAws_restXmlVPCs(smithy_client_1.getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = deserializeAws_restXmlListVPCAssociationAuthorizationsCommand;
const deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationToken":
        case "com.amazonaws.route53#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlTestDNSAnswerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlTestDNSAnswerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Nameserver: undefined,
        Protocol: undefined,
        RecordData: undefined,
        RecordName: undefined,
        RecordType: undefined,
        ResponseCode: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["Nameserver"] !== undefined) {
        contents.Nameserver = data["Nameserver"];
    }
    if (data["Protocol"] !== undefined) {
        contents.Protocol = data["Protocol"];
    }
    if (data.RecordData === "") {
        contents.RecordData = [];
    }
    if (data["RecordData"] !== undefined && data["RecordData"]["RecordDataEntry"] !== undefined) {
        contents.RecordData = deserializeAws_restXmlRecordData(smithy_client_1.getArrayIfSingleItem(data["RecordData"]["RecordDataEntry"]), context);
    }
    if (data["RecordName"] !== undefined) {
        contents.RecordName = data["RecordName"];
    }
    if (data["RecordType"] !== undefined) {
        contents.RecordType = data["RecordType"];
    }
    if (data["ResponseCode"] !== undefined) {
        contents.ResponseCode = data["ResponseCode"];
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlTestDNSAnswerCommand = deserializeAws_restXmlTestDNSAnswerCommand;
const deserializeAws_restXmlTestDNSAnswerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlUpdateHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateHealthCheckCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HealthCheck: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateHealthCheckCommand = deserializeAws_restXmlUpdateHealthCheckCommand;
const deserializeAws_restXmlUpdateHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthCheckVersionMismatch":
        case "com.amazonaws.route53#HealthCheckVersionMismatch":
            response = {
                ...(await deserializeAws_restXmlHealthCheckVersionMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            response = {
                ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
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
const deserializeAws_restXmlUpdateHostedZoneCommentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HostedZone: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["HostedZone"] !== undefined) {
        contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateHostedZoneCommentCommand = deserializeAws_restXmlUpdateHostedZoneCommentCommand;
const deserializeAws_restXmlUpdateHostedZoneCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            response = {
                ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
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
const deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TrafficPolicy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicy"] !== undefined) {
        contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = deserializeAws_restXmlUpdateTrafficPolicyCommentCommand;
const deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            response = {
                ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
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
const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TrafficPolicyInstance: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data["TrafficPolicyInstance"] !== undefined) {
        contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(data["TrafficPolicyInstance"], context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand;
const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingTypes":
        case "com.amazonaws.route53#ConflictingTypes":
            response = {
                ...(await deserializeAws_restXmlConflictingTypesResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            response = {
                ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            response = {
                ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            response = {
                ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
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
const deserializeAws_restXmlConcurrentModificationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentModification",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlConflictingDomainExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingDomainExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlConflictingTypesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingTypes",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetAlreadyCreatedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetAlreadyCreated",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetAlreadyReusableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetAlreadyReusable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNotAvailableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetNotAvailable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNotReusableResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DelegationSetNotReusable",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlDNSSECNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DNSSECNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckVersionMismatchResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HealthCheckVersionMismatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotEmptyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotEmpty",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneNotPrivateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZoneNotPrivate",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZonePartiallyDelegatedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "HostedZonePartiallyDelegated",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlIncompatibleVersionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IncompatibleVersion",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InsufficientCloudWatchLogsResourcePolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidArgumentResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidChangeBatchResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidChangeBatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        messages: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    if (data.messages === "") {
        contents.messages = [];
    }
    if (data["messages"] !== undefined && data["messages"]["Message"] !== undefined) {
        contents.messages = deserializeAws_restXmlErrorMessages(smithy_client_1.getArrayIfSingleItem(data["messages"]["Message"]), context);
    }
    return contents;
};
const deserializeAws_restXmlInvalidDomainNameResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidDomainName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidInputResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidInput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidKeySigningKeyNameResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidKeySigningKeyName",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidKeySigningKeyStatusResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidKeySigningKeyStatus",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidKMSArnResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidKMSArn",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidPaginationTokenResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPaginationToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidSigningStatusResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidSigningStatus",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidTrafficPolicyDocument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlInvalidVPCIdResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidVPCId",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KeySigningKeyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KeySigningKeyInParentDSRecord",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKeyInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KeySigningKeyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KeySigningKeyWithActiveStatusNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlLastVPCAssociationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LastVPCAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlLimitsExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitsExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchChangeResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchChange",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchCloudWatchLogsLogGroup",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchDelegationSetResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchDelegationSet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchGeoLocationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchGeoLocation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchHealthCheckResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchHealthCheck",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchHostedZoneResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchHostedZone",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchKeySigningKeyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchKeySigningKey",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchQueryLoggingConfigResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchQueryLoggingConfig",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchTrafficPolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchTrafficPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoSuchTrafficPolicyInstance",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlNotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlPriorRequestNotCompleteResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PriorRequestNotComplete",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlPublicZoneVPCAssociationResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PublicZoneVPCAssociation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "QueryLoggingConfigAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyHealthChecksResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyHealthChecks",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyHostedZonesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyHostedZones",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyKeySigningKeysResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyKeySigningKeys",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPoliciesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicies",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicyInstances",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTrafficPolicyVersionsForCurrentPolicy",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyVPCAssociationAuthorizations",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyInstanceAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TrafficPolicyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "VPCAssociationAuthorizationNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const deserializeAws_restXmlVPCAssociationNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "VPCAssociationNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body.Error;
    if (data["message"] !== undefined) {
        contents.message = data["message"];
    }
    return contents;
};
const serializeAws_restXmlAlarmIdentifier = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AlarmIdentifier");
    if (input.Region !== undefined && input.Region !== null) {
        const node = new xml_builder_1.XmlNode("CloudWatchRegion").addChildNode(new xml_builder_1.XmlText(input.Region)).withName("Region");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined && input.Name !== null) {
        const node = new xml_builder_1.XmlNode("AlarmName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAliasTarget = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AliasTarget");
    if (input.HostedZoneId !== undefined && input.HostedZoneId !== null) {
        const node = new xml_builder_1.XmlNode("ResourceId").addChildNode(new xml_builder_1.XmlText(input.HostedZoneId)).withName("HostedZoneId");
        bodyNode.addChildNode(node);
    }
    if (input.DNSName !== undefined && input.DNSName !== null) {
        const node = new xml_builder_1.XmlNode("DNSName").addChildNode(new xml_builder_1.XmlText(input.DNSName)).withName("DNSName");
        bodyNode.addChildNode(node);
    }
    if (input.EvaluateTargetHealth !== undefined && input.EvaluateTargetHealth !== null) {
        const node = new xml_builder_1.XmlNode("AliasHealthEnabled")
            .addChildNode(new xml_builder_1.XmlText(String(input.EvaluateTargetHealth)))
            .withName("EvaluateTargetHealth");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlChange = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Change");
    if (input.Action !== undefined && input.Action !== null) {
        const node = new xml_builder_1.XmlNode("ChangeAction").addChildNode(new xml_builder_1.XmlText(input.Action)).withName("Action");
        bodyNode.addChildNode(node);
    }
    if (input.ResourceRecordSet !== undefined && input.ResourceRecordSet !== null) {
        const node = serializeAws_restXmlResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlChangeBatch = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ChangeBatch");
    if (input.Comment !== undefined && input.Comment !== null) {
        const node = new xml_builder_1.XmlNode("ResourceDescription").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Changes !== undefined && input.Changes !== null) {
        const nodes = serializeAws_restXmlChanges(input.Changes, context);
        const containerNode = new xml_builder_1.XmlNode("Changes");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlChanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlChange(entry, context);
        return node.withName("Change");
    });
};
const serializeAws_restXmlChildHealthCheckList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("HealthCheckId").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("ChildHealthCheck");
    });
};
const serializeAws_restXmlGeoLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GeoLocation");
    if (input.ContinentCode !== undefined && input.ContinentCode !== null) {
        const node = new xml_builder_1.XmlNode("GeoLocationContinentCode")
            .addChildNode(new xml_builder_1.XmlText(input.ContinentCode))
            .withName("ContinentCode");
        bodyNode.addChildNode(node);
    }
    if (input.CountryCode !== undefined && input.CountryCode !== null) {
        const node = new xml_builder_1.XmlNode("GeoLocationCountryCode")
            .addChildNode(new xml_builder_1.XmlText(input.CountryCode))
            .withName("CountryCode");
        bodyNode.addChildNode(node);
    }
    if (input.SubdivisionCode !== undefined && input.SubdivisionCode !== null) {
        const node = new xml_builder_1.XmlNode("GeoLocationSubdivisionCode")
            .addChildNode(new xml_builder_1.XmlText(input.SubdivisionCode))
            .withName("SubdivisionCode");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlHealthCheckConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("HealthCheckConfig");
    if (input.IPAddress !== undefined && input.IPAddress !== null) {
        const node = new xml_builder_1.XmlNode("IPAddress").addChildNode(new xml_builder_1.XmlText(input.IPAddress)).withName("IPAddress");
        bodyNode.addChildNode(node);
    }
    if (input.Port !== undefined && input.Port !== null) {
        const node = new xml_builder_1.XmlNode("Port").addChildNode(new xml_builder_1.XmlText(String(input.Port))).withName("Port");
        bodyNode.addChildNode(node);
    }
    if (input.Type !== undefined && input.Type !== null) {
        const node = new xml_builder_1.XmlNode("HealthCheckType").addChildNode(new xml_builder_1.XmlText(input.Type)).withName("Type");
        bodyNode.addChildNode(node);
    }
    if (input.ResourcePath !== undefined && input.ResourcePath !== null) {
        const node = new xml_builder_1.XmlNode("ResourcePath").addChildNode(new xml_builder_1.XmlText(input.ResourcePath)).withName("ResourcePath");
        bodyNode.addChildNode(node);
    }
    if (input.FullyQualifiedDomainName !== undefined && input.FullyQualifiedDomainName !== null) {
        const node = new xml_builder_1.XmlNode("FullyQualifiedDomainName")
            .addChildNode(new xml_builder_1.XmlText(input.FullyQualifiedDomainName))
            .withName("FullyQualifiedDomainName");
        bodyNode.addChildNode(node);
    }
    if (input.SearchString !== undefined && input.SearchString !== null) {
        const node = new xml_builder_1.XmlNode("SearchString").addChildNode(new xml_builder_1.XmlText(input.SearchString)).withName("SearchString");
        bodyNode.addChildNode(node);
    }
    if (input.RequestInterval !== undefined && input.RequestInterval !== null) {
        const node = new xml_builder_1.XmlNode("RequestInterval")
            .addChildNode(new xml_builder_1.XmlText(String(input.RequestInterval)))
            .withName("RequestInterval");
        bodyNode.addChildNode(node);
    }
    if (input.FailureThreshold !== undefined && input.FailureThreshold !== null) {
        const node = new xml_builder_1.XmlNode("FailureThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.FailureThreshold)))
            .withName("FailureThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.MeasureLatency !== undefined && input.MeasureLatency !== null) {
        const node = new xml_builder_1.XmlNode("MeasureLatency")
            .addChildNode(new xml_builder_1.XmlText(String(input.MeasureLatency)))
            .withName("MeasureLatency");
        bodyNode.addChildNode(node);
    }
    if (input.Inverted !== undefined && input.Inverted !== null) {
        const node = new xml_builder_1.XmlNode("Inverted").addChildNode(new xml_builder_1.XmlText(String(input.Inverted))).withName("Inverted");
        bodyNode.addChildNode(node);
    }
    if (input.Disabled !== undefined && input.Disabled !== null) {
        const node = new xml_builder_1.XmlNode("Disabled").addChildNode(new xml_builder_1.XmlText(String(input.Disabled))).withName("Disabled");
        bodyNode.addChildNode(node);
    }
    if (input.HealthThreshold !== undefined && input.HealthThreshold !== null) {
        const node = new xml_builder_1.XmlNode("HealthThreshold")
            .addChildNode(new xml_builder_1.XmlText(String(input.HealthThreshold)))
            .withName("HealthThreshold");
        bodyNode.addChildNode(node);
    }
    if (input.ChildHealthChecks !== undefined && input.ChildHealthChecks !== null) {
        const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
        const containerNode = new xml_builder_1.XmlNode("ChildHealthChecks");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.EnableSNI !== undefined && input.EnableSNI !== null) {
        const node = new xml_builder_1.XmlNode("EnableSNI").addChildNode(new xml_builder_1.XmlText(String(input.EnableSNI))).withName("EnableSNI");
        bodyNode.addChildNode(node);
    }
    if (input.Regions !== undefined && input.Regions !== null) {
        const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
        const containerNode = new xml_builder_1.XmlNode("Regions");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.AlarmIdentifier !== undefined && input.AlarmIdentifier !== null) {
        const node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.InsufficientDataHealthStatus !== undefined && input.InsufficientDataHealthStatus !== null) {
        const node = new xml_builder_1.XmlNode("InsufficientDataHealthStatus")
            .addChildNode(new xml_builder_1.XmlText(input.InsufficientDataHealthStatus))
            .withName("InsufficientDataHealthStatus");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlHealthCheckRegionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("HealthCheckRegion").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("Region");
    });
};
const serializeAws_restXmlHostedZoneConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("HostedZoneConfig");
    if (input.Comment !== undefined && input.Comment !== null) {
        const node = new xml_builder_1.XmlNode("ResourceDescription").addChildNode(new xml_builder_1.XmlText(input.Comment)).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.PrivateZone !== undefined && input.PrivateZone !== null) {
        const node = new xml_builder_1.XmlNode("IsPrivateZone")
            .addChildNode(new xml_builder_1.XmlText(String(input.PrivateZone)))
            .withName("PrivateZone");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlResettableElementNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("ResettableElementName").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("ResettableElementName");
    });
};
const serializeAws_restXmlResourceRecord = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResourceRecord");
    if (input.Value !== undefined && input.Value !== null) {
        const node = new xml_builder_1.XmlNode("RData").addChildNode(new xml_builder_1.XmlText(input.Value)).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlResourceRecords = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = serializeAws_restXmlResourceRecord(entry, context);
        return node.withName("ResourceRecord");
    });
};
const serializeAws_restXmlResourceRecordSet = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResourceRecordSet");
    if (input.Name !== undefined && input.Name !== null) {
        const node = new xml_builder_1.XmlNode("DNSName").addChildNode(new xml_builder_1.XmlText(input.Name)).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Type !== undefined && input.Type !== null) {
        const node = new xml_builder_1.XmlNode("RRType").addChildNode(new xml_builder_1.XmlText(input.Type)).withName("Type");
        bodyNode.addChildNode(node);
    }
    if (input.SetIdentifier !== undefined && input.SetIdentifier !== null) {
        const node = new xml_builder_1.XmlNode("ResourceRecordSetIdentifier")
            .addChildNode(new xml_builder_1.XmlText(input.SetIdentifier))
            .withName("SetIdentifier");
        bodyNode.addChildNode(node);
    }
    if (input.Weight !== undefined && input.Weight !== null) {
        const node = new xml_builder_1.XmlNode("ResourceRecordSetWeight")
            .addChildNode(new xml_builder_1.XmlText(String(input.Weight)))
            .withName("Weight");
        bodyNode.addChildNode(node);
    }
    if (input.Region !== undefined && input.Region !== null) {
        const node = new xml_builder_1.XmlNode("ResourceRecordSetRegion").addChildNode(new xml_builder_1.XmlText(input.Region)).withName("Region");
        bodyNode.addChildNode(node);
    }
    if (input.GeoLocation !== undefined && input.GeoLocation !== null) {
        const node = serializeAws_restXmlGeoLocation(input.GeoLocation, context).withName("GeoLocation");
        bodyNode.addChildNode(node);
    }
    if (input.Failover !== undefined && input.Failover !== null) {
        const node = new xml_builder_1.XmlNode("ResourceRecordSetFailover")
            .addChildNode(new xml_builder_1.XmlText(input.Failover))
            .withName("Failover");
        bodyNode.addChildNode(node);
    }
    if (input.MultiValueAnswer !== undefined && input.MultiValueAnswer !== null) {
        const node = new xml_builder_1.XmlNode("ResourceRecordSetMultiValueAnswer")
            .addChildNode(new xml_builder_1.XmlText(String(input.MultiValueAnswer)))
            .withName("MultiValueAnswer");
        bodyNode.addChildNode(node);
    }
    if (input.TTL !== undefined && input.TTL !== null) {
        const node = new xml_builder_1.XmlNode("TTL").addChildNode(new xml_builder_1.XmlText(String(input.TTL))).withName("TTL");
        bodyNode.addChildNode(node);
    }
    if (input.ResourceRecords !== undefined && input.ResourceRecords !== null) {
        const nodes = serializeAws_restXmlResourceRecords(input.ResourceRecords, context);
        const containerNode = new xml_builder_1.XmlNode("ResourceRecords");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.AliasTarget !== undefined && input.AliasTarget !== null) {
        const node = serializeAws_restXmlAliasTarget(input.AliasTarget, context).withName("AliasTarget");
        bodyNode.addChildNode(node);
    }
    if (input.HealthCheckId !== undefined && input.HealthCheckId !== null) {
        const node = new xml_builder_1.XmlNode("HealthCheckId")
            .addChildNode(new xml_builder_1.XmlText(input.HealthCheckId))
            .withName("HealthCheckId");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficPolicyInstanceId !== undefined && input.TrafficPolicyInstanceId !== null) {
        const node = new xml_builder_1.XmlNode("TrafficPolicyInstanceId")
            .addChildNode(new xml_builder_1.XmlText(input.TrafficPolicyInstanceId))
            .withName("TrafficPolicyInstanceId");
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
        const node = new xml_builder_1.XmlNode("TagValue").addChildNode(new xml_builder_1.XmlText(input.Value)).withName("Value");
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
const serializeAws_restXmlTagResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        const node = new xml_builder_1.XmlNode("TagResourceId").addChildNode(new xml_builder_1.XmlText(entry));
        return node.withName("ResourceId");
    });
};
const serializeAws_restXmlVPC = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VPC");
    if (input.VPCRegion !== undefined && input.VPCRegion !== null) {
        const node = new xml_builder_1.XmlNode("VPCRegion").addChildNode(new xml_builder_1.XmlText(input.VPCRegion)).withName("VPCRegion");
        bodyNode.addChildNode(node);
    }
    if (input.VPCId !== undefined && input.VPCId !== null) {
        const node = new xml_builder_1.XmlNode("VPCId").addChildNode(new xml_builder_1.XmlText(input.VPCId)).withName("VPCId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const deserializeAws_restXmlAccountLimit = (output, context) => {
    let contents = {
        Type: undefined,
        Value: undefined,
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlAlarmIdentifier = (output, context) => {
    let contents = {
        Region: undefined,
        Name: undefined,
    };
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_restXmlAliasTarget = (output, context) => {
    let contents = {
        HostedZoneId: undefined,
        DNSName: undefined,
        EvaluateTargetHealth: undefined,
    };
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["EvaluateTargetHealth"] !== undefined) {
        contents.EvaluateTargetHealth = output["EvaluateTargetHealth"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlChangeInfo = (output, context) => {
    let contents = {
        Id: undefined,
        Status: undefined,
        SubmittedAt: undefined,
        Comment: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SubmittedAt"] !== undefined) {
        contents.SubmittedAt = new Date(output["SubmittedAt"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    return contents;
};
const deserializeAws_restXmlCheckerIpRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlChildHealthCheckList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlCloudWatchAlarmConfiguration = (output, context) => {
    let contents = {
        EvaluationPeriods: undefined,
        Threshold: undefined,
        ComparisonOperator: undefined,
        Period: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Statistic: undefined,
        Dimensions: undefined,
    };
    if (output["EvaluationPeriods"] !== undefined) {
        contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
    }
    if (output["Threshold"] !== undefined) {
        contents.Threshold = parseFloat(output["Threshold"]);
    }
    if (output["ComparisonOperator"] !== undefined) {
        contents.ComparisonOperator = output["ComparisonOperator"];
    }
    if (output["Period"] !== undefined) {
        contents.Period = parseInt(output["Period"]);
    }
    if (output["MetricName"] !== undefined) {
        contents.MetricName = output["MetricName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Statistic"] !== undefined) {
        contents.Statistic = output["Statistic"];
    }
    if (output.Dimensions === "") {
        contents.Dimensions = [];
    }
    if (output["Dimensions"] !== undefined && output["Dimensions"]["Dimension"] !== undefined) {
        contents.Dimensions = deserializeAws_restXmlDimensionList(smithy_client_1.getArrayIfSingleItem(output["Dimensions"]["Dimension"]), context);
    }
    return contents;
};
const deserializeAws_restXmlDelegationSet = (output, context) => {
    let contents = {
        Id: undefined,
        CallerReference: undefined,
        NameServers: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output.NameServers === "") {
        contents.NameServers = [];
    }
    if (output["NameServers"] !== undefined && output["NameServers"]["NameServer"] !== undefined) {
        contents.NameServers = deserializeAws_restXmlDelegationSetNameServers(smithy_client_1.getArrayIfSingleItem(output["NameServers"]["NameServer"]), context);
    }
    return contents;
};
const deserializeAws_restXmlDelegationSetNameServers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlDelegationSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlDelegationSet(entry, context);
    });
};
const deserializeAws_restXmlDimension = (output, context) => {
    let contents = {
        Name: undefined,
        Value: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_restXmlDimensionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlDimension(entry, context);
    });
};
const deserializeAws_restXmlDNSSECStatus = (output, context) => {
    let contents = {
        ServeSignature: undefined,
        StatusMessage: undefined,
    };
    if (output["ServeSignature"] !== undefined) {
        contents.ServeSignature = output["ServeSignature"];
    }
    if (output["StatusMessage"] !== undefined) {
        contents.StatusMessage = output["StatusMessage"];
    }
    return contents;
};
const deserializeAws_restXmlErrorMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlGeoLocation = (output, context) => {
    let contents = {
        ContinentCode: undefined,
        CountryCode: undefined,
        SubdivisionCode: undefined,
    };
    if (output["ContinentCode"] !== undefined) {
        contents.ContinentCode = output["ContinentCode"];
    }
    if (output["CountryCode"] !== undefined) {
        contents.CountryCode = output["CountryCode"];
    }
    if (output["SubdivisionCode"] !== undefined) {
        contents.SubdivisionCode = output["SubdivisionCode"];
    }
    return contents;
};
const deserializeAws_restXmlGeoLocationDetails = (output, context) => {
    let contents = {
        ContinentCode: undefined,
        ContinentName: undefined,
        CountryCode: undefined,
        CountryName: undefined,
        SubdivisionCode: undefined,
        SubdivisionName: undefined,
    };
    if (output["ContinentCode"] !== undefined) {
        contents.ContinentCode = output["ContinentCode"];
    }
    if (output["ContinentName"] !== undefined) {
        contents.ContinentName = output["ContinentName"];
    }
    if (output["CountryCode"] !== undefined) {
        contents.CountryCode = output["CountryCode"];
    }
    if (output["CountryName"] !== undefined) {
        contents.CountryName = output["CountryName"];
    }
    if (output["SubdivisionCode"] !== undefined) {
        contents.SubdivisionCode = output["SubdivisionCode"];
    }
    if (output["SubdivisionName"] !== undefined) {
        contents.SubdivisionName = output["SubdivisionName"];
    }
    return contents;
};
const deserializeAws_restXmlGeoLocationDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlGeoLocationDetails(entry, context);
    });
};
const deserializeAws_restXmlHealthCheck = (output, context) => {
    let contents = {
        Id: undefined,
        CallerReference: undefined,
        LinkedService: undefined,
        HealthCheckConfig: undefined,
        HealthCheckVersion: undefined,
        CloudWatchAlarmConfiguration: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["LinkedService"] !== undefined) {
        contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
    }
    if (output["HealthCheckConfig"] !== undefined) {
        contents.HealthCheckConfig = deserializeAws_restXmlHealthCheckConfig(output["HealthCheckConfig"], context);
    }
    if (output["HealthCheckVersion"] !== undefined) {
        contents.HealthCheckVersion = parseInt(output["HealthCheckVersion"]);
    }
    if (output["CloudWatchAlarmConfiguration"] !== undefined) {
        contents.CloudWatchAlarmConfiguration = deserializeAws_restXmlCloudWatchAlarmConfiguration(output["CloudWatchAlarmConfiguration"], context);
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckConfig = (output, context) => {
    let contents = {
        IPAddress: undefined,
        Port: undefined,
        Type: undefined,
        ResourcePath: undefined,
        FullyQualifiedDomainName: undefined,
        SearchString: undefined,
        RequestInterval: undefined,
        FailureThreshold: undefined,
        MeasureLatency: undefined,
        Inverted: undefined,
        Disabled: undefined,
        HealthThreshold: undefined,
        ChildHealthChecks: undefined,
        EnableSNI: undefined,
        Regions: undefined,
        AlarmIdentifier: undefined,
        InsufficientDataHealthStatus: undefined,
    };
    if (output["IPAddress"] !== undefined) {
        contents.IPAddress = output["IPAddress"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["ResourcePath"] !== undefined) {
        contents.ResourcePath = output["ResourcePath"];
    }
    if (output["FullyQualifiedDomainName"] !== undefined) {
        contents.FullyQualifiedDomainName = output["FullyQualifiedDomainName"];
    }
    if (output["SearchString"] !== undefined) {
        contents.SearchString = output["SearchString"];
    }
    if (output["RequestInterval"] !== undefined) {
        contents.RequestInterval = parseInt(output["RequestInterval"]);
    }
    if (output["FailureThreshold"] !== undefined) {
        contents.FailureThreshold = parseInt(output["FailureThreshold"]);
    }
    if (output["MeasureLatency"] !== undefined) {
        contents.MeasureLatency = output["MeasureLatency"] == "true";
    }
    if (output["Inverted"] !== undefined) {
        contents.Inverted = output["Inverted"] == "true";
    }
    if (output["Disabled"] !== undefined) {
        contents.Disabled = output["Disabled"] == "true";
    }
    if (output["HealthThreshold"] !== undefined) {
        contents.HealthThreshold = parseInt(output["HealthThreshold"]);
    }
    if (output.ChildHealthChecks === "") {
        contents.ChildHealthChecks = [];
    }
    if (output["ChildHealthChecks"] !== undefined && output["ChildHealthChecks"]["ChildHealthCheck"] !== undefined) {
        contents.ChildHealthChecks = deserializeAws_restXmlChildHealthCheckList(smithy_client_1.getArrayIfSingleItem(output["ChildHealthChecks"]["ChildHealthCheck"]), context);
    }
    if (output["EnableSNI"] !== undefined) {
        contents.EnableSNI = output["EnableSNI"] == "true";
    }
    if (output.Regions === "") {
        contents.Regions = [];
    }
    if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
        contents.Regions = deserializeAws_restXmlHealthCheckRegionList(smithy_client_1.getArrayIfSingleItem(output["Regions"]["Region"]), context);
    }
    if (output["AlarmIdentifier"] !== undefined) {
        contents.AlarmIdentifier = deserializeAws_restXmlAlarmIdentifier(output["AlarmIdentifier"], context);
    }
    if (output["InsufficientDataHealthStatus"] !== undefined) {
        contents.InsufficientDataHealthStatus = output["InsufficientDataHealthStatus"];
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckObservation = (output, context) => {
    let contents = {
        Region: undefined,
        IPAddress: undefined,
        StatusReport: undefined,
    };
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["IPAddress"] !== undefined) {
        contents.IPAddress = output["IPAddress"];
    }
    if (output["StatusReport"] !== undefined) {
        contents.StatusReport = deserializeAws_restXmlStatusReport(output["StatusReport"], context);
    }
    return contents;
};
const deserializeAws_restXmlHealthCheckObservations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHealthCheckObservation(entry, context);
    });
};
const deserializeAws_restXmlHealthCheckRegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlHealthChecks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHealthCheck(entry, context);
    });
};
const deserializeAws_restXmlHostedZone = (output, context) => {
    let contents = {
        Id: undefined,
        Name: undefined,
        CallerReference: undefined,
        Config: undefined,
        ResourceRecordSetCount: undefined,
        LinkedService: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = output["CallerReference"];
    }
    if (output["Config"] !== undefined) {
        contents.Config = deserializeAws_restXmlHostedZoneConfig(output["Config"], context);
    }
    if (output["ResourceRecordSetCount"] !== undefined) {
        contents.ResourceRecordSetCount = parseInt(output["ResourceRecordSetCount"]);
    }
    if (output["LinkedService"] !== undefined) {
        contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneConfig = (output, context) => {
    let contents = {
        Comment: undefined,
        PrivateZone: undefined,
    };
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    if (output["PrivateZone"] !== undefined) {
        contents.PrivateZone = output["PrivateZone"] == "true";
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneLimit = (output, context) => {
    let contents = {
        Type: undefined,
        Value: undefined,
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlHostedZoneOwner = (output, context) => {
    let contents = {
        OwningAccount: undefined,
        OwningService: undefined,
    };
    if (output["OwningAccount"] !== undefined) {
        contents.OwningAccount = output["OwningAccount"];
    }
    if (output["OwningService"] !== undefined) {
        contents.OwningService = output["OwningService"];
    }
    return contents;
};
const deserializeAws_restXmlHostedZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHostedZone(entry, context);
    });
};
const deserializeAws_restXmlHostedZoneSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlHostedZoneSummary(entry, context);
    });
};
const deserializeAws_restXmlHostedZoneSummary = (output, context) => {
    let contents = {
        HostedZoneId: undefined,
        Name: undefined,
        Owner: undefined,
    };
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlHostedZoneOwner(output["Owner"], context);
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKey = (output, context) => {
    let contents = {
        Name: undefined,
        KmsArn: undefined,
        Flag: undefined,
        SigningAlgorithmMnemonic: undefined,
        SigningAlgorithmType: undefined,
        DigestAlgorithmMnemonic: undefined,
        DigestAlgorithmType: undefined,
        KeyTag: undefined,
        DigestValue: undefined,
        PublicKey: undefined,
        DSRecord: undefined,
        DNSKEYRecord: undefined,
        Status: undefined,
        StatusMessage: undefined,
        CreatedDate: undefined,
        LastModifiedDate: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["KmsArn"] !== undefined) {
        contents.KmsArn = output["KmsArn"];
    }
    if (output["Flag"] !== undefined) {
        contents.Flag = parseInt(output["Flag"]);
    }
    if (output["SigningAlgorithmMnemonic"] !== undefined) {
        contents.SigningAlgorithmMnemonic = output["SigningAlgorithmMnemonic"];
    }
    if (output["SigningAlgorithmType"] !== undefined) {
        contents.SigningAlgorithmType = parseInt(output["SigningAlgorithmType"]);
    }
    if (output["DigestAlgorithmMnemonic"] !== undefined) {
        contents.DigestAlgorithmMnemonic = output["DigestAlgorithmMnemonic"];
    }
    if (output["DigestAlgorithmType"] !== undefined) {
        contents.DigestAlgorithmType = parseInt(output["DigestAlgorithmType"]);
    }
    if (output["KeyTag"] !== undefined) {
        contents.KeyTag = parseInt(output["KeyTag"]);
    }
    if (output["DigestValue"] !== undefined) {
        contents.DigestValue = output["DigestValue"];
    }
    if (output["PublicKey"] !== undefined) {
        contents.PublicKey = output["PublicKey"];
    }
    if (output["DSRecord"] !== undefined) {
        contents.DSRecord = output["DSRecord"];
    }
    if (output["DNSKEYRecord"] !== undefined) {
        contents.DNSKEYRecord = output["DNSKEYRecord"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["StatusMessage"] !== undefined) {
        contents.StatusMessage = output["StatusMessage"];
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["LastModifiedDate"] !== undefined) {
        contents.LastModifiedDate = new Date(output["LastModifiedDate"]);
    }
    return contents;
};
const deserializeAws_restXmlKeySigningKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlKeySigningKey(entry, context);
    });
};
const deserializeAws_restXmlLinkedService = (output, context) => {
    let contents = {
        ServicePrincipal: undefined,
        Description: undefined,
    };
    if (output["ServicePrincipal"] !== undefined) {
        contents.ServicePrincipal = output["ServicePrincipal"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfig = (output, context) => {
    let contents = {
        Id: undefined,
        HostedZoneId: undefined,
        CloudWatchLogsLogGroupArn: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["CloudWatchLogsLogGroupArn"] !== undefined) {
        contents.CloudWatchLogsLogGroupArn = output["CloudWatchLogsLogGroupArn"];
    }
    return contents;
};
const deserializeAws_restXmlQueryLoggingConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlQueryLoggingConfig(entry, context);
    });
};
const deserializeAws_restXmlRecordData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restXmlResourceRecord = (output, context) => {
    let contents = {
        Value: undefined,
    };
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_restXmlResourceRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceRecord(entry, context);
    });
};
const deserializeAws_restXmlResourceRecordSet = (output, context) => {
    let contents = {
        Name: undefined,
        Type: undefined,
        SetIdentifier: undefined,
        Weight: undefined,
        Region: undefined,
        GeoLocation: undefined,
        Failover: undefined,
        MultiValueAnswer: undefined,
        TTL: undefined,
        ResourceRecords: undefined,
        AliasTarget: undefined,
        HealthCheckId: undefined,
        TrafficPolicyInstanceId: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["SetIdentifier"] !== undefined) {
        contents.SetIdentifier = output["SetIdentifier"];
    }
    if (output["Weight"] !== undefined) {
        contents.Weight = parseInt(output["Weight"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["GeoLocation"] !== undefined) {
        contents.GeoLocation = deserializeAws_restXmlGeoLocation(output["GeoLocation"], context);
    }
    if (output["Failover"] !== undefined) {
        contents.Failover = output["Failover"];
    }
    if (output["MultiValueAnswer"] !== undefined) {
        contents.MultiValueAnswer = output["MultiValueAnswer"] == "true";
    }
    if (output["TTL"] !== undefined) {
        contents.TTL = parseInt(output["TTL"]);
    }
    if (output.ResourceRecords === "") {
        contents.ResourceRecords = [];
    }
    if (output["ResourceRecords"] !== undefined && output["ResourceRecords"]["ResourceRecord"] !== undefined) {
        contents.ResourceRecords = deserializeAws_restXmlResourceRecords(smithy_client_1.getArrayIfSingleItem(output["ResourceRecords"]["ResourceRecord"]), context);
    }
    if (output["AliasTarget"] !== undefined) {
        contents.AliasTarget = deserializeAws_restXmlAliasTarget(output["AliasTarget"], context);
    }
    if (output["HealthCheckId"] !== undefined) {
        contents.HealthCheckId = output["HealthCheckId"];
    }
    if (output["TrafficPolicyInstanceId"] !== undefined) {
        contents.TrafficPolicyInstanceId = output["TrafficPolicyInstanceId"];
    }
    return contents;
};
const deserializeAws_restXmlResourceRecordSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceRecordSet(entry, context);
    });
};
const deserializeAws_restXmlResourceTagSet = (output, context) => {
    let contents = {
        ResourceType: undefined,
        ResourceId: undefined,
        Tags: undefined,
    };
    if (output["ResourceType"] !== undefined) {
        contents.ResourceType = output["ResourceType"];
    }
    if (output["ResourceId"] !== undefined) {
        contents.ResourceId = output["ResourceId"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_restXmlResourceTagSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlResourceTagSet(entry, context);
    });
};
const deserializeAws_restXmlReusableDelegationSetLimit = (output, context) => {
    let contents = {
        Type: undefined,
        Value: undefined,
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = parseInt(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlStatusReport = (output, context) => {
    let contents = {
        Status: undefined,
        CheckedTime: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CheckedTime"] !== undefined) {
        contents.CheckedTime = new Date(output["CheckedTime"]);
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
const deserializeAws_restXmlTrafficPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicy(entry, context);
    });
};
const deserializeAws_restXmlTrafficPolicy = (output, context) => {
    let contents = {
        Id: undefined,
        Version: undefined,
        Name: undefined,
        Type: undefined,
        Document: undefined,
        Comment: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = parseInt(output["Version"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Document"] !== undefined) {
        contents.Document = output["Document"];
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = output["Comment"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstance = (output, context) => {
    let contents = {
        Id: undefined,
        HostedZoneId: undefined,
        Name: undefined,
        TTL: undefined,
        State: undefined,
        Message: undefined,
        TrafficPolicyId: undefined,
        TrafficPolicyVersion: undefined,
        TrafficPolicyType: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["HostedZoneId"] !== undefined) {
        contents.HostedZoneId = output["HostedZoneId"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["TTL"] !== undefined) {
        contents.TTL = parseInt(output["TTL"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["TrafficPolicyId"] !== undefined) {
        contents.TrafficPolicyId = output["TrafficPolicyId"];
    }
    if (output["TrafficPolicyVersion"] !== undefined) {
        contents.TrafficPolicyVersion = parseInt(output["TrafficPolicyVersion"]);
    }
    if (output["TrafficPolicyType"] !== undefined) {
        contents.TrafficPolicyType = output["TrafficPolicyType"];
    }
    return contents;
};
const deserializeAws_restXmlTrafficPolicyInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicyInstance(entry, context);
    });
};
const deserializeAws_restXmlTrafficPolicySummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlTrafficPolicySummary(entry, context);
    });
};
const deserializeAws_restXmlTrafficPolicySummary = (output, context) => {
    let contents = {
        Id: undefined,
        Name: undefined,
        Type: undefined,
        LatestVersion: undefined,
        TrafficPolicyCount: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["LatestVersion"] !== undefined) {
        contents.LatestVersion = parseInt(output["LatestVersion"]);
    }
    if (output["TrafficPolicyCount"] !== undefined) {
        contents.TrafficPolicyCount = parseInt(output["TrafficPolicyCount"]);
    }
    return contents;
};
const deserializeAws_restXmlVPC = (output, context) => {
    let contents = {
        VPCRegion: undefined,
        VPCId: undefined,
    };
    if (output["VPCRegion"] !== undefined) {
        contents.VPCRegion = output["VPCRegion"];
    }
    if (output["VPCId"] !== undefined) {
        contents.VPCId = output["VPCId"];
    }
    return contents;
};
const deserializeAws_restXmlVPCs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restXmlVPC(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
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